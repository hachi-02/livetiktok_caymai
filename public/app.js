// ================= DỮ LIỆU QUẺ TẾT, CHỮ ÔNG ĐỒ & 12 CON GIÁP =================

const ZODIAC_ANIMALS = [
  'Thân (Khỉ Vàng)', 'Dậu (Gà Vàng)', 'Tuất (Chó Vàng)', 'Hợi (Heo Vàng)',
  'Tý (Chuột Vàng)', 'Sửu (Trâu Vàng)', 'Dần (Hổ Vàng)', 'Mão (Mèo Vàng)',
  'Thìn (Rồng Vàng)', 'Tỵ (Rắn Vàng)', 'Ngọ (Ngựa Vàng)', 'Mùi (Dê Vàng)'
];

const FORTUNE_LIST = [
  {
    rank: 'THƯỢNG THƯỢNG CÁT',
    text: 'Năm mới Quý Nhân phù trợ, bước chân ra cửa gặp Thần Tài, tiền bạc rủng rỉnh cả năm!'
  },
  {
    rank: 'ĐẠI CÁT ĐẠI LỢI',
    text: 'Hoa mai nở rộ trước thềm, công danh bứt phá, tình duyên phơi phới như nắng mùa xuân!'
  },
  {
    rank: 'THƯỢNG CÁT',
    text: 'Vận khí hanh thông, làm một hưởng mười, túi tiền lúc nào cũng căng tròn lộc lá!'
  },
  {
    rank: 'HỒNG PHÚC TỀ THIÊN',
    text: 'Đầu năm hái lộc đầy tay, giữa năm mua vàng, cuối năm tậu xe, vạn sự viên mãn!'
  },
  {
    rank: 'PHÚ QUÝ CÁT TƯỜNG',
    text: 'Sao Thái Dương chiếu mệnh, chuyện buồn năm cũ qua đi, đón vận đỏ rực rỡ suốt 12 tháng!'
  },
  {
    rank: 'ĐÀO HOA RỰC RỠ',
    text: 'Tình duyên nở hoa, người thương tìm tới, tiền tình đều đỏ như son ngày Tết!'
  }
];

const CALLIGRAPHY_LIST = [
  {
    char: 'ĐẠI PHÁT',
    seal: 'PHÁT\nTÀI',
    couplet: '“Lộc biếc mai vàng xuân hạnh phúc — Đời vui sức khỏe Tết an khang”'
  },
  {
    char: 'PHÚ QUÝ',
    seal: 'KIM\nNGỌC',
    couplet: '“Tiền vào như nước sông Đà — Tiền ra nhỏ giọt như cà phê phin”'
  },
  {
    char: 'ĐẠI LỘC',
    seal: 'VẠN\nLỘC',
    couplet: '“Đầu xuân hái lộc bình an — Cả năm phú quý ngập tràn vinh hoa”'
  },
  {
    char: 'TIỀN ĐẦY TÚI',
    seal: 'THẦN\nTÀI',
    couplet: '“Vàng bạc đầy kho tiêu chẳng hết — Tình duyên phơi phới trọn mùa xuân”'
  },
  {
    char: 'VẠN SỰ NHƯ Ý',
    seal: 'ĐẠI\nCÁT',
    couplet: '“Cầu tài đắc tài, cầu lộc đắc lộc — Cầu bình an đắc vạn điều may”'
  },
  {
    char: 'TÌNH DUYÊN ĐỎ',
    seal: 'ĐÀO\nHOA',
    couplet: '“Xuân sang hoa nở ngập đường — Năm nay chắc chắn có người thương cùng về”'
  }
];

// Bộ Chữ Thư Pháp Hoàng Kim Đế Vương ĐỘC QUYỀN chỉ dành cho Top 1 Thần Tài
const IMPERIAL_KING_CALLIGRAPHY_LIST = [
  {
    char: 'CỬU NGŨ CHÍ TÔN',
    seal: 'ĐẾ\nVƯƠNG',
    couplet: '“Trên thông thiên văn dưới tường địa lý — Phú quý vinh hoa đứng đầu thiên hạ”'
  },
  {
    char: 'ĐỆ NHẤT PHÚ GIA',
    seal: 'CHÍ\nTÔN',
    couplet: '“Tiền chất thành núi vàng chất đầy kho — Một tay che trời vạn người ngưỡng mộ”'
  },
  {
    char: 'THẦN TÀI GIÁ LÂM',
    seal: 'LONG\nẤN',
    couplet: '“Rồng bay phượng múa đón bước chân vua — Lộc lá bốn phương tự tìm về túi”'
  },
  {
    char: 'LONG PHƯỢNG HỘ MỆNH',
    seal: 'THIÊN\nTỬ',
    couplet: '“Mệnh lớn như trời phúc dày như biển — Đánh đâu thắng đó vạn sự xưng vương”'
  }
];

// 12 tọa độ treo Bao Lì Xì Avatar trên tán Cây Mai (từ cành cao VIP xuống cành thấp)
const TREE_BRANCH_SLOTS = [
  { x: 50, y: 20 }, // Top VIP 1
  { x: 32, y: 26 }, // Top VIP 2
  { x: 68, y: 26 }, // Top VIP 3
  { x: 20, y: 40 },
  { x: 50, y: 38 },
  { x: 80, y: 40 },
  { x: 26, y: 55 },
  { x: 74, y: 55 },
  { x: 40, y: 52 },
  { x: 60, y: 52 },
  { x: 33, y: 68 },
  { x: 67, y: 68 }
];

