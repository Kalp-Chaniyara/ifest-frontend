import { useMemo } from 'react';
import Particles from 'react-tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 120, density: { enable: true, area: 1000 } },
      color: { value: ['#ffffff', '#00ffff', '#ff00ff', '#ffff00'] },
      shape: { type: 'square' },
      opacity: { value: { min: 0.25, max: 0.7 }, animation: { enable: true, speed: 0.8, sync: false } },
      size: { value: { min: 3, max: 8 } },
      move: {
        enable: true,
        speed: { min: 0.4, max: 1.6 },
        direction: 'bottom',
        straight: true,
        outModes: { default: 'out', bottom: 'out' },
      },
      links: { enable: false },
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: { enable: true, mode: ['repulse'] },
        onClick: { enable: true, mode: ['push'] },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.3 },
        push: { quantity: 4 }
      },
    },
  }), []);

  const init = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles id="tsparticles" init={init} options={options} />
  );
};

export default ParticlesBackground;


