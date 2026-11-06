// ================= ÂM THANH (WEB AUDIO API + GIỌNG ĐỌC AI TIẾNG VIỆT) =================

let audioCtx = null;
let activeUtterance = null;

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

function waitMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

// Tiếng nổ pháo + chuông vàng khi tặng bông / nổ hũ
function playGiftFanfare(isGrand = false) {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = isGrand
    ? [523.25, 659.25, 783.99, 1046.5, 1318.5]
    : [523.25, 659.25, 783.99, 1046.5];

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

// Đọc giọng nói AI Tiếng Việt (Trả về Promise đợi đọc xong 100%)
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

    const maxWaitMs = Math.max(5000, text.length * 110 + 2500);
    const safetyTimer = setTimeout(finish, maxWaitMs);

    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      activeUtterance = utter;
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
