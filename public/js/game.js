// ================= TRẠNG THÁI TRÒ CHƠI, BẢNG VÀNG, CÂY MAI & HÀNG ĐỢI THÔNG BÁO =================

const players = new Map(); // userId -> { userId, nickname, avatar, score, isVip, lastActive }
let currentTop1Id = null;

let treeEnergy = 0; // 0 -> TREE_MAX_ENERGY (200)
let treeLevel = 1;

const centerStageQueue = []; // Hàng đợi chung: Chiếu Ông Đồ (gift), Nổ Hũ (jackpot), Đăng Cơ (coronation), Chiếu Chỉ (decree)
let isShowingCenterStage = false;

const commentFortuneQueue = [];
let isShowingCommentFortune = false;

function makeFallbackAvatar(name) {
  const seed = encodeURIComponent(name || 'KhachXuan');
  return `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=ffdfbf`;
}

function appendEventLog(html) {
  const log = document.getElementById('eventLog');
  if (!log) return;
  const div = document.createElement('div');
  div.className = 'log-entry';
  const timeStr = new Date().toLocaleTimeString('vi-VN', { hour12: false });
  div.innerHTML = `<span style="color:#64748b">[${timeStr}]</span> ${html}`;
  log.prepend(div);
  while (log.children.length > 40) {
    log.removeChild(log.lastChild);
  }
}

// ================= QUẢN LÝ NGƯỜI CHƠI & BẢNG XẾP HẠNG =================

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

  const treeContainer = document.getElementById('treeContainer');
  treeContainer.classList.remove('shake');
  void treeContainer.offsetWidth;
  treeContainer.classList.add('shake');

  renderExtraBlossoms(Math.min(TREE_MAX_ENERGY, treeEnergy));

  if (treeEnergy >= TREE_MAX_ENERGY) {
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
  const targetCount = Math.floor(energyVal / 12);
  const currentCount = bloomLayer.children.length;

  if (targetCount < currentCount) {
    bloomLayer.innerHTML = '';
  }

  for (let i = bloomLayer.children.length; i < targetCount; i++) {
    const b = document.createElement('span');
    b.className = 'extra-blossom';
    b.textContent = i % 3 === 0 ? '🧧' : '🌼';
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

  if (finisherUser) {
    addPlayerScore(finisherUser, 1000, true);
  }

  Array.from(players.values()).slice(0, 12).forEach((p) => {
    p.score += 200;
  });
  updateLeaderboardUI();

  appendEventLog(`💥 <strong>NỔ HŨ CÂY MAI CẤP ${currentLevel}!</strong> ${finisherName} ăn trọn +1.000 Lộc!`);

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

  const commentPoints = isCurrentKing ? 50 : 10;
  const energyGain = isCurrentKing ? 5 : 2;

  if (isCurrentKing) {
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

  const fortune = FORTUNE_LIST[Math.floor(Math.random() * FORTUNE_LIST.length)];
  const birthInfo = parseBirthYearAndZodiac(user.comment);

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

  const luckyLoc = rollLuckyLocPoints(totalCoins);

  const prevScore = players.has(user.userId) ? players.get(user.userId).score : 0;
  const newScore = prevScore + luckyLoc;
  const currentTop1Score = currentTop1Id && players.has(currentTop1Id) ? players.get(currentTop1Id).score : 0;
  const willBeTop1King = (user.userId === currentTop1Id) || (newScore >= currentTop1Score && newScore >= 50);

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

  // 2. Cộng điểm Lộc (nếu soán ngôi Top 1 thì sự kiện Đăng Cơ Rồng Vàng sẽ xếp ngay SAU Chiếu Ông Đồ)
  addPlayerScore(user, luckyLoc, true);

  appendEventLog(
    `🌹 <strong>${user.nickname}</strong> tặng <strong>${repeatCount} ${user.giftName}</strong> -> Nhận chữ <strong>${calli.char}</strong> & <strong>+${luckyLoc.toLocaleString('vi-VN')} Lộc</strong>!`
  );

  // 3. Cộng năng lượng Khí Xuân (nếu đủ 200/200 thì sự kiện Nổ Hũ sẽ xếp tiếp theo)
  const energyGain = totalCoins >= 5 ? 50 : totalCoins * 10;
  addTreeEnergy(energyGain, user);

  processCenterStageQueue();
}

// ================= BỘ ĐIỀU PHỐI HÀNG ĐỢI TRUNG TÂM TUẦN TỰ =================

async function processCenterStageQueue() {
  if (isShowingCenterStage || centerStageQueue.length === 0) return;

  isShowingCenterStage = true;
  const item = centerStageQueue.shift();

  const calligraphyModal = document.getElementById('calligraphyModal');
  const jackpotBanner = document.getElementById('jackpotBanner');
  const coronationModal = document.getElementById('coronationModal');
  const imperialDecreeBanner = document.getElementById('imperialDecreeBanner');

  calligraphyModal.classList.add('hidden');
  jackpotBanner.classList.add('hidden');
  coronationModal.classList.add('hidden');
  imperialDecreeBanner.classList.add('hidden');

  // 1. CHIẾU CHỈ THẦN TÀI PHÁN TRUYỀN (Khi Top 1 gõ Comment)
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

  // 2. ĐẠI LỄ ĐĂNG CƠ TOP 1 — RỒNG VÀNG CHẠY DỌC VIỀN BẢNG
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

  // 3. NỔ HŨ CÂY MAI ĐẠI LỘC (200/200)
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

  // 4. CHIẾU ÔNG ĐỒ & HÁI LÌ XÌ (item.type === 'gift')
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
