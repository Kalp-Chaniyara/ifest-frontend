import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { funEventDetailsData } from '@/data/funEventDetailsData';
import {
  Calendar,
  Trophy,
  Clock,
  ExternalLink,
  Users,
  MapPin,
  ArrowLeft,
  AlertCircle,
  BookOpen
} from 'lucide-react';

interface FunEventDetailsItem {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  time: string;
  location: string;
  participants: string;
  prize: string;
  rules: string[];
  organizers?: string[];
  requirements?: string[];
  registrationStarted: boolean;
  poster: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  coordinators?: Array<{ name: string; phone: string }>;
  rulebookUrl?: string;
  googleFormUrl?: string;
  schedule: Array<{ time: string; activity: string }> | string[];
}

const FunEventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<FunEventDetailsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = (funEventDetailsData as any)[id || ''];
    setEvent(found || null);
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
            <Link to="/fun-events" className="pixel-button-primary">
              Back to Fun Events
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

  const scheduleItems: Array<{ time?: string; activity: string }> = Array.isArray(event.schedule)
    ? (event.schedule as any).map((s: any) =>
        typeof s === 'string' ? { activity: s } : s
      )
    : [];

  return (
    <>
      <PixelHeader />

      <main className="pt-24 pb-12 min-h-screen bg-transparent">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/fun-events"
              className="inline-flex items-center space-x-2 text-ghost-grey hover:text-neon-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Fun Events</span>
            </Link>
          </div>

          {/* Event Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Event Poster */}
            <div className="relative">
              {event.poster && (
                <img
                  src={event.poster}
                  alt={`${event.name} poster`}
                  className="w-full h-auto max-h-[600px] object-contain rounded-lg"
                />
              )}
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

          {/* Optional Rulebook / Form CTA */}
          {(event.rulebookUrl || event.googleFormUrl) && (
            <Card className="pixel-card mb-8">
              <CardHeader>
                <CardTitle className="text-neon-cyan">Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  {event.rulebookUrl && (
                    <Button
                      className="pixel-button-secondary"
                      onClick={() => window.open(event.rulebookUrl!, '_blank')}
                    >
                      View Rulebook
                    </Button>
                  )}
                  {event.googleFormUrl && (
                    <Button
                      className="pixel-button-primary"
                      onClick={() => window.open(event.googleFormUrl!, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Register Now
                    </Button>
                  )}
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
                  {event.longDescription}
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
                  {scheduleItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full flex-shrink-0" />
                      <span className="text-ghost-grey text-base">{item.time ? `${item.time} - ` : ''}{item.activity}</span>
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
              <strong>Important:</strong> Registration may close before the event. Register in time!
            </AlertDescription>
          </Alert>
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default FunEventDetails;


