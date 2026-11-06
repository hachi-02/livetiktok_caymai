const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const tiktokConnector = require('tiktok-live-connector');

const LiveConnectionClass =
  tiktokConnector.TikTokLiveConnection || tiktokConnector.WebcastPushConnection;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let tiktokConnection = null;
let currentUsername = null;

function extractUser(data) {
  const u = data.user || data || {};
  const uniqueId = u.uniqueId || data.uniqueId || u.userId || data.userId || `user_${Date.now()}`;
  const nickname = u.nickname || data.nickname || uniqueId || 'Khách Xuân';
  const avatar =
    u.profilePictureUrl ||
    (u.profilePicture && u.profilePicture.url && u.profilePicture.url[0]) ||
    data.profilePictureUrl ||
    '';
  return { userId: uniqueId, uniqueId, nickname, avatar };
}

function disconnectTikTok() {
  if (tiktokConnection) {
    try {
      tiktokConnection.disconnect();
    } catch (err) {
      // ignore disconnect errors
    }
    tiktokConnection = null;
  }
  currentUsername = null;
}

function connectToTikTok(username) {
  disconnectTikTok();
  const cleanUsername = username.replace(/^@/, '').trim();
  if (!cleanUsername) return;

  currentUsername = cleanUsername;
  tiktokConnection = new LiveConnectionClass(cleanUsername, {
    processInitialData: false,
    enableExtendedGiftInfo: true
  });

  io.emit('tiktok:status', {
    state: 'connecting',
    username: cleanUsername,
    message: `Đang kết nối tới phòng live @${cleanUsername}...`
  });

  tiktokConnection
    .connect()
    .then((state) => {
      const roomId = (state && state.roomId) || 'Live';
      console.log(`[TikTok] Connected to roomId ${roomId} (@${cleanUsername})`);
      io.emit('tiktok:status', {
        state: 'connected',
        username: cleanUsername,
        roomId,
        message: `Đã kết nối trực tiếp với @${cleanUsername} (Room: ${roomId})`
      });
    })
    .catch((err) => {
      console.error(`[TikTok] Failed to connect to @${cleanUsername}:`, err.message || err);
      io.emit('tiktok:status', {
        state: 'error',
        username: cleanUsername,
        message: `Không thể kết nối @${cleanUsername}: ${err.message || 'Kênh chưa bật Live.'}`
      });
    });

  // Sự kiện Bình luận (Comment)
  tiktokConnection.on('chat', (data) => {
    const user = extractUser(data);
    io.emit('live:chat', {
      ...user,
      comment: data.comment || ''
    });
  });

  // Sự kiện Tặng Quà / Tặng Bông (Gift)
  tiktokConnection.on('gift', (data) => {
    const user = extractUser(data);
    const giftDetails = data.giftDetails || data.extendedGiftInfo || data || {};
    const giftType = data.giftType !== undefined ? data.giftType : giftDetails.giftType;
    const repeatEnd = data.repeatEnd !== undefined ? data.repeatEnd : true;

    // Với quà có combo (giftType === 1, ví dụ Bông Hồng), chỉ chốt khi repeatEnd === true
    if (giftType === 1 && !repeatEnd) {
      return;
    }

    const repeatCount = data.repeatCount || 1;
    const diamondUnit = data.diamondCount || giftDetails.diamondCount || 1;
    const totalCoins = repeatCount * diamondUnit;
    const giftName = data.giftName || giftDetails.giftName || 'Bông Hồng';

    io.emit('live:gift', {
      ...user,
      giftName,
      repeatCount,
      diamondCount: diamondUnit,
      totalCoins
    });
  });

  // Sự kiện Thả tim (Like)
  tiktokConnection.on('like', (data) => {
    const user = extractUser(data);
    io.emit('live:like', {
      ...user,
      likeCount: data.likeCount || 1,
      totalLikeCount: data.totalLikeCount || 0
    });
  });

  tiktokConnection.on('streamEnd', () => {
    io.emit('tiktok:status', {
      state: 'disconnected',
      username: cleanUsername,
      message: `Phiên livestream của @${cleanUsername} đã kết thúc.`
    });
    disconnectTikTok();
  });

  tiktokConnection.on('disconnected', () => {
    io.emit('tiktok:status', {
      state: 'disconnected',
      username: cleanUsername,
      message: `Đã ngắt kết nối với @${cleanUsername}.`
    });
  });

  tiktokConnection.on('error', (err) => {
    console.error(`[TikTok] Stream error (@${cleanUsername}):`, err.message || err);
  });
}

io.on('connection', (socket) => {
  if (currentUsername && tiktokConnection) {
    socket.emit('tiktok:status', {
      state: 'connected',
      username: currentUsername,
      message: `Đang kết nối với @${currentUsername}`
    });
  }

  socket.on('tiktok:connect', ({ username }) => {
    if (username) {
      connectToTikTok(username);
    }
  });

  socket.on('tiktok:disconnect', () => {
    disconnectTikTok();
    io.emit('tiktok:status', {
      state: 'disconnected',
      username: null,
      message: 'Đã ngắt kết nối TikTok Live (Chế độ Giả lập sẵn sàng).'
    });
  });
});

server.listen(PORT, () => {
  console.log(`=====================================================`);
  console.log(`🌸 App TikTok Live Tết đang chạy tại: http://localhost:${PORT}`);
  console.log(`=====================================================`);
});
