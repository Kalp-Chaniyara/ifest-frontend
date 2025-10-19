import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useAuth } from '@/hooks/useAuth';
import { usePaymentStatus } from '@/contexts/PaymentContext';

export const PixelHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isLoggedIn, isLoading } = useAuth();
  const { paymentStatus } = usePaymentStatus();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Determine whether to show Profile or Register button
  const shouldShowProfile = () => {
    // Show Profile ONLY if:
    // 1. User is logged in AND
    // 2. Payment is successful
    // 
    // Show Register in all other cases:
    // - Not logged in (regardless of payment status)
    // - Logged in but no payment (this case won't occur but handled for safety)
    return isLoggedIn && paymentStatus === 'success';
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-40 
        transition-all duration-300
        ${scrolled 
          ? 'bg-void-black/80 backdrop-blur-sm' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-primary hover:text-neon-magenta transition-colors duration-150"
        >
          <div className="mb-1">
          <img 
            src="/MainCL.png" 
            alt="i'Fest'25 Pixel Paradox Logo" 
            className="max-w-[150px] w-full mx-auto animate-pixel-fade-in"
          />
        </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/about" 
            className={`
              relative transition-all duration-150
              ${isActive('/about') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}
            `}
          >
            About
          </Link>
          <Link 
            to="/gallery" 
            className={`
              relative transition-all duration-150
              ${isActive('/gallery') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}
            `}
          >
            Gallery
          </Link>
          <Link 
            to="/events" 
            className={`
              relative transition-all duration-150
              ${isActive('/events') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}
            `}
          >
            Events
          </Link>
          <Link 
            to="/robo-events" 
            className={`
              relative transition-all duration-150
              ${isActive('/robo-events') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}
            `}
          >
            Robo Events
          </Link>
          <Link 
            to="/team" 
            className={`
              relative transition-all duration-150
              ${isActive('/team') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}
            `}
          >
            Team
          </Link>
          {/* <Link 
            to="/merchandise" 
            className={`
              relative transition-all duration-150
              ${isActive('/merchandise') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}
            `}
          >
            Merchandise
          </Link> */}
          {!isLoading && (
            shouldShowProfile() ? (
              <Link 
                to="/profile" 
                className="pixel-button-primary hover:animate-pixel-glitch flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link 
                to="/register" 
                className="pixel-button-primary hover:animate-pixel-glitch"
              >
                Register
              </Link>
            )
          )}
        </nav>

        {/* Mobile Sidebar */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open menu" className="inline-flex items-center justify-center rounded-md p-2 text-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-void-black/95 border-none">
              <div className="mt-8 flex flex-col space-y-6">
                <SheetClose asChild>
                  <Link 
                    to="/about"
                    className={`text-lg ${isActive('/about') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}`}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/gallery"
                    className={`text-lg ${isActive('/gallery') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}`}
                  >
                    Gallery
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/events"
                    className={`text-lg ${isActive('/events') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}`}
                  >
                    Events
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/robo-events"
                    className={`text-lg ${isActive('/robo-events') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}`}
                  >
                    Robo Events
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/team"
                    className={`text-lg ${isActive('/team') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}`}
                  >
                    Team
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/merchandise"
                    className={`text-lg ${isActive('/merchandise') ? 'text-primary' : 'text-secondary hover:text-neon-cyan'}`}
                  >
                    Merchandise
                  </Link>
                </SheetClose>
                {!isLoading && (
                  shouldShowProfile() ? (
                    <SheetClose asChild>
                      <Link 
                        to="/profile"
                        className="pixel-button-primary inline-flex w-fit items-center space-x-2"
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </Link>
                    </SheetClose>
                  ) : (
                    <SheetClose asChild>
                      <Link 
                        to="/register"
                        className="pixel-button-primary inline-flex w-fit"
                      >
                        Register
                      </Link>
                    </SheetClose>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};