// Danh sách người chơi mẫu cho chế độ Test / Giả lập
const SAMPLE_USERS = [
  { nickname: 'Minh Anh 99', comment: '1999 xin quẻ tình duyên ạ', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=MinhAnh&backgroundColor=ffdfbf' },
  { nickname: 'Hùng Đại Gia', comment: '1995 xin vía phát tài', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Hung&backgroundColor=ffd5dc' },
  { nickname: 'Ngọc Huyền 2k2', comment: '2002 năm nay có giàu không shop', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Huyen&backgroundColor=c0aede' },
  { nickname: 'Tuấn Phát Tài', comment: 'Xin quẻ đầu năm 1998', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Tuan&backgroundColor=d1d4f9' },
  { nickname: 'Bảo Trâm 🌸', comment: '2000 chúc chủ phòng phát tài', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Tram&backgroundColor=b6e3f4' },
  { nickname: 'Hoàng Long VIP', comment: '2001 tuổi Tỵ xin lộc', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Long&backgroundColor=ffdfbf' },
  { nickname: 'Khánh Linh 2k3', comment: '2003 xin quẻ công danh', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Linh&backgroundColor=ffd5dc' }
];

// ================= TRẠNG THÁI TRÒ CHƠI (STATE) =================
const players = new Map(); // userId -> { userId, nickname, avatar, score, isVip, lastActive }
let currentTop1Id = null;

const TREE_MAX_ENERGY = 200; // Điểm Khí Xuân cần đạt để Nổ Hũ Cây Mai
let treeEnergy = 0; // 0 -> 200
let treeLevel = 1;

const centerStageQueue = []; // Hàng đợi chung cho cả Chiếu Ông Đồ (gift) và Nổ Hũ Cây Mai (jackpot)
let isShowingCenterStage = false;

const FORTUNE_DISPLAY_MS = 6000; // Thời gian cố định (6 giây) hiển thị mỗi Quẻ Comment để người xem kịp đọc
const commentFortuneQueue = [];
let isShowingCommentFortune = false;

let autoDemoInterval = null;

// ================= ÂM THANH (WEB AUDIO API + TTS TIẾNG VIỆT) =================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function isSoundEnabled() {
  const el = document.getElementById('soundToggle');
  return el ? el.checked : true;
}

function isTtsEnabled() {
  const el = document.getElementById('ttsToggle');
  return el ? el.checked : true;
}

// Tiếng lắc ống xăm (cành cạch gỗ tre)
function playRattleSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520 + (i % 2) * 140, ctx.currentTime);
      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.065);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    }, i * 85);
  }
}

// Tiếng nổ pháo + chuông vàng khi tặng bông
function playGiftFanfare(isGrand = false) {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = isGrand ? [523.25, 659.25, 783.99, 1046.5, 1318.5] : [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const startTime = ctx.currentTime + idx * 0.09;
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(0.22, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.46);
  });
}

// Tiếng đọc giọng nói AI Tiếng Việt (Trả về Promise đợi đọc xong 100% + đủ thời gian hiển thị tối thiểu)
let activeUtterance = null;

function waitMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function speakVietnameseAsync(text) {
  return new Promise((resolve) => {
    if (!isTtsEnabled() || !('speechSynthesis' in window) || !text) {
      resolve();
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      activeUtterance = null;
      resolve();
    };

    // Safety timeout phòng trường hợp trình duyệt treo sự kiện onend
    const maxWaitMs = Math.max(5000, text.length * 110 + 2500);
    const safetyTimer = setTimeout(finish, maxWaitMs);

    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      activeUtterance = utter; // Giữ tham chiếu toàn cục để tránh bị Garbage Collector xoá mất sự kiện onend
      utter.lang = 'vi-VN';
      utter.rate = 1.06;
      utter.pitch = 1.04;

      utter.onend = () => {
        clearTimeout(safetyTimer);
        finish();
      };
      utter.onerror = () => {
        clearTimeout(safetyTimer);
        finish();
      };

      window.speechSynthesis.speak(utter);
    } catch (e) {
      clearTimeout(safetyTimer);
      finish();
    }
  });
}

// Đợi CẢ HAI: (1) Đủ thời gian hiển thị tối thiểu trên màn hình VÀ (2) Giọng AI đọc xong trọn vẹn câu
async function presentWithVoiceAndWait(speechText, minDisplayMs) {
  await Promise.all([
    waitMs(minDisplayMs),
    speakVietnameseAsync(speechText)
  ]);
}

// ================= QUẢN LÝ NGƯỜI CHƠI & BẢNG XẾP HẠNG =================

function makeFallbackAvatar(name) {
  const seed = encodeURIComponent(name || 'KhachXuan');
  return `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=ffdfbf`;
}

function addPlayerScore(user, points, isGiftVip = false) {
  const userId = user.userId || user.nickname || 'guest';
  const existing = players.get(userId) || {
    userId,
    nickname: user.nickname || 'Khách Du Xuân',
    avatar: user.avatar || makeFallbackAvatar(user.nickname),
    score: 0,
    isVip: false,
    lastActive: Date.now()
  };

  existing.nickname = user.nickname || existing.nickname;
  if (user.avatar) existing.avatar = user.avatar;
  existing.score += points;
  if (isGiftVip) existing.isVip = true;
  existing.lastActive = Date.now();

  players.set(userId, existing);
  updateLeaderboardUI();
  updateTreeOrnamentsUI();
  return existing;
}

function updateLeaderboardUI() {
  const sorted = Array.from(players.values()).sort((a, b) => b.score - a.score);
  const top1 = sorted[0] || null;
  const top2 = sorted[1] || null;
  const top3 = sorted[2] || null;

  // Kiểm tra sự kiện LÊN NGÔI / SOÁN NGÔI TOP 1 THẦN TÀI
  if (top1 && top1.userId !== currentTop1Id && top1.score >= 50) {
    const oldKing = currentTop1Id ? players.get(currentTop1Id) : null;
    currentTop1Id = top1.userId;
    triggerThroneOvertakeAlert(top1, oldKing);
  } else if (top1 && !currentTop1Id) {
    currentTop1Id = top1.userId;
  }

  renderPodiumSlot(1, top1, 'Đang tìm chủ nhân');
  renderPodiumSlot(2, top2, 'Chưa có');
  renderPodiumSlot(3, top3, 'Chưa có');
}

function renderPodiumSlot(rank, player, emptyLabel) {
  const avatarEl = document.getElementById(`rank${rank}Avatar`);
  const nameEl = document.getElementById(`rank${rank}Name`);
  const scoreEl = document.getElementById(`rank${rank}Score`);

  if (!player) {
    avatarEl.src = makeFallbackAvatar(`Top${rank}`);
    nameEl.textContent = emptyLabel;
    scoreEl.textContent = '0 Lộc';
  } else {
    avatarEl.src = player.avatar || makeFallbackAvatar(player.nickname);
    nameEl.textContent = player.nickname;
    scoreEl.textContent = `${player.score.toLocaleString('vi-VN')} Lộc`;
  }
}

function triggerThroneOvertakeAlert(newKingPlayer, oldKingPlayer) {
  // Đưa Đại Lễ Đăng Cơ "Rồng Bay Phượng Múa" vào hàng đợi trung tâm (chỉ 1 lần duy nhất)
  centerStageQueue.push({
    type: 'coronation',
    newKing: newKingPlayer,
    oldKingName: oldKingPlayer ? oldKingPlayer.nickname : null
  });

  processCenterStageQueue();
}

