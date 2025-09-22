import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Gamepad2, Code, Shield, Trophy, Brain, Zap, Users, Calendar, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
}

const events: Event[] = [
  {
    id: '1',
    name: 'FizzBuzz',
    description: 'Classic programming challenge with a modern twist.',
    icon: <Code className="w-8 h-8" />,
    color: 'neon-cyan',
    prize: 'TBA',
    participants: 'Individual',
    time: '14th November',
    location: 'Computer Lab 1',
    rules: ['Details coming soon'],
    category: 'coding',
    size: 'medium'
  },
  {
    id: '2',
    name: 'i.Ohunt',
    description: 'Digital treasure hunt with technology challenges.',
    icon: <Zap className="w-8 h-8" />,
    color: 'neon-magenta',
    prize: 'TBA',
    participants: 'Individual/Team',
    time: '15th November',
    location: 'Main Campus',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'medium'
  },
  {
    id: '3',
    name: 'RepoReboot',
    description: 'Code repository challenge and optimization contest.',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    prize: 'TBA',
    participants: 'Individual',
    time: '16th November',
    location: 'Computer Lab 2',
    rules: ['Details coming soon'],
    category: 'coding',
    size: 'large'
  },
  {
    id: '4',
    name: 'i.Clash',
    description: 'Competitive programming tournament.',
    icon: <Trophy className="w-8 h-8" />,
    color: 'neon-cyan',
    prize: 'TBA',
    participants: 'Individual',
    time: '14th November',
    location: 'Main Auditorium',
    rules: ['Details coming soon'],
    category: 'coding',
    size: 'large'
  },
  {
    id: '5',
    name: 'i.Relay',
    description: 'Team-based relay coding competition.',
    icon: <Users className="w-8 h-8" />,
    color: 'neon-magenta',
    prize: 'TBA',
    participants: 'Team',
    time: '15th November',
    location: 'Conference Hall',
    rules: ['Details coming soon'],
    category: 'coding',
    size: 'medium'
  },
  {
    id: '6',
    name: 'i.Cube',
    description: '3D problem solving and spatial reasoning challenge.',
    icon: <Brain className="w-8 h-8" />,
    color: 'pacman-yellow',
    prize: 'TBA',
    participants: 'Individual',
    time: '16th November',
    location: 'Innovation Lab',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'small'
  },
  {
    id: '7',
    name: 'i.Papyrus',
    description: 'Creative writing and documentation challenge.',
    icon: <Zap className="w-8 h-8" />,
    color: 'neon-cyan',
    prize: 'TBA',
    participants: 'Individual',
    time: '14th November',
    location: 'Library',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'small'
  },
  {
    id: '8',
    name: 'i.Capture',
    description: 'Digital photography and image processing contest.',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: 'neon-magenta',
    prize: 'TBA',
    participants: 'Individual',
    time: '15th November',
    location: 'Photography Studio',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'medium'
  },
  {
    id: '9',
    name: 'Catch The Flag',
    description: 'Cybersecurity capture the flag competition.',
    icon: <Shield className="w-8 h-8" />,
    color: 'pacman-yellow',
    prize: 'TBA',
    participants: 'Individual/Team',
    time: '16th November',
    location: 'Cybersecurity Lab',
    rules: ['Details coming soon'],
    category: 'security',
    size: 'large'
  },
  {
    id: '10',
    name: 'SellOut',
    description: 'Business pitch and entrepreneurship challenge.',
    icon: <Trophy className="w-8 h-8" />,
    color: 'neon-cyan',
    prize: 'TBA',
    participants: 'Individual/Team',
    time: '14th November',
    location: 'Business Center',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'medium'
  },
  {
    id: '11',
    name: 'RoboClash',
    description: 'Robotics and automation competition.',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: 'neon-magenta',
    prize: 'TBA',
    participants: 'Team',
    time: '15th November',
    location: 'Robotics Lab',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'large'
  },
  {
    id: '12',
    name: 'Chess64',
    description: 'Chess tournament with digital twist.',
    icon: <Brain className="w-8 h-8" />,
    color: 'pacman-yellow',
    prize: 'TBA',
    participants: 'Individual',
    time: '16th November',
    location: 'Gaming Zone',
    rules: ['Details coming soon'],
    category: 'gaming',
    size: 'small'
  },
  {
    id: '13',
    name: 'CryptoTrade',
    description: 'Cryptocurrency trading simulation challenge.',
    icon: <Zap className="w-8 h-8" />,
    color: 'neon-cyan',
    prize: 'TBA',
    participants: 'Individual',
    time: '14th November',
    location: 'Finance Lab',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'medium'
  },
  {
    id: '14',
    name: 'Treasure Hunt',
    description: 'Digital treasure hunt adventure.',
    icon: <Users className="w-8 h-8" />,
    color: 'neon-magenta',
    prize: 'TBA',
    participants: 'Team',
    time: '15th November',
    location: 'Campus Grounds',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'medium'
  },
  {
    id: '15',
    name: 'i.Ganith',
    description: 'Mathematical problem solving competition.',
    icon: <Brain className="w-8 h-8" />,
    color: 'pacman-yellow',
    prize: 'TBA',
    participants: 'Individual',
    time: '16th November',
    location: 'Math Lab',
    rules: ['Details coming soon'],
    category: 'quiz',
    size: 'medium'
  },
  {
    id: '16',
    name: 'i.Ride',
    description: 'Transportation and logistics innovation challenge.',
    icon: <Zap className="w-8 h-8" />,
    color: 'neon-cyan',
    prize: 'TBA',
    participants: 'Individual/Team',
    time: '14th November',
    location: 'Transportation Hub',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'medium'
  },
  {
    id: '17',
    name: 'i.Bot',
    description: 'AI chatbot development competition.',
    icon: <Brain className="w-8 h-8" />,
    color: 'neon-magenta',
    prize: 'TBA',
    participants: 'Individual/Team',
    time: '15th November',
    location: 'AI Lab',
    rules: ['Details coming soon'],
    category: 'ai',
    size: 'medium'
  },
  {
    id: '18',
    name: 'CineCraft',
    description: 'Video editing and filmmaking contest.',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: 'pacman-yellow',
    prize: 'TBA',
    participants: 'Individual/Team',
    time: '16th November',
    location: 'Media Studio',
    rules: ['Details coming soon'],
    category: 'innovation',
    size: 'large'
  },
  {
    id: '19',
    name: 'i.Quiz',
    description: 'Technology and general knowledge quiz.',
    icon: <Trophy className="w-8 h-8" />,
    color: 'neon-cyan',
    prize: 'TBA',
    participants: 'Individual/Team',
    time: '14th November',
    location: 'Quiz Hall',
    rules: ['Details coming soon'],
    category: 'quiz',
    size: 'medium'
  },
  {
    id: '20',
    name: 'BlindC',
    description: 'C programming challenge with special constraints.',
    icon: <Code className="w-8 h-8" />,
    color: 'neon-magenta',
    prize: 'TBA',
    participants: 'Individual',
    time: '15th November',
    location: 'Programming Lab',
    rules: ['Details coming soon'],
    category: 'coding',
    size: 'medium'
  },
  {
    id: '21',
    name: 'Reverse Coding',
    description: 'Reverse engineering and code analysis challenge.',
    icon: <Shield className="w-8 h-8" />,
    color: 'pacman-yellow',
    prize: 'TBA',
    participants: 'Individual',
    time: '16th November',
    location: 'Security Lab',
    rules: ['Details coming soon'],
    category: 'coding',
    size: 'medium'
  },
  {
    id: '22',
    name: 'AI Triathlon',
    description: 'Three-stage AI development marathon.',
    icon: <Brain className="w-8 h-8" />,
    color: 'neon-cyan',
    prize: 'TBA',
    participants: 'Individual/Team',
    time: '14th November',
    location: 'AI Research Center',
    rules: ['Details coming soon'],
    category: 'ai',
    size: 'large'
  },
  {
    id: '23',
    name: 'i.Prompt',
    description: 'AI prompt engineering and optimization contest.',
    icon: <Zap className="w-8 h-8" />,
    color: 'neon-magenta',
    prize: 'TBA',
    participants: 'Individual',
    time: '15th November',
    location: 'AI Lab',
    rules: ['Details coming soon'],
    category: 'ai',
    size: 'medium'
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Removed GSAP scroll animations - all events now load immediately

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const getCardSize = (size: string) => {
    switch (size) {
      case 'small': return 'col-span-1 row-span-1';
      case 'medium': return 'col-span-1 row-span-2';
      case 'large': return 'col-span-2 row-span-2';
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen bg-transparent">
        <div className="container mx-auto px-6">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 pixel-glow-magenta text-4xl md:text-6xl">
              Digital Fragments
            </h1>
            <p className="text-ghost-grey text-lg max-w-2xl mx-auto">
              Navigate through the glitch. Each fragment holds a piece of the paradox.
            </p>
          </div>

          {/* Events Grid */}
          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[200px]"
          >
            {events.map((event) => (
                <div
                  key={event.id}
                  className={`
                  event-card relative group cursor-pointer
                  ${getCardSize(event.size)}
                  pixel-card p-6 overflow-hidden
                  transition-all duration-300
                  hover:scale-105 hover:z-10
                  ${hoveredEvent === event.id ? 'glitch-active' : ''}
                  bg-void-black/90
                  hover:border-2 hover:border-neon-cyan
                  hover:shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_40px_rgba(0,255,255,0.3)]
                  hover:bg-void-black/95
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
                    w-12 h-12 mb-4 transition-all duration-300
                    group-hover:scale-125 group-hover:rotate-12
                    ${event.color === 'neon-magenta' ? 'text-neon-magenta' : ''}
                    ${event.color === 'neon-cyan' ? 'text-neon-cyan' : ''}
                    ${event.color === 'pacman-yellow' ? 'text-pacman-yellow' : ''}
                  `}>
                    {event.icon}
          </div>

                  {/* Title */}
                  <h3 className="text-pixel-white font-bold mb-2 group-hover:text-neon-magenta transition-colors">
                    {event.name}
                  </h3>

                  {/* Description */}
                  <p className="text-ghost-grey text-sm flex-grow line-clamp-3">
                    {event.description}
                  </p>

                  {/* Prize */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-pacman-yellow font-bold">
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
                  onClick={() => {
                    setIsDialogOpen(false);
                    window.location.href = '/register';
                  }}
                >
                  Register
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