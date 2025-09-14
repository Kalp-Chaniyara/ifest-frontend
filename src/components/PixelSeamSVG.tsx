import { useMemo } from 'react';

// SVG-based noisy edge seam that fills bottom area with next-section color
// and uses a jittered path to create an organic pixelated dissolve.
const PixelSeamSVG = () => {
  const pathD = useMemo(() => {
    const width = 1000; // viewBox width
    const height = 64;  // viewBox height
    const step = 20;    // horizontal step
    const amp = 22;     // edge amplitude
    const points: Array<[number, number]> = [];
    for (let x = 0; x <= width; x += step) {
      const n = Math.sin(x * 0.01) + Math.sin(x * 0.033) + Math.sin(x * 0.07);
      const y = 18 + ((n + 3) / 6) * amp; // 18..(18+amp)
      points.push([x, y]);
    }
    // Build path: start bottom-left, up to first point, across noisy edge, then down to bottom-right
    let d = `M 0 ${height} L 0 ${points[0][1].toFixed(2)}`;
    for (let i = 0; i < points.length; i++) {
      const [x, y] = points[i];
      d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    d += ` L ${width} ${height} Z`;
    return { d, width, height };
  }, []);

  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 6 }}>
      <svg
        viewBox={`0 0 ${pathD.width} ${pathD.height}`}
        preserveAspectRatio="none"
        width="100%"
        height={pathD.height}
        aria-hidden="true"
      >
        {/* Fill to next section color */}
        <path d={pathD.d} fill="#0B0B12" />
        {/* subtle scanline overlay for depth */}
        <defs>
          <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="2" fill="rgba(255,255,255,0.02)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width={pathD.width} height={pathD.height} fill="url(#scan)" />
      </svg>
      {/* edge sparks to tie into particle rain */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 8, height: 24 }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="edge-spark"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.5}s`,
              backgroundColor: ['#00ffff', '#ff00ff', '#ffff00', '#ffffff'][i % 4]
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelSeamSVG;


