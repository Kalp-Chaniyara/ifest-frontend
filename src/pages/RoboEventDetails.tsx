import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
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

const roboEventsData: RoboEvent[] = [
  {
    id: 'roboclash',
    name: 'RoboClash',
    description: 'Combat robotics tournament with multiple weight classes: 3lb, 8kg, 15kg.',
    detailedDescription: 'Design and build a combat robot to battle other robots in a high-energy tournament. Test your machine\'s strength, strategy, and resilience. Ensure your creation adheres to all specified rules and safety guidelines for a fair and thrilling competition.',
    poster: '/events/roboclash.png',
    time: '15th November',
    prize: 'Category-wise',
    participants: 'Team (2-4 members)',
    location: 'Open Air Theatre(OAT), DAU',
    category: 'robotics',
    registrationForm: '',
    coordinators: [
      { name: 'Param', phone: '+91 6355161862' },
      { name: 'Aayush', phone: '+91 6351019814' }
    ],
    rules: [
      'All bots must pass safety inspection and have kill switch or U-link',
      'Wireless control only; binding and override capability required',
      'No explosives, entanglement, hazardous materials, or visual impairing weapons',
      'Robots activated only in designated areas with coordinator approval',
    ],
    requirements: [
      'On-board sealed batteries; voltage limits per category apply',
      'No IC engines; electrical systems only',
      'Battery terminals protected; secure mounting and padding',
      'Adherence to arena and safety rules',
    ],
    schedule: [
      '15th November',
      'Complete timeline will be shared later'
    ],
    judgingCriteria: [
      'Damage (0-5): minimal to massive impact on systems',
      'Aggression (0-3): frequency, severity, boldness',
      'Control (0-3): attack planning, avoidance, compensation for damage',
    ],
    categories: [
      {
        name: '3lb',
        fee: '₹1000',
        rulesSummary: 'Max 1.5 kg with 1% tolerance; 8 ft enclosed arena; 36V max.',
        registrationLink: 'https://forms.gle/HUwVMa3XGfLweiFP6',
        rulebookUrl: 'https://docs.google.com/document/d/1TtIFpJpeIwTQN460INFDOo-_R_yvfxqy6w7f0Nw65x8/edit?usp=sharing',
        rulebookShort: [
          'Bot fits within 30cm x 30cm start square; 25cm x 25cm x 25cm max',
          'Mobility: wheeled/non-wheeled/jumping; flying and suction not allowed',
          'Wireless only; 4-frequency or dual circuits; mandatory E-stop via radio',
          'Batteries: sealed; terminals protected; 36V DC max; no change mid-match',
          'Weapons: no invisible damage, liquids, inflammables, entanglement, smoke/laser, explosives',
          'Safety inspection required; disclose hazards; arena access control',
        ],
      },
      {
        name: '8kg',
        fee: '₹1250',
        rulesSummary: 'Max 8 kg (1% tol); 16 ft arena; 52V max; ground mobility.',
        registrationLink: 'https://forms.gle/YSmhV2G6ZgyUqLPo8',
        rulebookUrl: 'https://docs.google.com/document/d/1jFt8Kl8t7r3HabQcXXuVzzYt261tGLAWTwH3HEWPSdI/edit?usp=drivesdk',
        rulebookLong: [
          'Machine fits 75cm x 75cm x 100cm box at start; RC excluded',
          'Visible, controlled mobility required; rolling, legs, jumping allowed',
          'Flying and arena suction/glue not allowed',
          'Wireless only; binding; market RC allowed; pair before entering arena',
          'Autonomous allowed but must be remotely overridden; radio E-stop mandatory',
          'Batteries sealed/immobilized; terminals protected; 52V DC max; no change mid-match',
          'Weapons ban: invisible damage, liquids, inflammables, entanglement, smoke/laser, explosives',
          'Gameplay: up to 5 members; setup 60s; 3 min matches; fairness enforced',
          'Disqualification: unsafe robot, arena damage, late to setup, disputes, unsafe activation',
          'Victory: immobilize, higher points, opponent DQ',
        ],
      },
      {
        name: '15kg',
        fee: '₹1500',
        rulesSummary: 'Max 15 kg (1% tol); 16 ft arena; 52V max; ground mobility.',
        registrationLink: 'https://forms.gle/oeycVoQnLdC7Aggg8',
        rulebookUrl: 'https://docs.google.com/document/d/1jFt8Kl8t7r3HabQcXXuVzzYt261tGLAWTwH3HEWPSdI/edit?usp=drivesdk',
        rulebookLong: [
          'Machine fits 75cm x 75cm x 100cm box at start; RC excluded',
          'Wireless only; binding; E-stop via radio; kill switch or U-link within 20s',
          'Batteries sealed/immobilized; terminals protected; 52V DC max',
          'Weapon restrictions identical to 8kg class',
          'Same gameplay, scoring, and safety rules as 8kg class',
        ],
      },
    ],
    icon: <Bot className="w-8 h-8" />,
    color: 'neon-magenta'
  },
  {
    id: 'ibot',
    name: 'i.Bot',
    description: 'AI chatbot development competition focusing on natural language processing and conversational AI.',
    detailedDescription: 'i.Bot is an AI chatbot development competition that challenges participants to create intelligent conversational agents. Participants will develop chatbots that can understand context, maintain conversations, and provide helpful responses across various scenarios. The competition tests skills in natural language processing, machine learning, and user experience design.',
    poster: '/tShirt.png',
    time: '15th November',
    prize: '₹12,000',
    participants: 'Individual/Team (1-3 members)',
    location: 'AI Lab',
    category: 'ai',
    registrationForm: 'https://forms.gle/8TxHJtSonxQSNhGK8',
    coordinators: [
      { name: 'Coordinator Alpha', phone: '+91 90000 00011' },
      { name: 'Coordinator Beta', phone: '+91 90000 00012' }
    ],
    rules: [
      'Individual or team participation allowed (max 3 members)',
      'Must use provided AI frameworks and APIs',
      'Chatbot must respond to predefined scenarios',
      'No pre-trained commercial models allowed',
      'Code must be original and developed during competition',
      'Maximum response time: 3 seconds per query',
      'Must handle at least 5 different conversation topics',
      'Documentation and code comments required'
    ],
    requirements: [
      'Python programming knowledge',
      'Understanding of NLP concepts',
      'Basic machine learning knowledge',
      'API integration skills',
      'Familiarity with chatbot frameworks',
      'Understanding of conversation design principles'
    ],
    schedule: [
      '10:00 AM - Registration and Problem Statement',
      '10:30 AM - Development Environment Setup',
      '11:00 AM - Development Phase Begins',
      '01:00 PM - Lunch Break',
      '02:00 PM - Continued Development',
      '04:00 PM - Testing and Debugging',
      '05:00 PM - Presentation and Demo',
      '06:00 PM - Judging and Awards'
    ],
    judgingCriteria: [
      'Conversation quality and relevance (35%)',
      'Technical implementation (30%)',
      'User experience and interface (20%)',
      'Innovation and creativity (15%)'
    ],
    icon: <Zap className="w-8 h-8" />,
    color: 'neon-cyan'
  }
];

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
                <p className="text-ghost-grey text-lg mb-6">{event.description}</p>
              </div>

              {/* Quick Details */}
              <Card className="pixel-card p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    <Calendar className="w-6 h-6 text-neon-cyan" />
                    <div>
                      <div className="text-ghost-grey text-sm">Date</div>
                      <div className="text-pixel-white font-semibold text-lg">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    <MapPin className="w-6 h-6 text-neon-cyan" />
                    <div>
                      <div className="text-ghost-grey text-sm">Location</div>
                      <div className="text-pixel-white font-semibold text-lg">{event.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    <Trophy className="w-6 h-6 text-pacman-yellow" />
                    <div>
                      <div className="text-ghost-grey text-sm">Prize</div>
                      <div className="text-pacman-yellow font-bold text-lg">{event.prize}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-void-black/50 rounded">
                    <Users className="w-6 h-6 text-neon-cyan" />
                    <div>
                      <div className="text-ghost-grey text-sm">Participants</div>
                      <div className="text-pixel-white font-semibold text-lg">{event.participants}</div>
                    </div>
                  </div>
                  {event.coordinators && event.coordinators.length > 0 && (
                    <div className="flex items-start space-x-3 p-3 bg-void-black/50 rounded">
                      <Users className="w-6 h-6 text-neon-cyan mt-1" />
                      <div>
                        <div className="text-ghost-grey text-sm">Coordinators</div>
                        <div className="text-pixel-white font-semibold text-sm space-y-1">
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

              {/* Register Button (hidden when categories exist) */}
              {(!event.categories || event.categories.length === 0) && event.registrationForm && (
                <Button
                  className="w-full pixel-button-primary text-lg py-6"
                  onClick={() => window.open(event.registrationForm, '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Register Now
                </Button>
              )}
            </div>
          </div>

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
                <p className="text-ghost-grey leading-relaxed">
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
                      <span className="text-ghost-grey">{item}</span>
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
