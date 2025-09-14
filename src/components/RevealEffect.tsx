import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export const RevealEffect = () => {
  const [removing, setRemoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the epic reveal animation
    const tl = gsap.timeline();
    
    // Phase 1: Initial setup - hide everything
    tl.set('.star', { 
      scale: 0,
      opacity: 0
    });
    
    tl.set('.neon-particle', { 
      scale: 0,
      opacity: 0
    });

    tl.set('.logo-container', { 
      scale: 0.5,
      opacity: 0,
      rotation: -10
    });

    tl.set('.word-finally, .word-the, .word-wait, .word-is, .word-over, .word-we, .word-are, .word-starting, .word-registration', {
      opacity: 0,
      scale: 0.8,
      y: 20
    });

    // Phase 2: Stars twinkling
    tl.to('.star', {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      stagger: {
        from: 'random',
        amount: 1.0
      }
    })

    // Phase 3: Neon particles floating
    .to('.neon-particle', {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: 'back.out(1.7)',
      stagger: {
        from: 'random',
        amount: 0.6
      }
    }, '-=0.5')
    .to('.neon-particle', {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      stagger: {
        from: 'random',
        amount: 0.4
      }
    }, '-=0.2')

          // Phase 4: "FINALLY THE WAIT IS OVER" appears word by word
          .to('.word-finally', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }, '+=0.5')
          .to('.word-the', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }, '+=0.2')
          .to('.word-wait', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }, '+=0.2')
          .to('.word-is', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }, '+=0.2')
          .to('.word-over', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }, '+=0.2')

          // Phase 5: "WE ARE STARTING REGISTRATION" appears word by word
          .to('.word-we', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(1.7)'
          }, '+=0.5')
          .to('.word-are', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(1.7)'
          }, '+=0.2')
          .to('.word-starting', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(1.7)'
          }, '+=0.2')
          .to('.word-registration', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(1.7)'
          }, '+=0.2')

          // Phase 6: Hold for a moment
          .to({}, { duration: 2 })

          // Phase 7: Text disappears
          .to('.word-finally, .word-the, .word-wait, .word-is, .word-over, .word-we, .word-are, .word-starting, .word-registration', {
            opacity: 0,
            scale: 0.5,
            y: -30,
            duration: 0.5,
            ease: 'power2.inOut',
            stagger: {
              from: 'random',
              amount: 0.3
            }
          })

          // Phase 8: i.Fest logo appears (BIGGER SIZE)
          .to('.logo-container', {
            scale: 1.5,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.3)'
          }, '-=0.2')

    // Phase 8: Final fade out
    .to('.reveal-container', {
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: 'power2.inOut',
      onComplete: () => {
        setRemoving(true);
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (removing) return null;

  return (
        <div ref={containerRef} className="reveal-container fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* Neon Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 bg-[length:50px_50px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,255,0.1)_50%,transparent_100%)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(255,0,255,0.1)_50%,transparent_100%)] bg-[length:100px_100px]"></div>
        </div>

        {/* Twinkling Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 6px #00ffff, 0 0 12px #ff00ff',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Neon Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`neon-particle-${i}`}
            className="neon-particle absolute w-2 h-2"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `linear-gradient(45deg, 
                #00ffff 0%, 
                #ff00ff 50%, 
                #ffff00 100%
              )`,
              borderRadius: '50%',
              boxShadow: '0 0 10px currentColor, 0 0 20px currentColor',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 1}s`
            }}
          />
        ))}


        {/* Solid Pixel Text */}
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="text-6xl md:text-8xl font-bold text-center flex flex-col items-center gap-8 solid-pixel-text">
            {/* FINALLY THE WAIT IS OVER */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* FINALLY */}
              <div className="word-finally flex gap-1">
                <span className="letter web-cyan solid-letter" data-letter="F">F</span>
                <span className="letter web-cyan solid-letter" data-letter="I">I</span>
                <span className="letter web-cyan solid-letter" data-letter="N">N</span>
                <span className="letter web-cyan solid-letter" data-letter="A">A</span>
                <span className="letter web-cyan solid-letter" data-letter="L">L</span>
                <span className="letter web-cyan solid-letter" data-letter="L">L</span>
                <span className="letter web-cyan solid-letter" data-letter="Y">Y</span>
              </div>
              
              {/* Space */}
              <span className="w-6"></span>
              
              {/* THE */}
              <div className="word-the flex gap-1">
                <span className="letter web-magenta solid-letter" data-letter="T">T</span>
                <span className="letter web-magenta solid-letter" data-letter="H">H</span>
                <span className="letter web-magenta solid-letter" data-letter="E">E</span>
              </div>
              
              {/* Space */}
              <span className="w-6"></span>
              
              {/* WAIT */}
              <div className="word-wait flex gap-1">
                <span className="letter web-cyan solid-letter" data-letter="W">W</span>
                <span className="letter web-cyan solid-letter" data-letter="A">A</span>
                <span className="letter web-cyan solid-letter" data-letter="I">I</span>
                <span className="letter web-cyan solid-letter" data-letter="T">T</span>
              </div>
              
              {/* Space */}
              <span className="w-6"></span>
              
              {/* IS */}
              <div className="word-is flex gap-1">
                <span className="letter web-magenta solid-letter" data-letter="I">I</span>
                <span className="letter web-magenta solid-letter" data-letter="S">S</span>
              </div>
              
              {/* Space */}
              <span className="w-6"></span>
              
              {/* OVER */}
              <div className="word-over flex gap-1">
                <span className="letter web-cyan solid-letter" data-letter="O">O</span>
                <span className="letter web-cyan solid-letter" data-letter="V">V</span>
                <span className="letter web-cyan solid-letter" data-letter="E">E</span>
                <span className="letter web-cyan solid-letter" data-letter="R">R</span>
              </div>
            </div>

            {/* WE ARE STARTING REGISTRATION */}
            <div className="text-3xl md:text-5xl font-bold text-center flex flex-wrap justify-center gap-3 registration-text">
              <div className="word-we flex gap-1">
                <span className="letter web-magenta solid-letter" data-letter="W">W</span>
                <span className="letter web-magenta solid-letter" data-letter="E">E</span>
              </div>
              
              <span className="w-4"></span>
              
              <div className="word-are flex gap-1">
                <span className="letter web-cyan solid-letter" data-letter="A">A</span>
                <span className="letter web-cyan solid-letter" data-letter="R">R</span>
                <span className="letter web-cyan solid-letter" data-letter="E">E</span>
              </div>
              
              <span className="w-4"></span>
              
              <div className="word-starting flex gap-1">
                <span className="letter web-magenta solid-letter" data-letter="S">S</span>
                <span className="letter web-magenta solid-letter" data-letter="T">T</span>
                <span className="letter web-magenta solid-letter" data-letter="A">A</span>
                <span className="letter web-magenta solid-letter" data-letter="R">R</span>
                <span className="letter web-magenta solid-letter" data-letter="T">T</span>
                <span className="letter web-magenta solid-letter" data-letter="I">I</span>
                <span className="letter web-magenta solid-letter" data-letter="N">N</span>
                <span className="letter web-magenta solid-letter" data-letter="G">G</span>
              </div>
              
              <span className="w-4"></span>
              
              <div className="word-registration flex gap-1">
                <span className="letter web-cyan solid-letter" data-letter="R">R</span>
                <span className="letter web-cyan solid-letter" data-letter="E">E</span>
                <span className="letter web-cyan solid-letter" data-letter="G">G</span>
                <span className="letter web-cyan solid-letter" data-letter="I">I</span>
                <span className="letter web-cyan solid-letter" data-letter="S">S</span>
                <span className="letter web-cyan solid-letter" data-letter="T">T</span>
                <span className="letter web-cyan solid-letter" data-letter="R">R</span>
                <span className="letter web-cyan solid-letter" data-letter="A">A</span>
                <span className="letter web-cyan solid-letter" data-letter="T">T</span>
                <span className="letter web-cyan solid-letter" data-letter="I">I</span>
                <span className="letter web-cyan solid-letter" data-letter="O">O</span>
                <span className="letter web-cyan solid-letter" data-letter="N">N</span>
              </div>
            </div>
          </div>
        </div>

        {/* i.Fest logo container with cyberpunk effects */}
        <div className="logo-container absolute inset-0 flex items-center justify-center z-40">
          <div className="relative">
            <img
              src="/MainLogo.png"
              alt="i.Fest'25 Logo"
              className="w-80 h-80 md:w-96 md:h-96 object-contain z-10 relative"
              style={{
                filter: 'drop-shadow(0 0 20px #00ffff) drop-shadow(0 0 40px #ff00ff) drop-shadow(0 0 60px #00ffff)'
              }}
            />
            
            {/* Holographic scan lines */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

      </div>
    </div>
  );
};