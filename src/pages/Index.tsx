import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PixelLoader } from '@/components/PixelLoader';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { CountdownTimer } from '@/components/CountdownTimer';
import NextLevelTimeline from '@/components/PacManTimeline';
import { useAuth } from '@/hooks/useAuth';
// removed previous seam components; using CSS-based dither blend
import heroBackground from '@/assets/hero-background.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import RevealEffect at the top of the file with other imports
import { RevealEffect } from '@/components/RevealEffect';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { isLoggedIn, isLoading } = useAuth();
  const SHOW_LOGIN_CTA = true;

  useEffect(() => {
    if (!loading && showContent) {
      // Animate hero content in
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Pac-Man robots scroll animation
      gsap.timeline({
        scrollTrigger: {
          trigger: ".video-frame",
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          once: true
        }
      })
      .to(".pac-man-left", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(".pac-man-right", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");
    }
  }, [loading, showContent]);

  const handleLoadingComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  if (loading) {
    return <PixelLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      
      <PixelHeader />
      
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent hero-fade">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat crt-scanlines"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-void-black/40"></div>
        </div>

        {/* Animated starfield overlay */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pixel-white animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 ">
              i.Fest'25
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 animate-pixel-fade-in">
              Pixel Paradox
            </h2>
          </div> */}
          <div className="mb-6">
  <img 
    src="/MainLogo.png" 
    alt="i'Fest'25 Pixel Paradox Logo" 
    className="max-w-[450px] w-full mx-auto animate-pixel-fade-in"
  />
</div>
          {/* Countdown Timer */}
          <CountdownTimer />

          {/* CTA Button */}
          <div className="mt-12">
            {!isLoading && (
              isLoggedIn ? (
                <Link 
                  to="/events" 
                  className="pixel-button-primary text-lg md:text-xl px-8 py-4 hover:animate-pixel-glitch inline-block"
                >
                  Enter the Paradox →
                </Link>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <Link 
                    to="/register" 
                    className="pixel-button-primary text-lg md:text-xl px-8 py-4 hover:animate-pixel-glitch inline-block"
                  >
                    Register
                  </Link>
                  {SHOW_LOGIN_CTA && (
                    <Link 
                      to="/login" 
                      className="pixel-button-secondary text-lg md:text-xl px-8 py-4 hover:animate-pixel-glitch inline-block"
                    >
                      Login
                    </Link>
                  )}
                </div>
              )
            )}
          </div>

          {/* Subtitle */}
          <p className="mt-8 text-ghost-grey text-lg md:text-xl max-w-2xl mx-auto animate-pixel-fade-in">
            Where retro meets revolutionary. Experience the ultimate technology festival 
            where 8-bit nostalgia collides with cutting-edge innovation.
          </p>
        </div>

        {/* Floating Pac-Man element */}
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-pacman-yellow animate-pixel-float hidden md:block">
          <div className="w-full h-full animate-pac-chomp"></div>
        </div>

        {/* Removed bottom blend here (main has overflow-hidden). Blend is applied at next section top. */}
      </main>

      {/* Next Level Timeline Section */}
      <NextLevelTimeline />

      {/* Retro Media Hub - The Last-Gen TV */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6 pixel-glow-yellow text-3xl md:text-5xl">
              Retro Media Hub
            </h2>
            <p className="text-ghost-grey text-lg max-w-2xl mx-auto">
              Loading... Short Films from Last Cycle
            </p>
          </div>

          <div className="flex justify-center">
            {/* Two Separate CRT TV Frames */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
              
              {/* First CRT TV Frame - New Video */}
              <div className="relative">
                {/* TV Bezel */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-2xl">
                  {/* TV Screen */}
                  <div className="relative aspect-video bg-void-black overflow-hidden rounded-sm">
                    {/* CRT Screen Effect */}
                    <div className="absolute inset-0 crt-screen"></div>
                    
                    {/* Video Container */}
                    <div className="relative z-10 w-full h-full">
                      <iframe
                        src="https://www.youtube.com/embed/leuMlC5C6as?autoplay=0&mute=1"
                        title="Retro Media Hub - i'Fest'25"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    {/* Scanlines Overlay */}
                    <div className="absolute inset-0 scanlines-overlay pointer-events-none"></div>
                    
                    {/* Screen Glow */}
                    <div className="absolute inset-0 screen-glow pointer-events-none"></div>
                  </div>

                  {/* TV Controls */}
                  <div className="flex justify-center mt-4 space-x-4">
                    <div className="w-4 h-4 bg-neon-magenta rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-neon-cyan rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-pacman-yellow rounded-full animate-pulse"></div>
                  </div>

                  {/* TV Brand */}
                  <div className="absolute bottom-2 right-4 text-ghost-grey text-xs font-mono">
                    PIXEL-VISION 2000
                  </div>
                </div>
              </div>

              {/* Second CRT TV Frame - Original Video */}
              <div className="relative">
                {/* TV Bezel */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-2xl">
                  {/* TV Screen */}
                  <div className="relative aspect-video bg-void-black overflow-hidden rounded-sm">
                    {/* CRT Screen Effect */}
                    <div className="absolute inset-0 crt-screen"></div>
                    
                    {/* Video Container */}
                    <div className="relative z-10 w-full h-full">
                      <iframe
                        src="https://www.youtube.com/embed/zOu8dTKQlwU?autoplay=0&mute=1"
                        title="i'Fest 2024 Highlights"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    {/* Scanlines Overlay */}
                    <div className="absolute inset-0 scanlines-overlay pointer-events-none"></div>
                    
                    {/* Screen Glow */}
                    <div className="absolute inset-0 screen-glow pointer-events-none"></div>
                  </div>

                  {/* TV Controls */}
                  <div className="flex justify-center mt-4 space-x-4">
                    <div className="w-4 h-4 bg-neon-magenta rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-neon-cyan rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-pacman-yellow rounded-full animate-pulse"></div>
                  </div>

                  {/* TV Brand */}
                  <div className="absolute bottom-2 right-4 text-ghost-grey text-xs font-mono">
                    PIXEL-VISION 2000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pixel-card p-6 text-center hover:animate-pixel-scale-in hover:bg-black">
              <div className="w-12 h-12 bg-neon-magenta mx-auto mb-4"></div>
              <h3 className="text-neon-magenta mb-2">3 Days</h3>
              <p className="text-ghost-grey">
                Immersive tech experience with workshops, hackathons, and keynotes
              </p>
            </div>
            
            <div className="pixel-card p-6 text-center hover:animate-pixel-scale-in hover:bg-black">
              <div className="w-12 h-12 bg-neon-cyan mx-auto mb-4"></div>
              <h3 className="text-neon-cyan mb-2">20+ Events</h3>
              <p className="text-ghost-grey">
                Coding challenges, tech talks, gaming tournaments, and innovation showcases
              </p>
            </div>
            
            <div className="pixel-card p-6 text-center hover:animate-pixel-scale-in hover:bg-black">
              <div className="w-12 h-12 bg-pacman-yellow mx-auto mb-4"></div>
              <h3 className="text-pacman-yellow mb-2">10000+ Participants</h3>
              <p className="text-ghost-grey">
                Students, professionals, and tech enthusiasts from across the region
              </p>
            </div>
          </div>
        </div>
      </section>

      <PixelFooter />
    </>
  );
};

export default Index;
