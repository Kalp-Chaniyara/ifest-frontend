import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Clock, 
  FileText, 
  Image, 
  Info,
  ArrowLeft,
  Download,
  ExternalLink
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
  gallery: string[];
  organizers: string[];
  requirements: string[];
  schedule: {
    time: string;
    activity: string;
  }[];
}

const eventDetails: Record<string, EventDetails> = {
  '1': {
    id: '1',
    name: 'Code Rush',
    description: 'Speed coding challenge where participants solve algorithmic problems under time pressure.',
    longDescription: `Code Rush is the ultimate test of programming prowess and problem-solving skills. 
    Participants will face a series of challenging algorithmic problems that must be solved within a strict time limit. 
    This event combines the excitement of competitive programming with the pressure of real-world coding scenarios.
    
    The competition features multiple rounds, each with increasing difficulty levels. Participants can use any programming 
    language of their choice, but must rely solely on their coding skills - no external libraries or frameworks are allowed. 
    The event tests not just coding ability, but also logical thinking, algorithm optimization, and time management skills.`,
    time: 'Day 1, 10:00 AM - 12:00 PM',
    location: 'Main Arena',
    participants: 'Individual (50 max)',
    prize: '₹15,000',
    rules: [
      'Solo participation only - no teams allowed',
      'Any programming language is permitted',
      'No external libraries or frameworks',
      'Internet access is restricted during the competition',
      '5 problems must be solved within 2 hours',
      'Submissions are judged on correctness and efficiency',
      'Ties are broken by submission time',
      'Final decisions by judges are binding'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
    ],
    organizers: [
      'Prof. Dr. Sarah Chen - Head Judge',
      'Alex Rodriguez - Technical Lead',
      'Priya Patel - Event Coordinator'
    ],
    requirements: [
      'Laptop with preferred IDE installed',
      'Basic knowledge of algorithms and data structures',
      'Familiarity with at least one programming language',
      'Valid college ID required'
    ],
    schedule: [
      { time: '9:30 AM', activity: 'Registration and Setup' },
      { time: '10:00 AM', activity: 'Competition Begins' },
      { time: '11:00 AM', activity: 'Mid-competition Break' },
      { time: '12:00 PM', activity: 'Competition Ends' },
      { time: '12:30 PM', activity: 'Results Announcement' }
    ]
  },
  '2': {
    id: '2',
    name: 'AI Innovation Showcase',
    description: 'Premier presentation of cutting-edge AI projects with industry expert judging.',
    longDescription: `The AI Innovation Showcase is the flagship event that brings together the brightest minds in artificial 
    intelligence and machine learning. Teams will present their original AI projects to a panel of industry experts, 
    showcasing innovative solutions to real-world problems.
    
    This event emphasizes both technical excellence and practical application. Projects must demonstrate working prototypes 
    and clear business or social impact. The judging criteria include innovation, technical complexity, real-world relevance, 
    and presentation quality.`,
    time: 'Day 2, 2:00 PM - 5:00 PM',
    location: 'Innovation Hub',
    participants: 'Teams of 3-5 (20 teams max)',
    prize: '₹50,000',
    rules: [
      'Original AI/ML project required - no plagiarism',
      '15-minute presentation followed by 5-minute Q&A',
      'Working prototype must be demonstrated',
      'Code review by technical experts',
      'Project documentation must be submitted',
      'Team members must be present for presentation',
      'No pre-built solutions or templates allowed',
      'Judges decision is final'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800',
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800'
    ],
    organizers: [
      'Dr. Michael Chang - AI Research Director',
      'Dr. Emily Watson - Machine Learning Expert',
      'Rajesh Kumar - Industry Partner'
    ],
    requirements: [
      'Team of 3-5 members',
      'Original AI/ML project',
      'Working prototype',
      'Project documentation',
      'Presentation slides'
    ],
    schedule: [
      { time: '1:30 PM', activity: 'Setup and Testing' },
      { time: '2:00 PM', activity: 'Opening Ceremony' },
      { time: '2:15 PM', activity: 'Presentations Begin' },
      { time: '4:30 PM', activity: 'Judging Deliberation' },
      { time: '5:00 PM', activity: 'Awards Ceremony' }
    ]
  }
};

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  
  const event = eventDetails[id || '1'];

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
          <Link 
            to="/events" 
            className="inline-flex items-center text-neon-cyan hover:text-neon-magenta transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>

          {/* Event Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl mb-4 pixel-glow-magenta">
              {event.name}
            </h1>
            <p className="text-ghost-grey text-lg max-w-3xl">
              {event.description}
            </p>
          </div>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="pixel-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-neon-cyan" />
                  <div>
                    <p className="text-ghost-grey text-sm">Time</p>
                    <p className="text-pixel-white font-semibold">{event.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pixel-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-neon-cyan" />
                  <div>
                    <p className="text-ghost-grey text-sm">Location</p>
                    <p className="text-pixel-white font-semibold">{event.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pixel-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-neon-cyan" />
                  <div>
                    <p className="text-ghost-grey text-sm">Participants</p>
                    <p className="text-pixel-white font-semibold">{event.participants}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pixel-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-pacman-yellow" />
                  <div>
                    <p className="text-ghost-grey text-sm">Prize Pool</p>
                    <p className="text-pacman-yellow font-semibold">{event.prize}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-void-black border border-ghost-grey">
              <TabsTrigger value="details" className="data-[state=active]:bg-neon-magenta data-[state=active]:text-void-black">
                <Info className="w-4 h-4 mr-2" />
                Details
              </TabsTrigger>
              <TabsTrigger value="gallery" className="data-[state=active]:bg-neon-magenta data-[state=active]:text-void-black">
                <Image className="w-4 h-4 mr-2" />
                Gallery
              </TabsTrigger>
              <TabsTrigger value="rules" className="data-[state=active]:bg-neon-magenta data-[state=active]:text-void-black">
                <FileText className="w-4 h-4 mr-2" />
                Rules
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-neon-magenta data-[state=active]:text-void-black">
                <Clock className="w-4 h-4 mr-2" />
                Schedule
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-8">
              <Card className="pixel-card">
                <CardHeader>
                  <CardTitle className="text-neon-cyan">About the Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ghost-grey leading-relaxed whitespace-pre-line">
                    {event.longDescription}
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="pixel-card">
                  <CardHeader>
                    <CardTitle className="text-neon-cyan">Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {event.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-neon-magenta mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-ghost-grey">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="pixel-card">
                  <CardHeader>
                    <CardTitle className="text-neon-cyan">Organizers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {event.organizers.map((organizer, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-neon-magenta mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-ghost-grey">{organizer}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-video overflow-hidden pixel-card cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${event.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-8 h-8 text-pixel-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rules" className="space-y-6">
              <Card className="pixel-card">
                <CardHeader>
                  <CardTitle className="text-neon-cyan">Event Rules</CardTitle>
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

              <div className="flex justify-center">
                <Button className="pixel-button-primary">
                  <Download className="w-4 h-4 mr-2" />
                  Download Rulebook (PDF)
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <Card className="pixel-card">
                <CardHeader>
                  <CardTitle className="text-neon-cyan">Event Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.schedule.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-ghost-grey rounded">
                        <div className="w-20 text-neon-magenta font-bold text-center">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="text-pixel-white font-semibold">{item.activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Registration Section */}
          <div className="mt-16 text-center">
            <Card className="pixel-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl text-neon-magenta mb-4">Ready to Participate?</h3>
                <p className="text-ghost-grey mb-6">
                  Join the competition and showcase your skills in this exciting event!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="pixel-button-primary"
                    onClick={() => setIsRegistrationOpen(true)}
                  >
                    Register for Event
                  </Button>
                  <Button variant="outline" className="border-ghost-grey text-ghost-grey hover:border-neon-cyan hover:text-neon-cyan">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Share Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="bg-void-black border-2 border-ghost-grey max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-neon-magenta">{event.name} - Gallery</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative aspect-video">
              <img 
                src={selectedImage} 
                alt="Event Gallery"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Registration Modal */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="bg-void-black border-2 border-ghost-grey max-w-md">
          <DialogHeader>
            <DialogTitle className="text-neon-magenta">Register for {event.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-ghost-grey">
              Registration for this event will be available soon. Please check back later or contact the organizers for more information.
            </p>
            <div className="flex space-x-4">
              <Button 
                className="flex-1 pixel-button-primary"
                onClick={() => setIsRegistrationOpen(false)}
              >
                Close
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-ghost-grey text-ghost-grey hover:border-neon-cyan hover:text-neon-cyan"
                onClick={() => window.location.href = '/register'}
              >
                General Registration
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PixelFooter />
    </>
  );
};

export default EventDetails;
