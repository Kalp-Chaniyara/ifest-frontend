import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { usePaymentStatus } from '@/contexts/PaymentContext';
import { eventDetailsData } from '@/data/eventDetailsData';

// Helper function to parse date strings like "15th November", "14th November"
const parseEventDate = (dateString: string): string => {
  if (!dateString || dateString === 'TBA') {
    return 'TBA';
  }
  
  // Handle formats like "15th November", "14th November"
  const match = dateString.match(/(\d+)(?:st|nd|rd|th)?\s+(\w+)/i);
  if (match) {
    const day = match[1];
    const month = match[2];
    
    // Map month names to numbers
    const monthMap: { [key: string]: string } = {
      'january': '01', 'february': '02', 'march': '03', 'april': '04',
      'may': '05', 'june': '06', 'july': '07', 'august': '08',
      'september': '09', 'october': '10', 'november': '11', 'december': '12'
    };
    
    const monthNum = monthMap[month.toLowerCase()];
    if (monthNum) {
      // Create a date for current year with the parsed month and day
      const currentYear = new Date().getFullYear();
      const date = new Date(currentYear, parseInt(monthNum) - 1, parseInt(day));
      return date.toISOString();
    }
  }
  
  // If parsing fails, return the original string
  return dateString;
};
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  School, 
  Trophy, 
  Ticket, 
  CheckCircle,
  Clock,
  Star,
  Crown,
  Users,
  MapPin
} from 'lucide-react';

interface UserData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  registrationDate: string;
  isGuest?: boolean;
}

interface EventRegistration {
  id: string;
  eventName: string;
  eventType: string;
  passType: 'silver' | 'gold';
  registrationDate: string;
  amount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  venue: string;
  eventDate: string;
}