// ================= CÂY MAI ĐẠI LỘC: TREO AVATAR & NỔ HŨ KHÍ XUÂN =================

function updateTreeOrnamentsUI() {
  const ornamentLayer = document.getElementById('ornamentLayer');
  ornamentLayer.innerHTML = '';

  // Đảm bảo Top 1 luôn nằm ở vị trí số 0 (Đỉnh Ngọn Cây Mai - Ngai Rồng), sau đó đến VIP và điểm cao
  const sortedForTree = Array.from(players.values())
    .sort((a, b) => {
      if (a.userId === currentTop1Id) return -1;
      if (b.userId === currentTop1Id) return 1;
      if (a.isVip !== b.isVip) return a.isVip ? -1 : 1;
      return b.score - a.score;
    })
    .slice(0, TREE_BRANCH_SLOTS.length);

  sortedForTree.forEach((player, idx) => {
    const slot = TREE_BRANCH_SLOTS[idx];
    const isTop1King = player.userId === currentTop1Id && idx === 0;
    const el = document.createElement('div');
    el.className = `tree-ornament ${isTop1King ? 'king-ornament' : player.isVip ? 'vip-ornament' : ''}`;
    el.style.left = `${slot.x}%`;
    el.style.top = `${slot.y}%`;
    el.style.animationDelay = `${(idx * 0.25).toFixed(2)}s`;

    el.innerHTML = `
      <div class="ornament-string"></div>
      <div class="ornament-badge">
        ${isTop1King ? '<div class="king-crown-top">👑</div>' : ''}
        <img src="${player.avatar || makeFallbackAvatar(player.nickname)}" class="ornament-avatar" alt="${player.nickname}" />
      </div>
      <div class="ornament-name">${isTop1King ? `👑 ${player.nickname}` : player.nickname}</div>
    `;
    ornamentLayer.appendChild(el);
  });
}

function addTreeEnergy(amount, triggerUser) {
  treeEnergy += amount;

  // Rung Cây Mai phản hồi vật lý
  const treeContainer = document.getElementById('treeContainer');
  treeContainer.classList.remove('shake');
  void treeContainer.offsetWidth;
  treeContainer.classList.add('shake');

  // Nở thêm hoa mai vàng trên tán cây
  renderExtraBlossoms(Math.min(TREE_MAX_ENERGY, treeEnergy));

  if (treeEnergy >= TREE_MAX_ENERGY) {
    // NỔ HŨ CÂY MAI ĐẠI LỘC!
    treeEnergy = treeEnergy % TREE_MAX_ENERGY;
    treeLevel += 1;
    triggerTreeJackpot(triggerUser);
  }

  updateEnergyBarUI();
}

function updateEnergyBarUI() {
  const clamped = Math.min(TREE_MAX_ENERGY, Math.max(0, treeEnergy));
  const pct = Math.min(100, Math.max(0, (clamped / TREE_MAX_ENERGY) * 100));
  document.getElementById('energyFill').style.width = `${pct}%`;
  document.getElementById('energyNumbers').textContent = `${clamped} / ${TREE_MAX_ENERGY}`;
  document.getElementById('treeLevelPill').textContent = `🌸 Cây Mai Đại Lộc • Cấp ${treeLevel}`;
}

function renderExtraBlossoms(energyVal) {
  const bloomLayer = document.getElementById('bloomLayer');
  const targetCount = Math.floor(energyVal / 12); // tối đa ~16 bông nở thêm rực rỡ khi đạt 200 điểm
  const currentCount = bloomLayer.children.length;

  if (targetCount < currentCount) {
    bloomLayer.innerHTML = '';
  }

  for (let i = bloomLayer.children.length; i < targetCount; i++) {
    const b = document.createElement('span');
    b.className = 'extra-blossom';
    b.textContent = i % 3 === 0 ? '🧧' : '🌼';
    // Tọa độ vòng tròn quanh tán cây
    const angle = (i * 137.5) * (Math.PI / 180);
    const radius = 16 + (i % 5) * 6.5;
    const x = 50 + Math.cos(angle) * radius;
    const y = 42 + Math.sin(angle) * (radius * 0.82);
    b.style.left = `${x}%`;
    b.style.top = `${y}%`;
    bloomLayer.appendChild(b);
  }
}

function triggerTreeJackpot(finisherUser) {
  const finisherName = finisherUser ? finisherUser.nickname : 'Đại Gia Khai Xuân';
  const currentLevel = treeLevel;

  // Thưởng +1000 Lộc cho người chốt hạ 100/100
  if (finisherUser) {
    addPlayerScore(finisherUser, 1000, true);
  }

  // Thưởng +200 Lộc cho tất cả những ai đang treo trên Cây Mai
  Array.from(players.values()).slice(0, 12).forEach((p) => {
    p.score += 200;
  });
  updateLeaderboardUI();

  appendEventLog(`💥 <strong>NỔ HŨ CÂY MAI CẤP ${currentLevel}!</strong> ${finisherName} ăn trọn +1.000 Lộc!`);

  // Đưa thông báo Nổ Hũ vào hàng đợi trung tâm để KHÔNG BAO GIỜ đè lên Chiếu Ông Đồ / Hái Lì Xì
  centerStageQueue.push({
    type: 'jackpot',
    finisherName,
    level: currentLevel
  });

  processCenterStageQueue();
}

// ================= XỬ LÝ SỰ KIỆN 1: COMMENT -> LẮC ỐNG XĂM GIEO QUẺ =================

function parseBirthYearAndZodiac(commentText) {
  if (!commentText) return null;
  const match = commentText.match(/\b(19[5-9]\d|20[0-2]\d)\b/);
  if (match) {
    const year = parseInt(match[1], 10);
    const zodiac = ZODIAC_ANIMALS[year % 12];
    return { year, zodiac };
  }
  return null;
}

