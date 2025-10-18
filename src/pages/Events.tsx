import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Gamepad2, Code, Shield, Trophy, Brain, Zap, Users, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAuth } from '@/hooks/useAuth';
import { eventsData } from '@/data/eventsData';

gsap.registerPlugin(ScrollTrigger);

interface Event {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  prize: string;
  participants: string;
  time: string;
  location: string;
  rules: string[];
  category: 'gaming' | 'coding' | 'security' | 'ai' | 'quiz' | 'innovation';
  size: 'small' | 'medium' | 'large';
  registrationStarted: boolean;
}

const events: Event[] = eventsData;

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Removed GSAP scroll animations - all events now load immediately

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

   const getCardSize = (size: string) => {
     switch (size) {
       case 'small': return 'col-span-1 row-span-1';
       case 'medium': return 'col-span-1 sm:col-span-1 row-span-1 sm:row-span-2';
       case 'large': return 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2';
       default: return 'col-span-1 row-span-1';
     }
   };

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen bg-transparent">
        <div className="container mx-auto px-6">
          
           {/* Page Header */}
           <div className="text-center mb-12 sm:mb-16 px-4">
             <h1 className="mb-4 sm:mb-6 pixel-glow-magenta text-3xl sm:text-4xl lg:text-6xl">
               Digital Fragments
             </h1>
             <p className="text-ghost-grey text-lg sm:text-xl max-w-2xl mx-auto">
               Navigate through the glitch. Each fragment holds a piece of the paradox.
             </p>
           </div>

           {/* Events Grid */}
           <div 
             ref={containerRef}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-[180px] sm:auto-rows-[200px]"
           >
            {events.map((event) => (
                <div
                  key={event.id}
                  className={`
                  event-card relative group cursor-pointer
                  ${getCardSize(event.size)}
                  pixel-card p-4 sm:p-6 overflow-hidden
                  transition-all duration-300
                  hover:scale-105 hover:z-10
                  ${hoveredEvent === event.id ? 'glitch-active' : ''}
                  bg-void-black/90
                  hover:border-2 hover:border-neon-cyan
                  hover:shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_40px_rgba(0,255,255,0.3)]
                  hover:bg-void-black/95
                  min-h-[160px] sm:min-h-[180px]
                `}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                onClick={() => handleEventClick(event)}
              >
                {/* Glitch Border Effect */}
                <div className="absolute inset-0 glitch-border"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                   {/* Icon */}
                   <div className={`
                     w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 transition-all duration-300
                     group-hover:scale-125 group-hover:rotate-12
                     ${event.color === 'neon-magenta' ? 'text-neon-magenta' : ''}
                     ${event.color === 'neon-cyan' ? 'text-neon-cyan' : ''}
                     ${event.color === 'pacman-yellow' ? 'text-pacman-yellow' : ''}
                   `}>
                     {event.icon}
           </div>

                  {/* Title */}
                  <h3 className="text-pixel-white font-bold mb-2 text-sm sm:text-base group-hover:text-neon-magenta transition-colors line-clamp-2">
                    {event.name}
                  </h3>

                  {/* Description */}
                  <p className="text-ghost-grey text-xs sm:text-sm flex-grow line-clamp-2 sm:line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Prize */}
                  <div className="mt-3 sm:mt-4 flex items-center justify-between">
                    <span className="text-pacman-yellow font-bold text-xs sm:text-sm">
                      {event.prize}
                    </span>
                    <span className="text-ghost-grey text-xs">
                      {event.participants.split(' ')[0]}
                    </span>
                  </div>
                </div>
                
                {/* Glitch Overlay - Disabled */}
                {/* <div className="absolute inset-0 glitch-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> */}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Event Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-void-black border-2 border-ghost-grey max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-neon-magenta text-2xl">
              {selectedEvent?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedEvent && (
            <div className="space-y-6">
              {/* Event Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-neon-cyan" />
                  <span className="text-ghost-grey">{selectedEvent.time}</span>
                    </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-neon-cyan" />
                  <span className="text-ghost-grey">{selectedEvent.location}</span>
                  </div>
                <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-neon-cyan" />
                  <span className="text-ghost-grey">{selectedEvent.participants}</span>
                    </div>
                <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-pacman-yellow" />
                  <span className="text-pacman-yellow font-bold">{selectedEvent.prize}</span>
                  </div>
                <div className="flex items-center space-x-2 col-span-2">
                  {selectedEvent.registrationStarted ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-success-green" />
                      <span className="text-success-green font-bold">Registration Started</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4 text-pacman-yellow" />
                      <span className="text-pacman-yellow font-bold">Registration Not Started</span>
                    </>
                  )}
                </div>
                </div>
                
              {/* Description */}
              <div>
                <h4 className="text-neon-cyan mb-2">Description</h4>
                <p className="text-ghost-grey">{selectedEvent.description}</p>
              </div>

              {/* Event Dates */}
              <div className="bg-void-black/50 border-2 border-neon-cyan p-6 text-center">
                <h4 className="text-neon-cyan text-xl font-bold mb-2">Event Details</h4>
                <p className="text-ghost-grey">
                  Join us for this exciting event on <span className="text-pacman-yellow font-bold">{selectedEvent.time}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <Button 
                  className="flex-1 pixel-button-primary"
                  disabled={!selectedEvent?.registrationStarted}
                  onClick={() => {
                    if (selectedEvent?.registrationStarted) {
                      setIsDialogOpen(false);
                      // Main functionality: Check if user is logged in
                      if (isLoggedIn) {
                        navigate(`/event/${selectedEvent?.id}`);
                      } else {
                        navigate('/login');
                      }
                    }
                  }}
                >
                  {selectedEvent?.registrationStarted ? 'Register for Event' : 'Registration Not Started'}
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-ghost-grey text-ghost-grey hover:border-neon-cyan hover:text-neon-cyan"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <PixelFooter />
    </>
  );
};

export default Events;