// ================= HIỆU ỨNG CANVAS: HOA MAI RƠI, PHÁO HOA, MƯA LÌ XÌ & RỒNG VÀNG =================

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
const fallingRewards = [];

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
    fp.vy += 0.06;
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

function getRectPerimeterPoint(dist, x0, y0, w, h) {
  const perim = 2 * (w + h);
  const d = ((dist % perim) + perim) % perim;

  let x = x0;
  let y = y0;
  let tx = 1;
  let ty = 0;

  if (d < w) {
    x = x0 + d;
    y = y0;
    tx = 1;
    ty = 0;
  } else if (d < w + h) {
    x = x0 + w;
    y = y0 + (d - w);
    tx = 0;
    ty = 1;
  } else if (d < 2 * w + h) {
    x = x0 + w - (d - (w + h));
    y = y0 + h;
    tx = -1;
    ty = 0;
  } else {
    x = x0;
    y = y0 + h - (d - (2 * w + h));
    tx = 0;
    ty = -1;
  }

  const nx = ty;
  const ny = -tx;
  return { x, y, tx, ty, nx, ny };
}

function drawDragonHead(ctx2d, x, y, angle, tick) {
  ctx2d.save();
  ctx2d.translate(x, y);
  ctx2d.rotate(angle);

  // Râu rồng dài uốn lượn 2 bên mũi
  const whiskerWave = Math.sin(tick * 0.2) * 5;
  ctx2d.strokeStyle = '#fff59d';
  ctx2d.lineWidth = 2.2;
  ctx2d.beginPath();
  ctx2d.moveTo(10, -5);
  ctx2d.bezierCurveTo(22, -18 + whiskerWave, 6, -28, -10, -22 - whiskerWave);
  ctx2d.moveTo(10, 5);
  ctx2d.bezierCurveTo(22, 18 - whiskerWave, 6, 28, -10, 22 + whiskerWave);
  ctx2d.stroke();

  // Sừng rồng vàng (2 nhánh sau đầu)
  ctx2d.strokeStyle = '#ffb300';
  ctx2d.lineWidth = 3.2;
  ctx2d.lineCap = 'round';
  ctx2d.beginPath();
  ctx2d.moveTo(-4, -7);
  ctx2d.lineTo(-18, -19);
  ctx2d.lineTo(-25, -15);
  ctx2d.moveTo(-13, -15);
  ctx2d.lineTo(-18, -23);

  ctx2d.moveTo(-4, 7);
  ctx2d.lineTo(-18, 19);
  ctx2d.lineTo(-25, 15);
  ctx2d.moveTo(-13, 15);
  ctx2d.lineTo(-18, 23);
  ctx2d.stroke();

  // Bờm lửa đỏ vàng quanh cổ
  ctx2d.fillStyle = '#e51c23';
  for (const side of [-1, 1]) {
    ctx2d.beginPath();
    ctx2d.moveTo(-6, side * 8);
    ctx2d.lineTo(-18, side * 16);
    ctx2d.lineTo(-10, side * 4);
    ctx2d.closePath();
    ctx2d.fill();
  }

  // Hộp sọ & Mõm Rồng Vàng
  const headGrad = ctx2d.createLinearGradient(-12, 0, 16, 0);
  headGrad.addColorStop(0, '#d97706');
  headGrad.addColorStop(0.5, '#ffd54f');
  headGrad.addColorStop(1, '#fff9c4');
  ctx2d.fillStyle = headGrad;
  ctx2d.strokeStyle = '#78350f';
  ctx2d.lineWidth = 1.5;

  ctx2d.beginPath();
  ctx2d.moveTo(16, 0);
  ctx2d.quadraticCurveTo(14, -9, 2, -10);
  ctx2d.quadraticCurveTo(-12, -12, -13, 0);
  ctx2d.quadraticCurveTo(-12, 12, 2, 10);
  ctx2d.quadraticCurveTo(14, 9, 16, 0);
  ctx2d.closePath();
  ctx2d.fill();
  ctx2d.stroke();

  // Mắt rồng phát sáng
  ctx2d.fillStyle = '#ffffff';
  ctx2d.shadowColor = '#ff3d00';
  ctx2d.shadowBlur = 8;
  ctx2d.beginPath();
  ctx2d.arc(1, -5.5, 2.6, 0, Math.PI * 2);
  ctx2d.arc(1, 5.5, 2.6, 0, Math.PI * 2);
  ctx2d.fill();

  ctx2d.fillStyle = '#d50000';
  ctx2d.beginPath();
  ctx2d.arc(1.8, -5.5, 1.2, 0, Math.PI * 2);
  ctx2d.arc(1.8, 5.5, 1.2, 0, Math.PI * 2);
  ctx2d.fill();

  ctx2d.restore();
}

function drawDragonLeg(ctx2d, x, y, angle, side, tick) {
  ctx2d.save();
  ctx2d.translate(x, y);
  ctx2d.rotate(angle + side * 1.1 + Math.sin(tick * 0.18) * 0.25);

  ctx2d.strokeStyle = '#ffca28';
  ctx2d.lineWidth = 3.5;
  ctx2d.lineCap = 'round';
  ctx2d.beginPath();
  ctx2d.moveTo(0, 0);
  ctx2d.lineTo(9, side * 4);
  ctx2d.lineTo(15, 0);
  ctx2d.stroke();

  ctx2d.strokeStyle = '#fff9c4';
  ctx2d.lineWidth = 1.8;
  for (let c = -1; c <= 1; c++) {
    ctx2d.beginPath();
    ctx2d.moveTo(15, 0);
    ctx2d.lineTo(20, c * 4);
    ctx2d.stroke();
  }
  ctx2d.restore();
}

function animateDragonBorder() {
  if (dCtx) {
    const modal = document.getElementById('coronationModal');
    if (modal && !modal.classList.contains('hidden')) {
      dragonAnimTick += 1;
      const W = dragonCanvas.width;
      const H = dragonCanvas.height;
      dCtx.clearRect(0, 0, W, H);

      const rx = 34;
      const ry = 28;
      const rw = W - 68;
      const rh = H - 56;

      const headDist = dragonAnimTick * 4.4;
      const totalSegments = 36;
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

        const taper = 1 - (i / totalSegments) * 0.72;
        const radius = 9.5 * taper + 2.2;

        if (i === 7 || i === 20) {
          drawDragonLeg(dCtx, cur.x, cur.y, segAngle, 1, dragonAnimTick + i);
          drawDragonLeg(dCtx, cur.x, cur.y, segAngle, -1, dragonAnimTick + i);
        }

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

      // 3. Vẽ Đầu Rồng Đế Vương ở đốt 0
      const headNode = nodes[0];
      const neckNode = nodes[1];
      const headAngle = Math.atan2(headNode.y - neckNode.y, headNode.x - neckNode.x);
      drawDragonHead(dCtx, headNode.x, headNode.y, headAngle, dragonAnimTick);
    }
  }
  requestAnimationFrame(animateDragonBorder);
}
requestAnimationFrame(animateDragonBorder);