const Profile = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<EventRegistration[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const { logout } = useAuth();
  const { clearPaymentStatus } = usePaymentStatus();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
        const resp = await fetch(`${API_BASE}/user/profile`, {
          method: 'GET',
          credentials: 'include'
        });
        if (resp.ok) {
          const data = await resp.json();
          // console.log("Profile data: ", data);
          if (data?.user) {
            setUser({
              fullName: data.user.full_name || data.user.fullName || '',
              email: data.user.email || '',
              phone: data.user.mobile_number || data.user.phone || '',
              college: data.user.college || '',
              year: data.user.year || '',
              registrationDate: data.user.registration_date || new Date().toISOString()
            });
          }
        } else {
          // User not authenticated - redirect to login
          navigate('/login');
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        // API error - redirect to login
        navigate('/login');
      }
    };

    const fetchRegisteredEvents = async () => {
      setLoadingEvents(true);
      try {
        const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
        const resp = await fetch(`${API_BASE}/user/registered-events`, {
          method: 'GET',
          credentials: 'include'
        });
        if (resp.ok) {
          const data = await resp.json();
          // console.log("Registered events data: ", data);
          
          // Get event IDs from the response
          const eventIds = data.registeredEvents || [];
          
          if (eventIds.length > 0) {
            // Map event IDs to full event details from local data
            const registeredEventsData = eventIds.map((eventId: string) => {
              const eventData = eventDetailsData[eventId];
              if (eventData) {
                return {
                  id: eventId,
                  eventName: eventData.name,
                  eventType: eventData.category || 'General',
                  passType: 'silver' as 'silver' | 'gold', // Default to silver
                  registrationDate: new Date().toISOString(),
                  amount: 0, // Events are free, but you can set a price if needed
                  status: 'confirmed' as 'confirmed' | 'pending' | 'cancelled',
                  venue: eventData.location || 'TBA',
                  eventDate: parseEventDate(eventData.time || 'TBA')
                };
              }
              return null;
            }).filter(event => event !== null) as EventRegistration[];
            
            setRegisteredEvents(registeredEventsData);
          } else {
            setRegisteredEvents([]);
          }
        } else {
          console.error('Failed to fetch registered events');
          setRegisteredEvents([]);
        }
      } catch (error) {
        console.error('Failed to fetch registered events:', error);
        setRegisteredEvents([]);
      } finally {
        setLoadingEvents(false);
      }
    };

    fetchProfile();
    fetchRegisteredEvents();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      // Clear auth state and backend session
      await logout();
      // Don't clear payment status - it should persist across login/logout
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      navigate('/');
    }
  };

  // read-only profile: no edit or logout actions

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'success-green';
      case 'pending': return 'pacman-yellow';
      case 'cancelled': return 'error-red';
      default: return 'ghost-grey';
    }
  };

  const getPassIcon = (passType: string) => {
    return passType === 'gold' ? <Crown className="w-4 h-4" /> : <Star className="w-4 h-4" />;
  };

  const getPassColor = (passType: string) => {
    return passType === 'gold' ? 'pacman-yellow' : 'neon-cyan';
  };

  if (!user) {
    return (
      <>
        <PixelHeader />
        <main className="pt-24 pb-12 min-h-screen">
          <div className="container mx-auto px-6">
            <Card className="pixel-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-neon-cyan">Profile</CardTitle>
                <CardDescription>Please fill the registration form first.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </main>
        <PixelFooter />
      </>
    );
  }

  const confirmedEvents = registeredEvents.filter(event => event.status === 'confirmed').length;
  const totalSpent = registeredEvents
    .filter(event => event.status === 'confirmed')
    .reduce((total, event) => total + event.amount, 0);

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Page Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="mb-2 pixel-glow-cyan">Profile</h1>
              <h2 className="text-ghost-grey">Registration से आई read-only details</h2>
            </div>
            <div>
              <Button className="pixel-button-secondary" onClick={handleLogout}>Logout</Button>
            </div>
          </div>

          {/* Quick Stats removed as requested */}

          {/* Main Content Tabs */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="profile">Profile Info</TabsTrigger>
              <TabsTrigger value="events">My Events</TabsTrigger>
            </TabsList>

            {/* Profile Tab - Read Only */}
            <TabsContent value="profile">
              <Card className="pixel-card max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-neon-cyan flex items-center">
                    <User className="w-5 h-5 mr-3" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Registration form की details (edit disabled)</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div>
                      <div className="text-ghost-grey">Full Name</div>
                      <div className="flex items-center space-x-2 mt-2">
                        <User className="w-4 h-4 text-neon-cyan" />
                        <span className="text-pixel-white">{user.fullName}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-ghost-grey">Email Address</div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Mail className="w-4 h-4 text-neon-cyan" />
                        <span className="text-pixel-white">{user.email}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-ghost-grey">Phone Number</div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Phone className="w-4 h-4 text-neon-cyan" />
                        <span className="text-pixel-white">{user.phone}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-ghost-grey">College/Institution</div>
                      <div className="flex items-center space-x-2 mt-2">
                        <School className="w-4 h-4 text-neon-cyan" />
                        <span className="text-pixel-white">{user.college}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-ghost-grey">Year of Study</div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        <span className="text-pixel-white">{user.year}</span>
                      </div>
                    </div>
                  </div>
                  {/* No edit or guest prompts */}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events">
              <div className="space-y-6">
                <Card className="pixel-card">
                  <CardHeader>
                    <CardTitle className="text-neon-cyan flex items-center">
                      <Ticket className="w-5 h-5 mr-3" />
                      Registered Events ({registeredEvents.length})
                    </CardTitle>
                    <CardDescription>सिर्फ viewing के लिए (edit disabled)</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {loadingEvents ? (
                      <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-cyan mx-auto mb-4"></div>
                        <p className="text-ghost-grey">Loading your registered events...</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-4">
                          {registeredEvents.map((event) => (
                            <Card key={event.id} className="pixel-card border-ghost-grey/30">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <h3 className="text-xl font-semibold text-pixel-white mb-2">
                                      {event.eventName}
                                    </h3>
                                    <div className="flex items-center space-x-4 text-sm text-ghost-grey">
                                      <Badge 
                                        className={`bg-${getPassColor(event.passType)}/20 text-${getPassColor(event.passType)} border-${getPassColor(event.passType)}/50`}
                                      >
                                        {getPassIcon(event.passType)}
                                        <span className="ml-1">{event.passType.toUpperCase()} Pass</span>
                                      </Badge>
                                      <Badge variant="outline" className="text-ghost-grey">
                                        {event.eventType}
                                      </Badge>
                                    </div>
                                  </div>
                                  <Badge 
                                    className={`bg-${getStatusColor(event.status)}/20 text-${getStatusColor(event.status)} border-${getStatusColor(event.status)}/50`}
                                  >
                                    {event.status === 'confirmed' && <CheckCircle className="w-3 h-3 mr-1" />}
                                    {event.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                                    {event.status.toUpperCase()}
                                  </Badge>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4 text-neon-cyan" />
                                    <div>
                                      <div className="text-ghost-grey">Event Date</div>
                                      <div className="text-pixel-white">
                                        {event.eventDate === 'TBA' ? 'TBA' : 
                                         new Date(event.eventDate).toLocaleDateString()}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4 text-neon-cyan" />
                                    <div>
                                      <div className="text-ghost-grey">Venue</div>
                                      <div className="text-pixel-white">{event.venue}</div>
                                    </div>
                                  </div>
                                  
                                  {/* <div className="flex items-center space-x-2">
                                    <Trophy className="w-4 h-4 text-neon-cyan" />
                                    <div>
                                      <div className="text-ghost-grey">Amount</div>
                                      <div className="text-pixel-white">₹{event.amount.toLocaleString()}</div>
                                    </div>
                                  </div> */}
                                  
                                  {/* <div className="flex items-center space-x-2">
                                    <Users className="w-4 h-4 text-neon-cyan" />
                                    <div>
                                      <div className="text-ghost-grey">Registered</div>
                                      <div className="text-pixel-white">{new Date(event.registrationDate).toLocaleDateString()}</div>
                                    </div>
                                  </div> */}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        
                        {registeredEvents.length === 0 && (
                          <div className="text-center py-12">
                            <Ticket className="w-12 h-12 text-ghost-grey mx-auto mb-4" />
                            <h3 className="text-xl text-ghost-grey mb-2">No Events Registered</h3>
                            <p className="text-ghost-grey mb-6">
                              आपने अभी तक कोई event register नहीं किया है।
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default Profile;
