import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PixelLoaderProps {
  onComplete: () => void;
}

export const PixelLoader = ({ onComplete }: PixelLoaderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Disable image smoothing for pixel-perfect rendering
    ctx.imageSmoothingEnabled = false;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // GSAP Timeline for the entire loading sequence
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 200);
      }
    });

    // Animation sequence
    tl.call(() => {
      // t=0s: Single pixel appears
      ctx.fillStyle = '#ffff00'; // Pac-Man Yellow
      ctx.fillRect(centerX, centerY, 1, 1);
    })
    .to({}, { duration: 0.2 })
    .call(() => {
      // t=0.2s: Pixel scales to 8x8 square
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffff00';
      ctx.fillRect(centerX - 4, centerY - 4, 8, 8);
    })
    .to({}, { duration: 0.5 })
    .call(() => {
      // t=0.7s: Reveal as Pac-Man sprite
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPacMan(ctx, centerX - 16, centerY - 16, 32, false);
    })
    .to({}, { duration: 0.3 })
    .call(() => {
      // t=1.0s: Draw pellet dots
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(centerX + 50 + (i * 30), centerY - 2, 4, 4);
      }
    })
    .to({}, { duration: 0.2 });

    // Pac-Man eating animation loop
    let pelletIndex = 0;
    const eatAnimation = () => {
      if (pelletIndex >= 5) {
        // Flash effect and complete
        tl.call(() => {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        })
        .to({}, { duration: 0.016 })
        .call(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        })
        .to(container, { opacity: 0, duration: 0.2 });
        return;
      }

      // Move Pac-Man and chomp pellet
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw remaining pellets
      for (let i = pelletIndex; i < 5; i++) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(centerX + 50 + (i * 30), centerY - 2, 4, 4);
      }

      // Draw moving Pac-Man
      const pacX = centerX - 16 + (pelletIndex * 30);
      drawPacMan(ctx, pacX, centerY - 16, 32, pelletIndex % 2 === 0);

      pelletIndex++;
      setTimeout(eatAnimation, 200);
    };

    // Start eating animation after initial setup
    setTimeout(eatAnimation, 1200);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const drawPacMan = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, mouthOpen: boolean) => {
    ctx.fillStyle = '#ffff00';
    
    if (mouthOpen) {
      // Pac-Man with mouth open
      ctx.beginPath();
      ctx.arc(x + size/2, y + size/2, size/2, Math.PI * 0.2, Math.PI * 1.8);
      ctx.lineTo(x + size/2, y + size/2);
      ctx.fill();
    } else {
      // Pac-Man with mouth closed (circle)
      ctx.fillRect(x, y, size, size);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-void-black flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
};