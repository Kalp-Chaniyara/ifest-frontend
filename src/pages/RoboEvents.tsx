import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Trophy, 
  Clock, 
  ExternalLink,
  Bot,
  Zap,
  Users,
  MapPin
} from 'lucide-react';

interface RoboEvent {
  id: string;
  name: string;
  description: string;
  poster: string;
  time: string;
  prize: string;
  participants: string;
  location: string;
  category: 'robotics' | 'ai';
  registrationForm: string;
  rules: string[];
  requirements: string[];
  icon: React.ReactNode;
  color: string;
}

const roboEvents: RoboEvent[] = [
  {
    id: 'roboclash',
    name: 'RoboClash',
    description: 'Combat robotics tournament with multiple weight classes. Build, battle, and dominate the arena.',
    poster: '/events/roboclash2.png',
    time: '15th November',
    prize: 'TBA',
    participants: 'Team (up to 5 members)',
    location: 'Robotics Arena',
    category: 'robotics',
    registrationForm: '',
    rules: [
      'Multiple weight classes with separate rulebooks',
      'All bots must pass safety inspection',
      'Wireless control with emergency kill switch required',
      'No hazardous, explosive, or entanglement weapons',
    ],
    requirements: [
      'On-board batteries only',
      'Adhere to voltage limits per category',
      'Comply with arena and activation safety protocols'
    ],
    icon: <Bot className="w-8 h-8" />,
    color: 'neon-magenta'
  },
  // {
  //   id: 'ibot',
  //   name: 'i.Bot',
  //   description: 'AI chatbot development competition focusing on natural language processing and conversational AI.',
  //   poster: '/tShirt.png', // Using existing image as placeholder
  //   time: '15th November',
  //   prize: '₹12,000',
  //   participants: 'Individual/Team (1-3 members)',
  //   location: 'AI Lab',
  //   category: 'ai',
  //   registrationForm: 'https://forms.gle/8TxHJtSonxQSNhGK8', // Replace with actual form
  //   rules: [
  //     'Individual or team participation allowed',
  //     'Must use provided AI frameworks',
  //     'Chatbot must respond to predefined scenarios',
  //     'No pre-trained models allowed',
  //     'Code must be original'
  //   ],
  //   requirements: [
  //     'Python programming knowledge',
  //     'Understanding of NLP concepts',
  //     'Basic machine learning knowledge',
  //     'API integration skills'
  //   ],
  //   icon: <Zap className="w-8 h-8" />,
  //   color: 'neon-cyan'
  // }
];

const RoboEvents = () => {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const getEventColor = (color: string) => {
    switch (color) {
      case 'neon-magenta': return 'text-neon-magenta';
      case 'neon-cyan': return 'text-neon-cyan';
      default: return 'text-pacman-yellow';
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'neon-magenta': return 'border-neon-magenta';
      case 'neon-cyan': return 'border-neon-cyan';
      default: return 'border-pacman-yellow';
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
              Robo Events
            </h1>
            <p className="text-ghost-grey text-base sm:text-lg max-w-2xl mx-auto">
              Where artificial intelligence meets mechanical precision. 
              Compete in cutting-edge robotics and AI challenges.
            </p>
          </div>

        {/* Offer Note */}
        <div className="max-w-3xl mx-auto px-4 mb-8">
          <Card className="border-pacman-yellow/40 bg-void-black/70">
            <CardContent className="py-4">
              <p className="text-pixel-white text-sm sm:text-base">
                <span className="text-pacman-yellow font-bold">Note:</span> Per team you will get <span className="text-pacman-yellow font-extrabold">5 Gold Pass</span> free on registration of any Robo event.
              </p>
            </CardContent>
          </Card>
        </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8 max-w-3xl mx-auto px-4">
            {roboEvents.map((event) => (
              <Card
                key={event.id}
                className={`
                  pixel-card group cursor-pointer transition-all duration-300
                  hover:scale-105 hover:shadow-2xl hover:bg-black
                  ${hoveredEvent === event.id ? 'glitch-active' : ''}
                  bg-void-black/90
                  hover:border-2 ${getBorderColor(event.color)}
                  hover:shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_40px_rgba(0,255,255,0.3)]
                  hover:bg-void-black/95
                  overflow-hidden
                `}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className="flex flex-col h-full">
                  {/* Event Poster - Landscape Layout */}
                  <div className="relative w-full aspect-[1080/713]">
                    <img
                      src={event.poster}
                      alt={`${event.name} poster`}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Event Content */}
                  <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`${getEventColor(event.color)}`}>
                          {event.icon}
                        </div>
                        <Badge variant="outline" className="text-ghost-grey text-xs">
                          {event.participants}
                        </Badge>
                      </div>
                      
                      <CardTitle className={`text-xl md:text-2xl ${getEventColor(event.color)} group-hover:text-pixel-white transition-colors mb-3`}>
                        {event.name}
                      </CardTitle>
                      
                      <CardDescription className="text-ghost-grey text-sm md:text-base mb-6 line-clamp-3">
                        {event.description}
                      </CardDescription>

                      {/* Event Details */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-neon-cyan" />
                          <span className="text-ghost-grey">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-neon-cyan" />
                          <span className="text-ghost-grey truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-3 h-3 md:w-4 md:h-4 text-pacman-yellow" />
                          <span className="text-pacman-yellow font-bold">{event.prize}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-neon-cyan" />
                          <span className="text-ghost-grey text-xs">{event.participants}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link 
                        to={`/robo-events/${event.id}`}
                        className="flex-1"
                      >
                        <Button className="w-full pixel-button-primary text-sm py-2">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        className="pixel-button-secondary text-sm py-2 px-4"
                        onClick={() => window.location.assign(`/robo-events/${event.id}`)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info Section */}
          {/* <div className="mt-20">
            <Card className="pixel-card max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-neon-cyan text-center">
                  Why Participate in Robo Events?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Bot className="w-8 h-8 text-neon-magenta mx-auto" />
                    <h3 className="text-pixel-white font-bold">Hands-on Experience</h3>
                    <p className="text-ghost-grey text-sm">
                      Work with real robotics hardware and AI frameworks
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Trophy className="w-8 h-8 text-pacman-yellow mx-auto" />
                    <h3 className="text-pixel-white font-bold">Competitive Spirit</h3>
                    <p className="text-ghost-grey text-sm">
                      Compete against the best minds in robotics and AI
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Users className="w-8 h-8 text-neon-cyan mx-auto" />
                    <h3 className="text-pixel-white font-bold">Team Collaboration</h3>
                    <p className="text-ghost-grey text-sm">
                      Build lasting connections with fellow tech enthusiasts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default RoboEvents;