function handleCommentEvent(data) {
  const user = {
    userId: data.userId || data.nickname || `u_${Date.now()}`,
    nickname: data.nickname || 'Khách Du Xuân',
    avatar: data.avatar || makeFallbackAvatar(data.nickname),
    comment: data.comment || 'Xin quẻ đầu năm'
  };

  const isCurrentKing = currentTop1Id && user.userId === currentTop1Id;

  // ĐẶC QUYỀN SỐ 1: Nếu người comment đang là TOP 1 THẦN TÀI -> Phán Truyền Loa AI Đọc + Thưởng x5 Lộc!
  const commentPoints = isCurrentKing ? 50 : 10;
  const energyGain = isCurrentKing ? 5 : 2;

  if (isCurrentKing) {
    // Đưa Chiếu Chỉ Thần Tài Phán Truyền vào hàng đợi chung để đợi AI đọc xong từng cái, không cắt ngang nhau
    centerStageQueue.push({
      type: 'decree',
      kingName: user.nickname,
      message: user.comment
    });
    appendEventLog(`👑🗣️ <strong>THẦN TÀI ${user.nickname} PHÁN TRUYỀN:</strong> "${user.comment}" (+50 Lộc)`);
  } else {
    appendEventLog(`💬 <strong>${user.nickname}</strong> gieo quẻ: "${user.comment}" (+10 Lộc)`);
  }

  addPlayerScore(user, commentPoints, isCurrentKing);
  addTreeEnergy(energyGain, user);

  if (isCurrentKing) {
    processCenterStageQueue();
  }

  // Chọn quẻ phù hợp (nếu comment năm sinh thì đọc đúng tuổi Con Giáp!)
  const fortune = FORTUNE_LIST[Math.floor(Math.random() * FORTUNE_LIST.length)];
  const birthInfo = parseBirthYearAndZodiac(user.comment);

  // Đưa vào hàng đợi hiển thị Quẻ Comment (giữ cố định 4.5 giây mỗi người để kịp đọc)
  if (commentFortuneQueue.length < 25) {
    commentFortuneQueue.push({
      user,
      isCurrentKing,
      fortune,
      birthInfo
    });
  }

  processCommentFortuneQueue();
}

async function processCommentFortuneQueue() {
  if (isShowingCommentFortune || commentFortuneQueue.length === 0) return;

  isShowingCommentFortune = true;
  const { user, isCurrentKing, fortune, birthInfo } = commentFortuneQueue.shift();

  // Lắc Ống Xăm Tết
  const cylinderWrap = document.getElementById('cylinderWrap');
  cylinderWrap.classList.add('shaking');
  playRattleSound();
  setTimeout(() => cylinderWrap.classList.remove('shaking'), 650);

  document.getElementById('fortuneAvatar').src = user.avatar;
  document.getElementById('fortuneUsername').textContent = isCurrentKing
    ? `👑 ${user.nickname} (+50 Lộc)`
    : `${user.nickname} (+10 Lộc)`;
  document.getElementById('fortuneComment').textContent = `💬 "${user.comment}"`;
  document.getElementById('fortuneRank').textContent = isCurrentKing ? 'THẦN TÀI GIÁ LÂM' : fortune.rank;

  const fortuneTextEl = document.getElementById('fortuneText');
  if (birthInfo) {
    fortuneTextEl.innerHTML = `🔮 <strong>Tuổi ${birthInfo.zodiac} (${birthInfo.year}):</strong> ${fortune.text}`;
  } else {
    fortuneTextEl.innerHTML = `🔮 <strong>Quẻ Khai Xuân:</strong> ${fortune.text}`;
  }

  const cardEl = document.getElementById('fortuneCard');
  cardEl.classList.remove('flash-card');
  void cardEl.offsetWidth;
  cardEl.classList.add('flash-card');

  // Giữ cố định trên màn hình đúng FORTUNE_DISPLAY_MS (4.5 giây) để người comment đọc trọn vẹn
  await waitMs(FORTUNE_DISPLAY_MS);
  isShowingCommentFortune = false;
  processCommentFortuneQueue();
}

// ================= XỬ LÝ SỰ KIỆN 2: TẶNG BÔNG -> CHIẾU ÔNG ĐỒ & MỞ LÌ XÌ =================

function rollLuckyLocPoints(totalCoins) {
  const standardPool = [68, 79, 88, 168, 268, 686, 888];
  const grandPool = [888, 1688, 2888, 6868, 8888, 9999];

  if (totalCoins >= 5) {
    const pick = grandPool[Math.floor(Math.random() * grandPool.length)];
    return pick * Math.max(1, Math.floor(totalCoins / 5));
  } else {
    const pick = standardPool[Math.floor(Math.random() * standardPool.length)];
    return pick * totalCoins;
  }
}

function handleGiftEvent(data) {
  const repeatCount = data.repeatCount || 1;
  const totalCoins = data.totalCoins || repeatCount;
  const user = {
    userId: data.userId || data.nickname || `vip_${Date.now()}`,
    nickname: data.nickname || 'Đại Gia Xuân',
    avatar: data.avatar || makeFallbackAvatar(data.nickname),
    giftName: data.giftName || 'Bông Hồng',
    repeatCount,
    totalCoins
  };

  // Mở Bao Lì Xì Gacha tính điểm Lộc
  const luckyLoc = rollLuckyLocPoints(totalCoins);

  // Kiểm tra xem sau khi cộng điểm người này có trở thành (hoặc đang là) Top 1 Thần Tài không
  const prevScore = players.has(user.userId) ? players.get(user.userId).score : 0;
  const newScore = prevScore + luckyLoc;
  const currentTop1Score = currentTop1Id && players.has(currentTop1Id) ? players.get(currentTop1Id).score : 0;
  const willBeTop1King = (user.userId === currentTop1Id) || (newScore >= currentTop1Score && newScore >= 50);

  // ĐẶC QUYỀN SỐ 3: Nếu là Top 1 Thần Tài -> Nhận Bộ Chữ Hoàng Kim Đế Vương Độc Quyền!
  const pool = willBeTop1King ? IMPERIAL_KING_CALLIGRAPHY_LIST : CALLIGRAPHY_LIST;
  const calli = pool[Math.floor(Math.random() * pool.length)];

  // 1. Đưa Chiếu Ông Đồ & Hái Lì Xì vào hàng đợi trung tâm TRƯỚC
  centerStageQueue.push({
    type: 'gift',
    user,
    luckyLoc,
    calli,
    isGrandCombo: totalCoins >= 5,
    isImperialKing: willBeTop1King
  });

  // 2. Cộng điểm Lộc (nếu vượt mặt Top 1 cũ thì sự kiện Đại Lễ Đăng Cơ Rồng Phượng sẽ tự xếp ngay SAU Chiếu Ông Đồ!)
  addPlayerScore(user, luckyLoc, true);

  appendEventLog(
    `🌹 <strong>${user.nickname}</strong> tặng <strong>${repeatCount} ${user.giftName}</strong> -> Nhận chữ <strong>${calli.char}</strong> & <strong>+${luckyLoc.toLocaleString('vi-VN')} Lộc</strong>!`
  );

  // 3. Cộng năng lượng Khí Xuân (nếu đủ 100/100 thì sự kiện Nổ Hũ sẽ xếp tiếp theo!)
  const energyGain = totalCoins >= 5 ? 50 : totalCoins * 10;
  addTreeEnergy(energyGain, user);

  processCenterStageQueue();
}

