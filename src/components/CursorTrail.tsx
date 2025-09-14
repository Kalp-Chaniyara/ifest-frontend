import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!trailRef.current) return;

      // Create trail element
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';

      // Random color for trail
      const colors = [
        'hsl(var(--neon-magenta))',
        'hsl(var(--neon-cyan))',
        'hsl(var(--pacman-yellow))',
        'hsl(var(--ghost-grey))'
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      trail.style.background = randomColor;

      // Add to container
      trailRef.current.appendChild(trail);

      // Remove after animation
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 500);
    };

    // Throttle mouse move events
    let timeoutId: NodeJS.Timeout;
    const throttledMouseMove = (e: MouseEvent) => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        handleMouseMove(e);
        timeoutId = null as any;
      }, 50); // Only create trail every 50ms
    };

    document.addEventListener('mousemove', throttledMouseMove);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      ref={trailRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ zIndex: 9999 }}
    />
  );
};

export default CursorTrail;
