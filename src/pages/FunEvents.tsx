import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { funEventsData } from '@/data/funEventsData';
import { Calendar, MapPin, Trophy, Users, ExternalLink } from 'lucide-react';

interface EventItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: 'neon-magenta' | 'neon-cyan' | 'pacman-yellow';
  prize: string;
  participants: string;
  time: string;
  location: string;
  rules: string[];
  category: string;
  size: 'small' | 'medium' | 'large';
  registrationStarted: boolean;
}

const allEvents: EventItem[] = funEventsData as unknown as EventItem[];

const FunEvents = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const funEvents = useMemo(() => allEvents, []);

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'neon-magenta': return 'border-neon-magenta';
      case 'neon-cyan': return 'border-neon-cyan';
      default: return 'border-pacman-yellow';
    }
  };

  const getAccentText = (color: string) => {
    switch (color) {
      case 'neon-magenta': return 'text-neon-magenta';
      case 'neon-cyan': return 'text-neon-cyan';
      default: return 'text-pacman-yellow';
    }
  };

  return (
    <>
      <PixelHeader />

      <main className="pt-24 pb-12 min-h-screen bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="mb-4 sm:mb-6 pixel-glow-magenta text-3xl sm:text-4xl lg:text-6xl">
              Fun Events
            </h1>
            <p className="text-ghost-grey text-lg sm:text-xl max-w-2xl mx-auto">
              Fun, vibes અને friendly competition—pick your play!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8 max-w-3xl mx-auto px-4">
            {funEvents.map((event) => (
              <Card
                key={event.id}
                className={`
                  pixel-card group cursor-pointer transition-all duration-300
                  hover:scale-105 hover:shadow-2xl hover:bg-black
                  ${hoveredId === event.id ? 'glitch-active' : ''}
                  bg-void-black/90
                  hover:border-2 ${getBorderColor(event.color)}
                  hover:shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_40px_rgba(0,255,255,0.3)]
                  hover:bg-void-black/95
                  overflow-hidden
                `}
                onMouseEnter={() => setHoveredId(event.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex flex-col h-full">
                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`${getAccentText(event.color)}`}>
                          {event.icon}
                        </div>
                        <Badge variant="outline" className="text-ghost-grey text-xs">
                          {event.participants}
                        </Badge>
                      </div>

                      <CardTitle className={`text-xl md:text-2xl ${getAccentText(event.color)} group-hover:text-pixel-white transition-colors mb-3`}>
                        {event.name}
                      </CardTitle>

                      <CardDescription className="text-ghost-grey text-base md:text-lg mb-6 line-clamp-3">
                        {event.description}
                      </CardDescription>

                      {/* Event Details */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4 text-sm md:text-base mb-6">
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
                          <span className="text-ghost-grey text-sm">{event.participants}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link 
                        to={`/fun-events/${event.id}`}
                        className="flex-1"
                      >
                        <Button className="w-full pixel-button-primary text-base py-2">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        className="pixel-button-secondary text-base py-2 px-4"
                        onClick={() => window.location.assign(`/fun-events/${event.id}`)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {funEvents.length === 0 && (
              <div className="text-center text-ghost-grey">No fun events yet. Stay tuned!</div>
            )}
          </div>
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default FunEvents;


