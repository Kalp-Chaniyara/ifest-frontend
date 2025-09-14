import { useEffect, useRef } from 'react';

// 3D pixelated seam that blends hero into the next section.
// It renders a thin canvas band with staggered voxel-like squares and a few
// falling pixels to visually connect with the particle rain below.
const PixelSeam = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
    const seamHeightCss = 64; // px height in CSS pixels (more visible)

    const colors = [
      '#ffffff', // pixel white
      '#00ffff', // neon-cyan
      '#ff00ff', // neon-magenta
      '#ffff00', // pacman-yellow
    ];
    const bg = '#0B0B12';

    type Drop = { x: number; y: number; size: number; color: string; speed: number; life: number; };
    let drops: Drop[] = [];

    const resize = () => {
      const width = canvas.clientWidth;
      const height = seamHeightCss;
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      canvas.style.height = `${height}px`;
      canvas.style.width = `${width}px`;
    };

    const seedDrops = () => {
      const w = canvas.width;
      for (let i = 0; i < 18; i++) {
        drops.push({
          x: Math.random() * w,
          y: Math.random() * canvas.height * 0.25,
          size: (2 + Math.floor(Math.random() * 4)) * devicePixelRatio,
          color: colors[(Math.random() * colors.length) | 0],
          speed: (0.4 + Math.random() * 0.9) * devicePixelRatio,
          life: 1,
        });
      }
    };

    const drawVoxelColumn = (x: number, baseH: number, unit: number) => {
      // Draw stacked squares with a tiny shadow to fake depth
      let y = canvas.height - unit; // start from bottom
      for (let h = 0; h < baseH; h += unit) {
        // body (slightly lighter than bg to be visible)
        ctx.fillStyle = 'rgba(11,11,18,0.9)';
        ctx.fillRect(x, y, unit, unit);
        // top highlight (stronger)
        ctx.fillStyle = 'rgba(255,255,255,0.14)';
        ctx.fillRect(x, y, unit, 1 * devicePixelRatio);
        // side shadow (right edge stronger)
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.fillRect(x + unit - 1 * devicePixelRatio, y, 1 * devicePixelRatio, unit);
        // bottom glow line
        ctx.fillStyle = 'rgba(0,255,255,0.08)';
        ctx.fillRect(x, y + unit - 1 * devicePixelRatio, unit, 1 * devicePixelRatio);
        y -= unit;
      }
    };

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // gradient blend to background
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, 'rgba(11,11,18,0)');
      grad.addColorStop(1, 'rgba(11,11,18,1)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // voxel ridge (only bottom ~60%)
      const unit = Math.max(2, Math.floor(2 * devicePixelRatio));
      const step = unit * 2; // column width
      for (let x = 0; x < w; x += step) {
        const noise = Math.sin(x * 0.012) + Math.sin(x * 0.041);
        const colH = Math.floor((h * 0.7) * (0.35 + (noise + 2) / 4)); // vary height, taller
        drawVoxelColumn(x, colH, unit);
      }

      // falling micro pixels to connect with rain
      if (drops.length < 40) {
        drops.push({
          x: Math.random() * w,
          y: -4 * devicePixelRatio,
          size: (2 + Math.floor(Math.random() * 4)) * devicePixelRatio,
          color: colors[(Math.random() * colors.length) | 0],
          speed: (0.7 + Math.random() * 1.6) * devicePixelRatio,
          life: 1,
        });
      }

      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.y += d.speed;
        d.life -= 0.003;
        if (d.y > h || d.life <= 0) {
          drops.splice(i, 1);
          continue;
        }
        ctx.fillStyle = d.color;
        ctx.fillRect(d.x, d.y, d.size, d.size);
        // glow
        ctx.fillStyle = 'rgba(0,255,255,0.12)';
        ctx.fillRect(d.x, d.y + d.size, d.size, 1 * devicePixelRatio);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const onResize = () => {
      resize();
      drops = [];
      seedDrops();
    };

    resize();
    seedDrops();
    rafRef.current = requestAnimationFrame(render);
    window.addEventListener('resize', onResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 5, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: 64 }} />
    </div>
  );
};

export default PixelSeam;