async function processCenterStageQueue() {
  if (isShowingCenterStage || centerStageQueue.length === 0) return;

  isShowingCenterStage = true;
  const item = centerStageQueue.shift();

  const calligraphyModal = document.getElementById('calligraphyModal');
  const jackpotBanner = document.getElementById('jackpotBanner');
  const coronationModal = document.getElementById('coronationModal');
  const imperialDecreeBanner = document.getElementById('imperialDecreeBanner');

  // Đảm bảo ẩn tất cả các bảng thông báo trước khi bật cái hiện tại để không bao giờ chồng chéo
  calligraphyModal.classList.add('hidden');
  jackpotBanner.classList.add('hidden');
  coronationModal.classList.add('hidden');
  imperialDecreeBanner.classList.add('hidden');

  // TRƯỜNG HỢP 1: CHIẾU CHỈ THẦN TÀI PHÁN TRUYỀN (Khi Top 1 gõ Comment)
  if (item.type === 'decree') {
    const { kingName, message } = item;
    document.getElementById('decreeKingName').textContent = kingName.toUpperCase();
    document.getElementById('decreeMessage').textContent = `“${message}”`;
    imperialDecreeBanner.classList.remove('hidden');

    playGiftFanfare(false);
    spawnFireworkBurst(220, 150, 35);

    const speechText = `Thần Tài ${kingName} vừa phán: ${message}`;
    await presentWithVoiceAndWait(speechText, 3800);

    imperialDecreeBanner.classList.add('hidden');
    await waitMs(350);
    isShowingCenterStage = false;
    processCenterStageQueue();
    return;
  }

  // TRƯỜNG HỢP 2: ĐẠI LỄ ĐĂNG CƠ TOP 1 — RỒNG BAY PHƯỢNG MÚA
  if (item.type === 'coronation') {
    const { newKing, oldKingName } = item;
    document.getElementById('coronationAvatar').src = newKing.avatar || makeFallbackAvatar(newKing.nickname);
    document.getElementById('coronationKingName').textContent = newKing.nickname;
    document.getElementById('coronationKingScore').textContent = `Tổng Lộc: ${newKing.score.toLocaleString('vi-VN')} Lộc`;

    const noteEl = document.getElementById('coronationDethroneNote');
    if (oldKingName && oldKingName !== newKing.nickname) {
      noteEl.innerHTML = `🔥 Chính thức truất ngôi <strong>${oldKingName}</strong> để độc chiếm đỉnh Cây Mai!`;
    } else {
      noteEl.innerHTML = `👑 Chính thức đăng cơ Ngai Rồng trên đỉnh Cây Mai Đại Lộc!`;
    }

    coronationModal.classList.remove('hidden');
    playGiftFanfare(true);

    // Bắn pháo hoa & mưa lộc rồng phượng
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        spawnFireworkBurst(90 + Math.random() * 260, 140 + Math.random() * 240, 42);
        spawnCoinAndEnvelopeRain(15);
      }, i * 500);
    }

    const speechText = `Chúc mừng tân Đệ Nhất Thần Tài ${newKing.nickname} chính thức đăng cơ ngôi vị số một!`;
    await presentWithVoiceAndWait(speechText, 4500);

    coronationModal.classList.add('hidden');
    await waitMs(350);
    isShowingCenterStage = false;
    processCenterStageQueue();
    return;
  }

  // TRƯỜNG HỢP 3: NỔ HŨ CÂY MAI ĐẠI LỘC (200/200)
  if (item.type === 'jackpot') {
    const { finisherName } = item;
    const desc = document.getElementById('jackpotDesc');
    desc.innerHTML = `Chúc mừng <strong>${finisherName}</strong> chốt hạ mốc ${TREE_MAX_ENERGY}/${TREE_MAX_ENERGY} nhận <strong>+1.000 Lộc</strong> & toàn bộ người trên Cây Mai nhận <strong>+200 Lộc</strong>!`;
    jackpotBanner.classList.remove('hidden');

    playGiftFanfare(true);

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        spawnFireworkBurst(80 + Math.random() * 280, 120 + Math.random() * 260, 45);
        spawnCoinAndEnvelopeRain(18);
      }, i * 450);
    }

    const speechText = `Nổ hũ Cây Mai Đại Lộc! Chúc mừng ${finisherName} nhận một nghìn điểm lộc đầu xuân!`;
    await presentWithVoiceAndWait(speechText, 4200);

    jackpotBanner.classList.add('hidden');
    await waitMs(350);
    isShowingCenterStage = false;
    processCenterStageQueue();
    return;
  }

  // TRƯỜNG HỢP 4: CHIẾU ÔNG ĐỒ & HÁI LÌ XÌ (item.type === 'gift')
  const { user, luckyLoc, calli, isGrandCombo, isImperialKing } = item;
  const scrollBody = document.getElementById('scrollBody');
  const paperCircle = document.querySelector('.calligraphy-circle');

  if (isImperialKing) {
    scrollBody.classList.add('grand-combo');
    paperCircle.classList.add('imperial-gold-paper');
    document.getElementById('scrollHeaderTag').textContent = '👑 ẤN RỒNG ĐẾ VƯƠNG • ĐỆ NHẤT THẦN TÀI 👑';
  } else if (isGrandCombo) {
    scrollBody.classList.add('grand-combo');
    paperCircle.classList.remove('imperial-gold-paper');
    document.getElementById('scrollHeaderTag').textContent = '🐉 ĐẠI CÁT HOÀNG KIM • COMBO VIP 🐉';
  } else {
    scrollBody.classList.remove('grand-combo');
    paperCircle.classList.remove('imperial-gold-paper');
    document.getElementById('scrollHeaderTag').textContent = '✨ ÔNG ĐỒ TẶNG CHỮ HỘ MẠNG ✨';
  }

  document.getElementById('vipAvatar').src = user.avatar;
  document.getElementById('vipName').textContent = isImperialKing ? `👑 ${user.nickname}` : user.nickname;
  document.getElementById('vipGiftTag').textContent = `Đã tặng ${user.repeatCount} ${user.giftName} 🌹`;
  document.getElementById('calligraphyChar').textContent = calli.char;
  document.getElementById('redSeal').innerHTML = calli.seal.replace('\n', '<br>');
  document.getElementById('calligraphyCouplet').textContent = calli.couplet;
  document.getElementById('vipRewardLoc').textContent = `+${luckyLoc.toLocaleString('vi-VN')} LỘC`;

  calligraphyModal.classList.remove('hidden');

  // Hiệu ứng Pháo Hoa + Mưa Lì Xì + Âm thanh
  playGiftFanfare(isGrandCombo || isImperialKing);
  spawnFireworkBurst(220, 280, isGrandCombo || isImperialKing ? 55 : 32);
  spawnCoinAndEnvelopeRain(isGrandCombo || isImperialKing ? 24 : 10);

  if (isGrandCombo || isImperialKing) {
    setTimeout(() => spawnFireworkBurst(120, 200, 40), 400);
    setTimeout(() => spawnFireworkBurst(320, 220, 40), 800);
  }

  const speechText = `Cảm ơn ${isImperialKing ? 'Thần Tài' : 'đại gia'} ${user.nickname} đã tặng ${user.repeatCount} ${user.giftName}! Ông Đồ xin tặng chữ ${calli.char} và ${luckyLoc} điểm lộc!`;
  const minDuration = isGrandCombo || isImperialKing ? 4400 : 3800;

  await presentWithVoiceAndWait(speechText, minDuration);

  calligraphyModal.classList.add('hidden');
  await waitMs(350);
  isShowingCenterStage = false;
  processCenterStageQueue();
}

