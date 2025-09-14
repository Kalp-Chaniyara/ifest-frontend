import { useState } from 'react';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users, MapPin, Mail, Phone, UserCheck } from 'lucide-react';

const About = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '',
    checkIn: '',
    checkOut: '',
    requirements: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.phone.trim()) errors.phone = 'Contact number is required';
    if (!formData.guests.trim()) errors.guests = 'Number of guests is required';
    if (!formData.checkIn) errors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) errors.checkOut = 'Check-out date is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Form is valid - submit logic here
    console.log('Accommodation request submitted:', formData);
    alert('Accommodation request submitted successfully!');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      guests: '',
      checkIn: '',
      checkOut: '',
      requirements: ''
    });
  };

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 pixel-glow-magenta">About i'Fest'25</h1>
            <h2 className="mb-8 text-ghost-grey">Discover the Pixel Paradox Experience</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Content */}
            <div className="space-y-12">
              
              {/* About Section */}
              <section className="pixel-card p-8 hover:bg-black">
                <h3 className="text-neon-cyan mb-6 flex items-center">
                  <span className="w-6 h-6 bg-neon-cyan mr-3"></span>
                  About i'Fest
                </h3>
                <div className="space-y-4 text-pixel-white">
                  <p>
                    i’Fest’25 brings together the charm of retro digital aesthetics with the power of modern technology. This year’s theme, “Pixel Paradox”, highlights the unique blend of nostalgic 8-bit design and today’s advanced innovations.
                  </p>
                  <p>
                    Across three days, the festival will feature immersive workshops, competitive hackathons, inspiring keynotes, and creative showcases. Covering fields such as artificial intelligence, machine learning, game development, and cybersecurity, i’Fest’25 offers something for every technology enthusiast.
                  </p>
                  <p>
                    Each year, more than 10000 students, professionals, and innovators come together to learn, share ideas, and push the boundaries of what technology can achieve. It is a space where yesterday’s digital imagination meets tomorrow’s technological reality.
                  </p>

                  {/* Inspiring & Inclusive subsection */}
                  <div className="mt-8">
                    <h4 className="text-neon-magenta mb-3">Inspiring & Inclusive</h4>
                    <p className="mb-3">
                      At i.Fest, we believe in more than just events—it’s about making tech accessible and exciting for everyone. This year’s theme, Pixel Paradox, captures that spirit by blending the nostalgia of retro 8-bit design with the thrill of today’s digital innovations. Whether you’re a coder, designer, gamer, or simply curious about what AI and cybersecurity can do, this is your space.
                    </p>
                    <p className="mb-3">
                      Expect tons of opportunity: mentorship from seasoned professionals, hands-on workshops where you’ll build real stuff, competitive events to push your limits, and showcases so you can share your ideas and get feedback.
                    </p>
                    <p className="font-semibold text-ghost-grey">
                      Join a community of dreamers and doers. Share your passion. Challenge what seems “possible.” Grow together.
                    </p>
                  </div>
                </div>
              </section>

              {/* Legacy Section */}
              <section className="pixel-card p-8 hover:bg-black">
                <h3 className="text-neon-cyan mb-6 flex items-center">
                  <span className="w-6 h-6 bg-neon-cyan mr-3"></span>
                  Our Legacy
                </h3>
                <div className="space-y-4 text-pixel-white">
                  <p>
                    Since 2018, i’Fest has been recognized as the region’s leading technology festival—launching careers, encouraging innovation, and building lasting connections within the tech community.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 border border-ghost-grey">
                      <div className="text-2xl text-pacman-yellow mb-2">Since 2018</div>
                      <div className="text-sm text-ghost-grey">Established</div>
                    </div>
                    <div className="text-center p-4 border border-ghost-grey">
                      <div className="text-2xl text-pacman-yellow mb-2">10000+ </div>
                      <div className="text-sm text-ghost-grey">Annual Participants</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Video & Info */}
            <div className="space-y-8">
              
              {/* Past Year Video */}
              <section className="pixel-card p-8 hover:bg-black">
                <h3 className="text-neon-cyan mb-6">Highlights</h3>
                <div className="relative aspect-video bg-void-black border-2 border-ghost-grey">
                  <iframe
                    src="https://www.youtube.com/embed/zOu8dTKQlwU"
                    title="i'Fest'24 Recap Video"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>

              {/* College Address */}
              <section className="pixel-card p-8 hover:bg-black">
                <h3 className="text-neon-cyan mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  Event Location
                </h3>
                <div className="space-y-2 text-pixel-white">
                  <p>Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)</p>
                  <p>Near Indroda Circle</p>
                  <p>Gandhinagar - 382007, Gujarat, India</p>
                  <div className="mt-4">
                    <a href="https://www.bing.com/ck/a?!&&p=458895116b8005bfd751d7c5032b4b13b7e5ef650eaf11c883a39a629d77d910JmltdHM9MTc1NzcyMTYwMA&ptn=3&ver=2&hsh=4&fclid=1dad8ac7-eb0d-6cda-2413-99baeabf6d4e&u=a1L21hcHM_Jm1lcGk9MTA5fkRpcmVjdGlvbnN-VG9wT2ZQYWdlfkRpcmVjdGlvbl9CdXR0b24mdHk9MCZydHA9cG9zLjIzLjE4ODkwNTcxNTk0MjM4M183Mi42Mjg0NzEzNzQ1MTE3Ml9fRGhpcnViaGFpJTIwQW1iYW5pJTIwSW5zdGl0dXRlJTIwb2YlMjBJbmZvcm1hdGlvbiUyMCUyNiUyMENvbW11bmljYXRpb24lMjBUZWNobm9sb2d5X19lX34mbW9kZT1kJnY9MiZzVj0x" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="pixel-button-secondary">
                        View Campus Map
                      </Button>
                    </a>
                  </div>
                </div>
              </section>

              {/* Accommodation Form */}
              {/* <section className="pixel-card p-8 hover:bg-black">
                <h3 className="text-neon-cyan mb-6 flex items-center">
                  <UserCheck className="w-5 h-5 mr-3" />
                  Accommodation Request
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-ghost-grey">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="pixel-input mt-1"
                        placeholder="Enter full name"
                      />
                      {formErrors.fullName && (
                        <p className="text-error-red text-sm mt-1">{formErrors.fullName}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-ghost-grey">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pixel-input mt-1"
                        placeholder="Enter email"
                      />
                      {formErrors.email && (
                        <p className="text-error-red text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-ghost-grey">Contact Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pixel-input mt-1"
                        placeholder="Enter phone number"
                      />
                      {formErrors.phone && (
                        <p className="text-error-red text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="guests" className="text-ghost-grey">Number of Guests *</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="pixel-input mt-1"
                        placeholder="1"
                      />
                      {formErrors.guests && (
                        <p className="text-error-red text-sm mt-1">{formErrors.guests}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkIn" className="text-ghost-grey">Check-in Date *</Label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="pixel-input mt-1"
                      />
                      {formErrors.checkIn && (
                        <p className="text-error-red text-sm mt-1">{formErrors.checkIn}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="checkOut" className="text-ghost-grey">Check-out Date *</Label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="pixel-input mt-1"
                      />
                      {formErrors.checkOut && (
                        <p className="text-error-red text-sm mt-1">{formErrors.checkOut}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requirements" className="text-ghost-grey">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="pixel-input mt-1 min-h-[100px]"
                      placeholder="Any specific accommodation needs..."
                    />
                  </div>

                  <Button type="submit" className="pixel-button-primary w-full">
                    Submit Request
                  </Button>
                </form> */}
              {/* </section> */}
            </div>
          </div>
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default About;