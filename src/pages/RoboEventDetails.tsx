import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { roboEventDetailsData } from '@/data/roboEventDetailsData';
import { 
  Calendar, 
  Trophy, 
  Clock, 
  ExternalLink,
  Bot,
  Zap,
  Users,
  MapPin,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  BookOpen
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
  coordinators?: Array<{ name: string; phone: string }>;
  icon: React.ReactNode;
  color: string;
  detailedDescription: string;
  schedule: string[];
  judgingCriteria: string[];
  rulebookUrl?: string;
  categories?: Array<{
    name: string;
    fee: string;
    rulesSummary: string;
    registrationLink: string;
    rulebookUrl?: string;
    rulebookShort?: string[];
    rulebookLong?: string[];
  }>;
}

const roboEventsData: RoboEvent[] = roboEventDetailsData

const RoboEventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<RoboEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const foundEvent = roboEventsData.find(e => e.id === id);
    setEvent(foundEvent || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <>
        <PixelHeader />
        <main className="pt-24 pb-12 min-h-screen flex items-center justify-center">
          <div className="text-ghost-grey">Loading event details...</div>
        </main>
        <PixelFooter />
      </>
    );
  }

  if (!event) {
    return (
      <>
        <PixelHeader />
        <main className="pt-24 pb-12 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl text-error-red mb-4">Event Not Found</h1>
            <Link to="/robo-events" className="pixel-button-primary">
              Back to Robo Events
            </Link>
          </div>
        </main>
        <PixelFooter />
      </>
    );
  }

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
          
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/robo-events" 
              className="inline-flex items-center space-x-2 text-ghost-grey hover:text-neon-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Robo Events</span>
            </Link>
          </div>

          {/* Event Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Event Poster */}
            <div className="relative">
              <img
                src={event.poster}
                alt={`${event.name} poster`}
                className="w-full h-auto max-h-[600px] object-contain rounded-lg"
              />
              <div className="absolute top-4 right-4">
                <Badge 
                  className={`
                    bg-${event.color}/20 text-${event.color} border-${event.color}/50
                    backdrop-blur-sm
                  `}
                >
                  {event.category.toUpperCase()}
                </Badge>
              </div>
            </div>

            {/* Event Info */}
            <div className="space-y-6 flex flex-col justify-center">
              <div>
                <div className={`flex items-center space-x-3 mb-4 ${getEventColor(event.color)}`}>
                  {event.icon}
                  <h1 className="text-4xl font-bold">{event.name}</h1>
                </div>
                <p className="text-ghost-grey text-xl mb-6">{event.description}</p>
              </div>

              {/* Quick Details */}
              <Card className="pixel-card p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    <Calendar className="w-6 h-6 text-neon-cyan" />
                    <div>
                      <div className="text-ghost-grey text-base">Date</div>
                      <div className="text-pixel-white font-semibold text-xl">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    <MapPin className="w-6 h-6 text-neon-cyan" />
                    <div>
                      <div className="text-ghost-grey text-base">Location</div>
                      <div className="text-pixel-white font-semibold text-xl">{event.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    <Trophy className="w-6 h-6 text-pacman-yellow" />
                    <div>
                      <div className="text-ghost-grey text-base">Prize</div>
                      <div className="text-pacman-yellow font-bold text-xl">{event.prize}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    <Users className="w-6 h-6 text-neon-cyan" />
                    <div>
                      <div className="text-ghost-grey text-base">Participants</div>
                      <div className="text-pixel-white font-semibold text-xl">{event.participants}</div>
                    </div>
                  </div>
                  {event.coordinators && event.coordinators.length > 0 && (
                    <div className="flex items-start space-x-3 p-3 bg-void-black/50 rounded">
                      <Users className="w-6 h-6 text-neon-cyan mt-1" />
                      <div>
                        <div className="text-ghost-grey text-base">Coordinators</div>
                        <div className="text-pixel-white font-semibold text-base space-y-1">
                          {event.coordinators.map((c, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span>{c.name}</span>
                              <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-neon-cyan hover:underline">{c.phone}</a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

            </div>
          </div>

          {/* Rulebook Section for ROBO SOCCER */}
          {event.id === 'robosoccer' && (
            <Card className="pixel-card mb-8">
              <CardHeader>
                <CardTitle className="text-neon-cyan">Rulebook & Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-5 rounded border border-void-black/60 bg-void-black/60">
                    <h3 className="text-pixel-white font-extrabold text-xl mb-3">ROBO SOCCER</h3>
                    <p className="text-ghost-grey text-base mb-4">
                      Complete rulebook with arena specifications, robot requirements, and gameplay rules.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="pixel-button-secondary"
                        onClick={() => window.open('https://docs.google.com/document/d/1rFKIIrklQ0ermKzTdH0aqRX7IryAVuWlbhaPOql8Gs0/edit?usp=sharing', '_blank')}
                      >
                        View Rulebook
                      </Button>
                      <Button
                        className="pixel-button-primary"
                        onClick={() => window.open('https://forms.gle/2LdFH9MvmQGp3vNw7', '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Rulebook Section for i.Bot */}
          {event.id === 'ibot' && (
            <Card className="pixel-card mb-8">
              <CardHeader>
                <CardTitle className="text-neon-cyan">Rulebook & Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-5 rounded border border-void-black/60 bg-void-black/60">
                    <h3 className="text-pixel-white font-extrabold text-xl mb-3">i.Bot</h3>
                    <p className="text-ghost-grey text-base mb-4">
                      Complete rulebook with robot specifications, racing rules, and judging criteria.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="pixel-button-secondary"
                        onClick={() => window.open('https://drive.google.com/file/d/1esioD9onRef90NYvB35guQ4ihou_P7ny/view', '_blank')}
                      >
                        View Rulebook
                      </Button>
                      <Button
                        className="pixel-button-primary"
                        onClick={() => window.open('#', '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Detailed Information */}
          {/* Roboclash Categories (if any) */}
          {event.categories && event.categories.length > 0 && (
            <Card className="pixel-card mb-8">
              <CardHeader>
                <CardTitle className="text-neon-cyan">Roboclash Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  {event.categories.map((cat, idx) => (
                    <div key={idx} className="p-5 sm:p-6 rounded border border-void-black/60 bg-void-black/60">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-pixel-white font-extrabold text-2xl leading-tight">{cat.name}</h3>
                          {cat.rulesSummary && (
                            <p className="text-ghost-grey text-sm mt-1">{cat.rulesSummary}</p>
                          )}
                        </div>
                        <Badge variant="outline" className="text-pacman-yellow border-pacman-yellow/40 text-base px-3 py-1">
                          {cat.fee}
                        </Badge>
                      </div>

                      {/* Inline rules hidden; use modal instead */}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          className="pixel-button-secondary"
                          onClick={() => window.location.assign(cat.rulebookUrl || '#')}
                        >
                          View Rulebook
                        </Button>
                        <Button
                          className="pixel-button-primary"
                          onClick={() => window.open(cat.registrationLink, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Register for {cat.name}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Description */}
            <Card className="pixel-card">
              <CardHeader>
                <CardTitle className="text-neon-cyan flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  About This Event
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ghost-grey leading-relaxed text-lg">
                  {event.detailedDescription}
                </p>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card className="pixel-card">
              <CardHeader>
                <CardTitle className="text-neon-cyan flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Event Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full flex-shrink-0" />
                      <span className="text-ghost-grey text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Important Notice */}
          <Alert className="mt-8 border-warning-yellow bg-warning-yellow/20">
            <AlertCircle className="h-4 w-4 text-warning-yellow" />
            <AlertDescription className="text-warning-yellow">
              <strong>Important:</strong> Registration closes 2 days before the event. 
              Make sure to register early to secure your spot!
            </AlertDescription>
          </Alert>
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default RoboEventDetails;
