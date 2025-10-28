import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import{eventDetailsData} from '@/data/eventDetailsData'
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Clock, 
  FileText, 
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  BookOpen,
  Code,
  Zap,
  Brain,
  Shield,
  Gamepad2
} from 'lucide-react';

interface EventDetails {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  time: string;
  location: string;
  participants: string;
  prize: string;
  rules: string[];
  organizers: string[];
  requirements: string[];
  registrationStarted: boolean;
  poster: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  coordinators: Array<{ name: string; phone: string }>;
  rulebookUrl?: string;
  googleFormUrl?: string;
  schedule: {
    time: string;
    activity: string;
  }[];
}

const eventDetails: Record<string, EventDetails> = eventDetailsData
const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const { isLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();
  
  // Protected route - redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, isLoading, navigate]);
  
  const event = eventDetails[id || '1'];

  // Check if user is already registered for this event
  const checkRegistrationStatus = useCallback(async () => {
    if (!isLoggedIn) return;
    
    try {
      const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
      const response = await fetch(`${API_BASE}/user/registration-status/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("Registration status data: ", data);
        setIsRegistered(data.isRegistered || false);
      }
    } catch (error) {
      console.warn('Failed to check registration status:', error);
    }
  }, [isLoggedIn, id]);

  // Register for event
  const registerForEvent = async () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    setIsRegistering(true);
    setRegistrationMessage('');

    try {
      const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
      const response = await fetch(`${API_BASE}/user/register-event/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setIsRegistered(true);
        setRegistrationMessage('Successfully registered for the event!');
      } else {
        setRegistrationMessage(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setRegistrationMessage('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsRegistering(false);
    }
  };

  // Check registration status when component mounts or user logs in
  useEffect(() => {
    checkRegistrationStatus();
  }, [checkRegistrationStatus]);

  const getEventColor = (color: string) => {
    switch (color) {
      case 'neon-magenta': return 'text-neon-magenta';
      case 'neon-cyan': return 'text-neon-cyan';
      case 'pacman-yellow': return 'text-pacman-yellow';
      default: return 'text-neon-cyan';
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'neon-magenta': return 'border-neon-magenta';
      case 'neon-cyan': return 'border-neon-cyan';
      case 'pacman-yellow': return 'border-pacman-yellow';
      default: return 'border-neon-cyan';
    }
  };

  // Show loading while checking authentication
  if (isLoading) {
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

  // Redirect to login if not authenticated (handled by useEffect)
  if (!isLoggedIn) {
    return null;
  }

  if (!event) {
    return (
      <>
        <PixelHeader />
        <main className="pt-24 pb-12 min-h-screen bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-neon-magenta text-2xl mb-4">Event Not Found</h1>
            <Link to="/events" className="pixel-button-primary">
              Back to Events
            </Link>
          </div>
        </main>
        <PixelFooter />
      </>
    );
  }

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen bg-transparent">
        <div className="container mx-auto px-6">
          
          {/* Back Button */}
          <div className="mb-8">
          <Link 
            to="/events" 
              className="inline-flex items-center space-x-2 text-ghost-grey hover:text-neon-cyan transition-colors"
          >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Events</span>
          </Link>
          </div>

          {/* Event Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Event Poster */}
            <div className="relative flex items-start">
              {event.poster && event.poster !== '/events/placeholder.png' ? (
                <img
                  src={event.poster}
                  alt={`${event.name} poster`}
                  className="w-full h-auto max-h-[600px] object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              
              {/* Fallback Poster */}
              <div className={`w-full h-[500px] bg-gradient-to-b from-void-black via-void-black/90 to-void-black border-2 border-ghost-grey rounded-lg flex flex-col items-center justify-center p-8 mt-16 ${event.poster && event.poster !== '/events/placeholder.png' ? 'hidden' : ''}`}>
                <div className={`${getEventColor(event.color)} mb-8 text-8xl`}>
                  {event.icon}
                </div>
                <h2 className="text-5xl font-bold text-pixel-white mb-6 text-center leading-tight">
                  {event.name}
                </h2>
                <p className="text-ghost-grey text-xl text-center leading-relaxed max-w-md">
                  {event.description}
                </p>
                <div className="mt-8 px-6 py-3 bg-void-black/50 border border-ghost-grey/30 rounded-lg">
                  <span className="text-pacman-yellow font-bold text-lg">
                    {event.prize}
                  </span>
                </div>
              </div>
              
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    {event.registrationStarted ? (
                      <CheckCircle className="w-6 h-6 text-success-green" />
                    ) : (
                      <Clock className="w-6 h-6 text-pacman-yellow" />
                    )}
                    <div>
                      <div className="text-ghost-grey text-base">Registration</div>
                      <div className={`font-semibold text-xl ${event.registrationStarted ? 'text-success-green' : 'text-pacman-yellow'}`}>
                        {event.registrationStarted ? 'Started' : 'Not Started'}
                  </div>
                </div>
                  </div>
                  {event.coordinators && event.coordinators.length > 0 && (
                    <div className="flex items-start space-x-3 p-3 bg-void-black/50 rounded col-span-1 lg:col-span-2">
                      <Users className="w-6 h-6 text-neon-cyan mt-1" />
                      <div>
                        <div className="text-ghost-grey text-base">Coordinators</div>
                        <div className="text-pixel-white font-semibold text-base space-y-1">
                          {event.coordinators.map((coord, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span>{coord.name}</span>
                              <a href={`tel:${coord.phone.replace(/\s/g, '')}`} className="text-neon-cyan hover:underline">{coord.phone}</a>
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className={`${
                isRegistered 
                  ? 'pixel-button-success' 
                  : isRegistering 
                    ? 'pixel-button-primary opacity-50' 
                    : 'pixel-button-primary'
              }`}
              disabled={!event.registrationStarted || isRegistering}
              onClick={() => {
                if (event.registrationStarted) {
                  setIsRegistrationOpen(true);
                }
              }}
            >
              {!event.registrationStarted 
                ? 'Registration Not Started'
                : isRegistering 
                  ? 'Registering...'
                  : isRegistered 
                    ? 'Already Registered'
                    : 'Register for Event'
              }
            </Button>
            {event.rulebookUrl && (
              <Button 
                className="pixel-button-secondary"
                onClick={() => window.open(event.rulebookUrl, '_blank')}
              >
                <FileText className="w-4 h-4 mr-2" />
                View Rulebook
              </Button>
            )}
          </div>

          {/* Google Form Button and Notice */}
          {event.googleFormUrl && (
            <Card className="pixel-card mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-pacman-yellow/10 border border-pacman-yellow/30 rounded-lg p-4 w-full">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-pacman-yellow mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-pacman-yellow font-bold text-lg mb-2">Important Notice</h3>
                        <p className="text-ghost-grey leading-relaxed">
                          Please note that if you have registered but haven't filled out the Google Form, your registration will not be counted. Make sure to complete the form below to secure your participation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="pixel-button-primary w-full sm:w-auto"
                    onClick={() => window.open(event.googleFormUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Fill Google Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Description */}
          <Card className="pixel-card mb-8">
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

          {/* Rules */}
          <Card className="pixel-card mb-8">
                  <CardHeader>
              <CardTitle className="text-neon-cyan flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Event Rules
              </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-neon-magenta text-void-black font-bold text-sm rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-ghost-grey leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
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
                    <span className="text-ghost-grey text-base">{item.time} - {item.activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
        </div>
      </main>

      {/* Registration Modal */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="bg-void-black border-2 border-ghost-grey max-w-md">
          <DialogHeader>
            <DialogTitle className="text-neon-magenta">
              {isRegistered ? `Already Registered for ${event.name}` : `Register for ${event.name}`}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {isRegistered ? (
              <>
                <div className="flex items-center space-x-2 text-success-green">
                  <CheckCircle className="w-5 h-5" />
                  <p>You are already registered for this event!</p>
                </div>
                <p className="text-ghost-grey text-sm">
                  Check your profile for more details about your registration and event updates.
                </p>
              </>
            ) : (
              <>
                <p className="text-ghost-grey">
                  Are you sure you want to register for <strong className="text-neon-cyan">{event.name}</strong>?
                </p>
                <p className="text-ghost-grey text-sm">
                  Make sure you have read the rules and requirements before proceeding.
                </p>
                {registrationMessage && (
                  <p className={`text-sm ${registrationMessage.includes('Successfully') ? 'text-success-green' : 'text-error-red'}`}>
                    {registrationMessage}
                  </p>
                )}
              </>
            )}
            
            <div className="flex space-x-4">
              <Button 
                className="flex-1 pixel-button-primary"
                onClick={() => setIsRegistrationOpen(false)}
              >
                Close
              </Button>
              {!isRegistered && (
                <Button 
                  className="flex-1 pixel-button-secondary"
                  disabled={isRegistering}
                  onClick={registerForEvent}
                >
                  {isRegistering ? 'Registering...' : 'Confirm Registration'}
                </Button>
              )}
              {isRegistered && (
                <Button 
                  variant="outline" 
                  className="flex-1 border-ghost-grey text-ghost-grey hover:border-neon-cyan hover:text-neon-cyan"
                  onClick={() => {
                    setIsRegistrationOpen(false);
                    navigate('/profile');
                  }}
                >
                  View Profile
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PixelFooter />
    </>
  );
};

export default EventDetails;