// ================= HIỆU ỨNG CANVAS: HOA MAI RƠI, PHÁO HOA & MƯA LÌ XÌ =================

const canvas = document.getElementById('fxCanvas');
const ctx = canvas.getContext('2d');
let cw = 440;
let ch = 782;

function resizeCanvas() {
  const stage = document.getElementById('liveStage');
  cw = stage.clientWidth || 440;
  ch = stage.clientHeight || 782;
  canvas.width = cw;
  canvas.height = ch;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Cánh hoa mai rơi nhẹ liên tục (chống màn hình tĩnh TikTok)
const fallingPetals = Array.from({ length: 18 }, () => ({
  x: Math.random() * cw,
  y: Math.random() * ch,
  r: 3 + Math.random() * 3.5,
  vy: 0.55 + Math.random() * 0.85,
  vx: -0.35 + Math.random() * 0.7,
  angle: Math.random() * Math.PI * 2,
  va: 0.01 + Math.random() * 0.025
}));

const fireworksParticles = [];
const fallingRewards = []; // đồng tiền vàng & bao lì xì rơi khi tặng bông

function spawnFireworkBurst(x, y, count = 30) {
  const colors = ['#ffd147', '#ff2a2a', '#fff59d', '#ff9100', '#ff6d00'];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.2;
    const speed = 1.8 + Math.random() * 4.5;
    fireworksParticles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: colors[i % colors.length],
      size: 2.2 + Math.random() * 2.5
    });
  }
}

function spawnCoinAndEnvelopeRain(count = 12) {
  for (let i = 0; i < count; i++) {
    fallingRewards.push({
      x: 30 + Math.random() * (cw - 60),
      y: -20 - Math.random() * 120,
      vy: 2.2 + Math.random() * 2.6,
      vx: -0.6 + Math.random() * 1.2,
      emoji: i % 2 === 0 ? '🧧' : '🪙',
      size: 16 + Math.random() * 8
    });
  }
}

