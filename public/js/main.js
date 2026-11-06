// ================= KẾT NỐI SOCKET.IO & ĐIỀU KHIỂN GIAO DIỆN (UI CONTROLS) =================

let autoDemoInterval = null;
const socket = io();

socket.on('tiktok:status', (data) => {
  const pill = document.getElementById('connectionStatus');
  if (data.state === 'connected') {
    pill.style.color = '#4ade80';
    pill.textContent = `🟢 ${data.message}`;
  } else if (data.state === 'connecting') {
    pill.style.color = '#facc15';
    pill.textContent = `🟡 ${data.message}`;
  } else if (data.state === 'error') {
    pill.style.color = '#f87171';
    pill.textContent = `🔴 ${data.message}`;
  } else {
    pill.style.color = '#b4bdd0';
    pill.textContent = `⚪ ${data.message}`;
  }
});

socket.on('live:chat', (data) => {
  handleCommentEvent(data);
});

socket.on('live:gift', (data) => {
  handleGiftEvent(data);
});

socket.on('live:like', () => {
  spawnCoinAndEnvelopeRain(2);
});

// ================= CÁC NÚT ĐIỀU KHIỂN & GIẢ LẬP (TEST MODE) =================

function getSimUser() {
  const customName = document.getElementById('simNameInput').value.trim();
  const customComment = document.getElementById('simCommentInput').value.trim();
  const sample = SAMPLE_USERS[Math.floor(Math.random() * SAMPLE_USERS.length)];

  const nickname = customName || sample.nickname;
  return {
    userId: nickname.toLowerCase().replace(/\s+/g, '_'),
    nickname,
    avatar: customName ? makeFallbackAvatar(customName) : sample.avatar,
    comment: customComment || sample.comment
  };
}

document.getElementById('connectBtn').addEventListener('click', () => {
  const username = document.getElementById('tiktokUsernameInput').value.trim();
  if (!username) {
    alert('Vui lòng nhập @username kênh TikTok đang bật Live!');
    return;
  }
  socket.emit('tiktok:connect', { username });
});

document.getElementById('disconnectBtn').addEventListener('click', () => {
  socket.emit('tiktok:disconnect');
});

document.getElementById('btnSimComment').addEventListener('click', () => {
  handleCommentEvent(getSimUser());
});

document.getElementById('btnSimRose1').addEventListener('click', () => {
  const u = getSimUser();
  handleGiftEvent({
    ...u,
    giftName: 'Bông Hồng',
    repeatCount: 1,
    totalCoins: 1
  });
});

document.getElementById('btnSimRose10').addEventListener('click', () => {
  const u = getSimUser();
  handleGiftEvent({
    ...u,
    giftName: 'Bông Hồng',
    repeatCount: 10,
    totalCoins: 10
  });
});

document.getElementById('btnSimJackpot').addEventListener('click', () => {
  const u = getSimUser();
  const needed = Math.max(1, TREE_MAX_ENERGY - treeEnergy);
  addTreeEnergy(needed, u);
});

// Nút Test Đặc quyền số 1: Top 1 Gõ Comment -> Hiện Chiếu Chỉ Vàng & Loa AI đọc nguyên văn
document.getElementById('btnSimKingChat').addEventListener('click', () => {
  const customComment = document.getElementById('simCommentInput').value.trim();
  const kingPhrases = [
    'Chúc cả phòng năm mới tiền vào như nước, ai thả tim phát tài hết nhé!',
    'Năm nay anh em nào tuổi Mão tuổi Thìn chuẩn bị hốt bạc tỷ nha!',
    'Ngai vàng Thần Tài này hôm nay đố ai cướp được của ta!',
    'Tìm người yêu đi chơi Giao Thừa, ai tặng bông làm quen đi!'
  ];
  const commentText = customComment || kingPhrases[Math.floor(Math.random() * kingPhrases.length)];

  if (!currentTop1Id || !players.has(currentTop1Id)) {
    const sampleKing = getSimUser();
    addPlayerScore(sampleKing, 888, true);
  }

  const currentKing = players.get(currentTop1Id);
  handleCommentEvent({
    userId: currentKing.userId,
    nickname: currentKing.nickname,
    avatar: currentKing.avatar,
    comment: commentText
  });
});

