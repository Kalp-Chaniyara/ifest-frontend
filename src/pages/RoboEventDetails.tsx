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
    id: 'robosoccer',
    name: 'ROBO SOCCER',
    description: 'Robot soccer competition where autonomous robots compete to score goals in a football-style match.',
    detailedDescription: 'Build and program a robot to play soccer! Your robot will compete against others in a football-style match on a specially designed arena. The robot must be able to move, kick the ball, and score goals while following all the specified rules and regulations.',
    poster: '/events/robosoccer.png',
    time: '15th November',
    prize: 'TBA',
    participants: 'Team (up to 4 members)',
    location: 'Robotics Arena',
    category: 'robotics',
    registrationForm: 'https://forms.gle/2LdFH9MvmQGp3vNw7',
    coordinators: [
      { name: 'Preet', phone: '+91 9313153988' },
      { name: 'Jeet', phone: '+91 9978617561' }
    ],
    rules: [
      'Robot dimensions must not exceed 30cm x 30cm x 30cm at any point (5% tolerance)',
      'Maximum weight 5kg with 5% tolerance',
      'Maximum voltage 25.2V for batteries and any two points of circuit',
      'Both wired and wireless robots are allowed',
      '4-wheel drive or 2-wheel drive mechanism required; all tyres must contribute to motion',
      'Robot body must not be from readymade toys; robot making kits can be used',
      'Dribbler mechanisms are allowed',
      'Standard football scoring rules apply',
      'Bot must not hold ball for more than 10 seconds in stationary position',
      'Immobilization of bot for 40 seconds leads to disqualification',
    ],
    requirements: [
      'Wired control: minimum 6 meters wire length, routed through pole 45cm high',
      'Wireless control: must support dual-frequency operation to avoid interference',
      'RF modules from toy cars may be used',
      'No IC engines and LEGO kits allowed',
      'Robot should be as per given specifications',
      'Each team can have maximum 4 members',
      'Students from different institutes can form a team',
    ],
    schedule: [
      '15th November',
      'Match duration: approximately 6 minutes (varies based on number of teams)',
      'Complete timeline will be shared later'
    ],
    judgingCriteria: [
      'Standard football scoring rules apply',
      'Team scoring most goals by end of full time wins',
      'Ball must cross the goal line to be considered a goal',
      'Direct goals are valid',
      'Technical timeout: 1 minute free, extra timeout considered as goal for opponent',
    ],
    icon: <Bot className="w-8 h-8" />,
    color: 'neon-cyan'
  },
  {
    id: 'ibot',
    name: 'i.Bot',
    description: 'Design a manually controlled wired or wireless robot that has the capacity to cover the maximum distance in the shortest time.',
    detailedDescription: 'Design a manually controlled wired or wireless robot that has the capacity to cover the maximum distance in the shortest time. But here\'s the twist, the track isn\'t going to be straightforward. Participate in i.Bot to be a part of this venturous race! This is a racing event, so the fastest and most balanced robot will win. The track will test speed, control, and stability, not just raw acceleration.',
    poster: '/events/placeholder.png',
    time: '15th November',
    prize: 'TBA',
    participants: 'Team (up to 4 members)',
    location: 'Robotics Arena',
    category: 'robotics',
    registrationForm: '',
    coordinators: [
      { name: 'Shyam', phone: '+91 9265876690' },
      { name: 'Ruchir', phone: '+91 6352524988' }
    ],
    rules: [
      'This is a racing event, so the fastest and most balanced robot will win',
      'At once only one bot can run on track and its time will be recorded',
      'The robot would be checked for its safety before the competition',
      'The robot should not damage the arena',
      'Judges\' decisions shall be treated as final and binding on all',
      'The robot must not leave behind any of its parts during the run',
      'The track will test speed, control, and stability, not just raw acceleration',
      'Only AC supply will be provided (no other variables would be provided by Organisation)',
      'The organizers reserve the right to change any or all of the above rules as they deem fit',
      'Violation of any of the above rules will lead to disqualification',
    ],
    requirements: [
      'Maximum dimension of the robot can be 30 cm x 20cm x15 cm (l x b x h)',
      '5% tolerance will be given',
      'The robot may be wired or wireless',
      'The length of the wire (for wired bots) should be long enough to cover the whole track',
      'The wire should remain slack during the complete run',
      'Maximum weight must not exceed 3 kg',
      'The bot can have 4-wheel drive or 2-wheel drive',
      'All tyres must contribute to motion',
      'The machine must not be made from Lego parts, or any ready-made kit',
      'A team may consist of a maximum of 4 participants, all from the same/different institute',
    ],
    schedule: [
      '15th November',
      'Complete timeline will be shared later'
    ],
    judgingCriteria: [
      'The robot that covers the track in the least time will win',
      'If any bot gets stuck at some part of the track, limited hand touches will be allowed along with its penalty',
      'Bonus points will be given several opportunities while racing',
      'Bonus points will be declared at the time of the event',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1esioD9onRef90NYvB35guQ4ihou_P7ny/view',
    icon: <Bot className="w-8 h-8" />,
    color: 'pacman-yellow'
  },
  
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