function animateCanvas() {
  ctx.clearRect(0, 0, cw, ch);

  // 1. Vẽ cánh hoa mai vàng rơi
  fallingPetals.forEach((p) => {
    p.y += p.vy;
    p.x += p.vx + Math.sin(p.angle) * 0.3;
    p.angle += p.va;
    if (p.y > ch + 10) {
      p.y = -10;
      p.x = Math.random() * cw;
    }
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = 'rgba(255, 215, 64, 0.78)';
    ctx.beginPath();
    ctx.ellipse(0, 0, p.r, p.r * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  // 2. Vẽ hạt Pháo Hoa
  for (let i = fireworksParticles.length - 1; i >= 0; i--) {
    const fp = fireworksParticles[i];
    fp.x += fp.vx;
    fp.y += fp.vy;
    fp.vy += 0.06; // trọng lực
    fp.alpha -= 0.018;
    if (fp.alpha <= 0) {
      fireworksParticles.splice(i, 1);
      continue;
    }
    ctx.save();
    ctx.globalAlpha = Math.max(0, fp.alpha);
    ctx.fillStyle = fp.color;
    ctx.shadowColor = fp.color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(fp.x, fp.y, fp.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 3. Vẽ Mưa Lì Xì & Đồng Vàng
  for (let i = fallingRewards.length - 1; i >= 0; i--) {
    const item = fallingRewards[i];
    item.y += item.vy;
    item.x += item.vx;
    if (item.y > ch + 30) {
      fallingRewards.splice(i, 1);
      continue;
    }
    ctx.font = `${Math.round(item.size)}px sans-serif`;
    ctx.fillText(item.emoji, item.x, item.y);
  }

  requestAnimationFrame(animateCanvas);
}
requestAnimationFrame(animateCanvas);

// ================= RỒNG VÀNG NGUYÊN CON CHẠY DỌC VIỀN BẢNG SOÁN NGÔI =================

const dragonCanvas = document.getElementById('dragonBorderCanvas');
const dCtx = dragonCanvas ? dragonCanvas.getContext('2d') : null;
let dragonAnimTick = 0;
const dragonSparks = [];

// Tính tọa độ + góc tiếp tuyến trên đường viền hình chữ nhật bo góc của bảng thông báo
function getRectPerimeterPoint(dist, x0, y0, w, h) {
  const perim = 2 * (w + h);
  let d = ((dist % perim) + perim) % perim;

  let x = x0;
  let y = y0;
  let tx = 1;
  let ty = 0;

  if (d < w) {
    // Cạnh trên (Trái -> Phải)
    x = x0 + d;
    y = y0;
    tx = 1;
    ty = 0;
  } else if (d < w + h) {
    // Cạnh phải (Trên -> Dưới)
    x = x0 + w;
    y = y0 + (d - w);
    tx = 0;
    ty = 1;
  } else if (d < 2 * w + h) {
    // Cạnh dưới (Phải -> Trái)
    x = x0 + w - (d - (w + h));
    y = y0 + h;
    tx = -1;
    ty = 0;
  } else {
    // Cạnh trái (Dưới -> Trên)
    x = x0;
    y = y0 + h - (d - (2 * w + h));
    tx = 0;
    ty = -1;
  }

  // Vector pháp tuyến hướng ra ngoài viền
  const nx = ty;
  const ny = -tx;
  return { x, y, tx, ty, nx, ny };
}

function drawDragonHead(ctx, x, y, angle, tick) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Râu rồng dài uốn lượn 2 bên mũi
  const whiskerWave = Math.sin(tick * 0.2) * 5;
  ctx.strokeStyle = '#fff59d';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(10, -5);
  ctx.bezierCurveTo(22, -18 + whiskerWave, 6, -28, -10, -22 - whiskerWave);
  ctx.moveTo(10, 5);
  ctx.bezierCurveTo(22, 18 - whiskerWave, 6, 28, -10, 22 + whiskerWave);
  ctx.stroke();

  // Sừng rồng vàng (2 nhánh sau đầu)
  ctx.strokeStyle = '#ffb300';
  ctx.lineWidth = 3.2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-4, -7);
  ctx.lineTo(-18, -19);
  ctx.lineTo(-25, -15);
  ctx.moveTo(-13, -15);
  ctx.lineTo(-18, -23);

  ctx.moveTo(-4, 7);
  ctx.lineTo(-18, 19);
  ctx.lineTo(-25, 15);
  ctx.moveTo(-13, 15);
  ctx.lineTo(-18, 23);
  ctx.stroke();

  // Bờm lửa đỏ vàng quanh cổ
  ctx.fillStyle = '#e51c23';
  for (let side of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(-6, side * 8);
    ctx.lineTo(-18, side * 16);
    ctx.lineTo(-10, side * 4);
    ctx.closePath();
    ctx.fill();
  }

  // Hộp sọ & Mõm Rồng Vàng
  const headGrad = ctx.createLinearGradient(-12, 0, 16, 0);
  headGrad.addColorStop(0, '#d97706');
  headGrad.addColorStop(0.5, '#ffd54f');
  headGrad.addColorStop(1, '#fff9c4');
  ctx.fillStyle = headGrad;
  ctx.strokeStyle = '#78350f';
  ctx.lineWidth = 1.5;

  ctx.beginPath();
  ctx.moveTo(16, 0);
  ctx.quadraticCurveTo(14, -9, 2, -10);
  ctx.quadraticCurveTo(-12, -12, -13, 0);
  ctx.quadraticCurveTo(-12, 12, 2, 10);
  ctx.quadraticCurveTo(14, 9, 16, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Mắt rồng phát sáng rực
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = '#ff3d00';
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.arc(1, -5.5, 2.6, 0, Math.PI * 2);
  ctx.arc(1, 5.5, 2.6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#d50000';
  ctx.beginPath();
  ctx.arc(1.8, -5.5, 1.2, 0, Math.PI * 2);
  ctx.arc(1.8, 5.5, 1.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawDragonLeg(ctx, x, y, angle, side, tick) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle + side * 1.1 + Math.sin(tick * 0.18) * 0.25);

  ctx.strokeStyle = '#ffca28';
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(9, side * 4);
  ctx.lineTo(15, 0);
  ctx.stroke();

  // 3 móng vuốt sắc
  ctx.strokeStyle = '#fff9c4';
  ctx.lineWidth = 1.8;
  for (let c = -1; c <= 1; c++) {
    ctx.beginPath();
    ctx.moveTo(15, 0);
    ctx.lineTo(20, c * 4);
    ctx.stroke();
  }
  ctx.restore();
}

function animateDragonBorder() {
  if (dCtx) {
    const modal = document.getElementById('coronationModal');
    if (modal && !modal.classList.contains('hidden')) {
      dragonAnimTick += 1;
      const W = dragonCanvas.width;
      const H = dragonCanvas.height;
      dCtx.clearRect(0, 0, W, H);

      // Khung đường chạy bám sát 4 cạnh của .coronation-card
      const rx = 34;
      const ry = 28;
      const rw = W - 68;
      const rh = H - 56;

      const headDist = dragonAnimTick * 4.4; // tốc độ rồng lượn quanh viền
      const totalSegments = 36; // nguyên con rồng dài 36 đốt vảy
      const segSpacing = 8.2;

      // 1. Vẽ Viên Ngọc Rồng (Long Châu) bay phía trước dẫn đường
      const pearlBase = getRectPerimeterPoint(headDist + 28, rx, ry, rw, rh);
      const pearlBob = Math.sin(dragonAnimTick * 0.22) * 4;
      const px = pearlBase.x + pearlBase.nx * pearlBob;
      const py = pearlBase.y + pearlBase.ny * pearlBob;

      dCtx.save();
      const pearlGrad = dCtx.createRadialGradient(px, py, 1, px, py, 13);
      pearlGrad.addColorStop(0, '#ffffff');
      pearlGrad.addColorStop(0.45, '#ffea00');
      pearlGrad.addColorStop(1, 'rgba(255, 61, 0, 0)');
      dCtx.fillStyle = pearlGrad;
      dCtx.beginPath();
      dCtx.arc(px, py, 13, 0, Math.PI * 2);
      dCtx.fill();
      dCtx.restore();

      // Tính toán vị trí toàn bộ 36 đốt thân rồng uốn sóng hình Sin dọc theo cạnh
      const nodes = [];
      for (let i = 0; i < totalSegments; i++) {
        const d = headDist - i * segSpacing;
        const p = getRectPerimeterPoint(d, rx, ry, rw, rh);
        const waveAmp = 6.2 * Math.sin((i / totalSegments) * Math.PI);
        const waveOffset = Math.sin(dragonAnimTick * 0.18 - i * 0.38) * waveAmp;
        nodes.push({
          x: p.x + p.nx * waveOffset,
          y: p.y + p.ny * waveOffset,
          nx: p.nx,
          ny: p.ny,
          tx: p.tx,
          ty: p.ty
        });
      }

      // Thêm hạt lửa vàng rơi ra từ đuôi rồng
      const tailNode = nodes[nodes.length - 1];
      if (dragonAnimTick % 2 === 0 && tailNode) {
        dragonSparks.push({
          x: tailNode.x + (Math.random() - 0.5) * 8,
          y: tailNode.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.4,
          vy: (Math.random() - 0.5) * 1.4,
          alpha: 1,
          r: 2 + Math.random() * 2.5
        });
      }

      for (let s = dragonSparks.length - 1; s >= 0; s--) {
        const sp = dragonSparks[s];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.alpha -= 0.04;
        if (sp.alpha <= 0) {
          dragonSparks.splice(s, 1);
          continue;
        }
        dCtx.save();
        dCtx.globalAlpha = sp.alpha;
        dCtx.fillStyle = '#ffd740';
        dCtx.beginPath();
        dCtx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
        dCtx.fill();
        dCtx.restore();
      }

      // 2. Vẽ Thân Rồng từ Đuôi lên Đầu để các lớp vảy vàng xếp chồng tự nhiên
      for (let i = totalSegments - 1; i >= 1; i--) {
        const cur = nodes[i];
        const prev = nodes[i - 1];
        const segAngle = Math.atan2(prev.y - cur.y, prev.x - cur.x);

        // Độ dày thân rồng thon dần về phía đuôi
        const taper = 1 - (i / totalSegments) * 0.72;
        const radius = 9.5 * taper + 2.2;

        // Vẽ 4 chân rồng ở đốt số 7 (chân trước) và đốt số 20 (chân sau)
        if (i === 7 || i === 20) {
          drawDragonLeg(dCtx, cur.x, cur.y, segAngle, 1, dragonAnimTick + i);
          drawDragonLeg(dCtx, cur.x, cur.y, segAngle, -1, dragonAnimTick + i);
        }

        // Vẽ vây đuôi lửa ở đốt cuối cùng
        if (i === totalSegments - 1) {
          dCtx.save();
          dCtx.translate(cur.x, cur.y);
          dCtx.rotate(segAngle + Math.PI);
          dCtx.fillStyle = '#ff3d00';
          dCtx.beginPath();
          dCtx.moveTo(0, 0);
          dCtx.quadraticCurveTo(14, -10, 22, 0);
          dCtx.quadraticCurveTo(14, 10, 0, 0);
          dCtx.fill();
          dCtx.restore();
        }

        // Vẽ đốt vảy rồng vàng óng ánh
        dCtx.save();
        dCtx.translate(cur.x, cur.y);
        dCtx.rotate(segAngle);

        const segGrad = dCtx.createRadialGradient(2, -2, 1, 0, 0, radius);
        segGrad.addColorStop(0, '#fffde7');
        segGrad.addColorStop(0.55, i % 2 === 0 ? '#ffd54f' : '#ffb300');
        segGrad.addColorStop(1, '#92400e');

        dCtx.fillStyle = segGrad;
        dCtx.strokeStyle = '#78350f';
        dCtx.lineWidth = 1;
        dCtx.beginPath();
        dCtx.arc(0, 0, radius, 0, Math.PI * 2);
        dCtx.fill();
        dCtx.stroke();

        // Vây gai lưng rồng đỏ vàng
        if (i % 2 === 0 && i < totalSegments - 3) {
          dCtx.fillStyle = '#d50000';
          dCtx.beginPath();
          dCtx.moveTo(-2, 0);
          dCtx.lineTo(-radius * 1.35, -radius * 0.55);
          dCtx.lineTo(-radius * 0.6, 0);
          dCtx.closePath();
          dCtx.fill();
        }

        dCtx.restore();
      }

      // 3. Vẽ Đầu Rồng Đế Vương ở đốt 0 hướng theo viên Long Châu
      const headNode = nodes[0];
      const neckNode = nodes[1];
      const headAngle = Math.atan2(headNode.y - neckNode.y, headNode.x - neckNode.x);
      drawDragonHead(dCtx, headNode.x, headNode.y, headAngle, dragonAnimTick);
    }
  }
  requestAnimationFrame(animateDragonBorder);
}
requestAnimationFrame(animateDragonBorder);

// ================= NHẬT KÝ & KẾT NỐI SOCKET.IO =================

function appendEventLog(html) {
  const log = document.getElementById('eventLog');
  const div = document.createElement('div');
  div.className = 'log-entry';
  const timeStr = new Date().toLocaleTimeString('vi-VN', { hour12: false });
  div.innerHTML = `<span style="color:#64748b">[${timeStr}]</span> ${html}`;
  log.prepend(div);
  while (log.children.length > 40) {
    log.removeChild(log.lastChild);
  }
}

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

socket.on('live:like', (data) => {
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

  // Nếu chưa có ai ở Top 1 thì tạo nhanh 1 Top 1
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

// Nút Test Đại lễ Đăng Cơ Top 1: Rồng Bay Phượng Múa (Soán Ngôi)
document.getElementById('btnSimCoronation').addEventListener('click', () => {
  // Tìm 1 người chơi khác với Top 1 hiện tại để soán ngôi
  const candidates = SAMPLE_USERS.filter(
    (s) => s.nickname.toLowerCase().replace(/\s+/g, '_') !== currentTop1Id
  );
  const pick = candidates[Math.floor(Math.random() * candidates.length)] || SAMPLE_USERS[0];
  const customName = document.getElementById('simNameInput').value.trim();
  const nickname = customName || pick.nickname;
  let userId = nickname.toLowerCase().replace(/\s+/g, '_');

  // Nếu người dùng nhập trùng tên với Top 1 hiện tại khi bấm nút Test Soán Ngôi, tạo ID mới để luôn kích hoạt đúng 1 lần
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

  // addPlayerScore -> updateLeaderboardUI -> triggerThroneOvertakeAlert sẽ tự động kích hoạt Đại Lễ Đăng Cơ đúng 1 lần duy nhất
  addPlayerScore(newKingUser, bonusNeeded, true);
  appendEventLog(
    `🐉🐦‍🔥 <strong>LONG PHƯỢNG TRÌNH TƯỜNG!</strong> <strong>${nickname}</strong> chính thức đăng cơ Đệ Nhất Thần Tài!`
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

// Nút đổi ảnh Asset trực tiếp từ máy tính của bạn
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

// Khởi tạo dữ liệu mẫu ban đầu để màn hình nhìn đầy đặn ngay khi mở
updateLeaderboardUI();
updateEnergyBarUI();
appendEventLog('🌸 Sẵn sàng! Hãy bấm các nút Giả lập bên trên để test hiệu ứng.');