// Nút Test Đại lễ Đăng Cơ Top 1: Rồng Vàng Chạy Dọc Viền Bảng (Soán Ngôi)
document.getElementById('btnSimCoronation').addEventListener('click', () => {
  const candidates = SAMPLE_USERS.filter(
    (s) => s.nickname.toLowerCase().replace(/\s+/g, '_') !== currentTop1Id
  );
  const pick = candidates[Math.floor(Math.random() * candidates.length)] || SAMPLE_USERS[0];
  const customName = document.getElementById('simNameInput').value.trim();
  const nickname = customName || pick.nickname;
  let userId = nickname.toLowerCase().replace(/\s+/g, '_');

  if (userId === currentTop1Id) {
    userId = `${userId}_${Date.now()}`;
  }

  const currentKingScore = currentTop1Id && players.has(currentTop1Id)
    ? players.get(currentTop1Id).score
    : 500;
  const myOldScore = players.has(userId) ? players.get(userId).score : 0;
  const bonusNeeded = Math.max(888, currentKingScore - myOldScore + 688);

  const newKingUser = {
    userId,
    nickname,
    avatar: customName ? makeFallbackAvatar(customName) : pick.avatar
  };

  addPlayerScore(newKingUser, bonusNeeded, true);
  appendEventLog(
    `🐉👑 <strong>KIM BÀI CỬU LONG!</strong> <strong>${nickname}</strong> chính thức đăng cơ Đệ Nhất Thần Tài!`
  );
});

// Chế độ Tự Động Mô Phỏng Phòng Đông Người
document.getElementById('btnAutoDemo').addEventListener('click', (e) => {
  const btn = e.currentTarget;
  if (autoDemoInterval) {
    clearInterval(autoDemoInterval);
    autoDemoInterval = null;
    btn.classList.remove('active');
    btn.textContent = '🤖 Bật Tự Động Mô Phỏng Phòng Đông Người';
  } else {
    btn.classList.add('active');
    btn.textContent = '⏹️ Đang Chạy Tự Động Mô Phỏng (Bấm để dừng)';
    handleCommentEvent(getSimUser());
    autoDemoInterval = setInterval(() => {
      const roll = Math.random();
      const u = SAMPLE_USERS[Math.floor(Math.random() * SAMPLE_USERS.length)];
      if (roll < 0.58) {
        handleCommentEvent(u);
      } else if (roll < 0.88) {
        handleGiftEvent({ ...u, giftName: 'Bông Hồng', repeatCount: 1, totalCoins: 1 });
      } else {
        handleGiftEvent({ ...u, giftName: 'Bông Hồng', repeatCount: 5, totalCoins: 5 });
      }
    }, 2800);
  }
});

// Nút đổi ảnh Asset trực tiếp từ máy tính
function bindImageUploader(inputId, targetCallback) {
  document.getElementById(inputId).addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    targetCallback(url);
  });
}

bindImageUploader('uploadTreeInput', (url) => {
  document.getElementById('treeImage').src = url;
});
bindImageUploader('uploadBgInput', (url) => {
  document.getElementById('stageBg').style.backgroundImage = `url('${url}')`;
});
bindImageUploader('uploadCylinderInput', (url) => {
  document.getElementById('cylinderImg').src = url;
});

// Chế độ ẩn bảng điều khiển để quay OBS / TikTok Live Studio
function toggleObsMode() {
  const layout = document.getElementById('appLayout');
  const restoreBtn = document.getElementById('restorePanelBtn');
  layout.classList.toggle('obs-mode');
  restoreBtn.classList.toggle('hidden', !layout.classList.contains('obs-mode'));
}

document.getElementById('btnObsMode').addEventListener('click', toggleObsMode);
document.getElementById('restorePanelBtn').addEventListener('click', toggleObsMode);
window.addEventListener('keydown', (e) => {
  if ((e.key === 'h' || e.key === 'H') && document.activeElement.tagName !== 'INPUT') {
    toggleObsMode();
  }
});

document.getElementById('btnResetLeaderboard').addEventListener('click', () => {
  players.clear();
  currentTop1Id = null;
  treeEnergy = 0;
  treeLevel = 1;
  updateLeaderboardUI();
  updateTreeOrnamentsUI();
  updateEnergyBarUI();
  document.getElementById('bloomLayer').innerHTML = '';
  appendEventLog('🔄 Đã làm mới Bảng Vàng Thần Tài & Cây Mai.');
});

// Khởi tạo giao diện ban đầu
updateLeaderboardUI();
updateEnergyBarUI();
appendEventLog('🌸 Sẵn sàng! Hãy bấm các nút Giả lập bên trên để test hiệu ứng.');
