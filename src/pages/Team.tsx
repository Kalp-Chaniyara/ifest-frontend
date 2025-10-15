import { useState } from 'react';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Users,
  Crown,
  Zap,
  Code,
  Palette,
  Megaphone
} from 'lucide-react';
import { teamData, TeamMember, TeamSection } from '@/data/teamData';

// TeamMember interface is now imported from teamData.ts

// Team data is now imported from teamData.ts

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeSection, setActiveSection] = useState<string>('all');

  const resolvePhotoUrl = (url?: string) => {
    if (!url) return undefined;
    const cleaned = url.trim();
    // Handle Google Drive share links by converting them to direct-view URLs
    // Examples:
    // https://drive.google.com/file/d/FILE_ID/view?usp=sharing -> https://drive.google.com/uc?export=view&id=FILE_ID
    // https://drive.google.com/open?id=FILE_ID -> https://drive.google.com/uc?export=view&id=FILE_ID
    // https://drive.google.com/uc?id=FILE_ID&export=download -> keep as is
    try {
      const driveFileMatch = cleaned.match(/https?:\/\/drive\.google\.com\/file\/d\/([^/]+)\//);
      const openIdMatch = cleaned.match(/https?:\/\/drive\.google\.com\/(?:open|uc)\/?\?[^#]*[?&]id=([^&#]+)/);
      const id = driveFileMatch?.[1] || openIdMatch?.[1];
      if (id) {
        return `https://drive.google.com/uc?export=view&id=${id}`;
      }
      return cleaned;
    } catch {
      return cleaned;
    }
  };

  const extractDriveId = (url?: string) => {
    if (!url) return undefined;
    const cleaned = url.trim();
    const driveFileMatch = cleaned.match(/https?:\/\/drive\.google\.com\/file\/d\/([^/]+)\//);
    const openIdMatch = cleaned.match(/https?:\/\/drive\.google\.com\/(?:open|uc|thumbnail)\/?\?[^#]*[?&]id=([^&#]+)/);
    const directMatch = cleaned.match(/https?:\/\/drive\.googleusercontent\.com\/download\/[\w-]+/);
    if (driveFileMatch?.[1]) return driveFileMatch[1];
    if (openIdMatch?.[1]) return openIdMatch[1];
    if (directMatch) return undefined;
    return undefined;
  };

  const getSectionIcon = (sectionTitle: string) => {
    switch (sectionTitle.toLowerCase()) {
      case 'mentors':
        return <Crown className="w-4 h-4" />;
      case 'sponsorship':
        return <Zap className="w-4 h-4" />;
      case 'event management':
        return <Users className="w-4 h-4" />;
      case 'pr team':
        return <Megaphone className="w-4 h-4" />;
      case 'website team':
        return <Code className="w-4 h-4" />;
      case 'design and social media team':
        return <Palette className="w-4 h-4" />;
      case 'openbox and content team':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const getTotalMembers = () => {
    return teamData.reduce((total, section) => total + section.members.length, 0);
  };

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen bg-transparent">
        <div className="container mx-auto px-6">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 text-4xl md:text-6xl pixel-glow-magenta">
              Meet the Team
            </h1>
            <p className="text-ghost-grey text-xl max-w-2xl mx-auto">
              The brilliant minds behind i'Fest'25. Each pixel of this experience has been crafted with passion and innovation.
            </p>
            <div className="mt-6 text-neon-cyan text-xl font-bold">
              Total Team Members: {getTotalMembers()}
            </div>
          </div>

          {/* Section Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveSection('all')}
              className={`
                flex items-center space-x-2 px-6 py-3 rounded-none border-2 transition-all duration-300
                ${activeSection === 'all' 
                  ? 'border-neon-magenta bg-neon-magenta text-void-black' 
                  : 'border-ghost-grey text-ghost-grey hover:border-neon-cyan hover:text-neon-cyan'
                }
              `}
            >
              <Users className="w-4 h-4" />
              <span>All Teams</span>
            </button>
            {teamData.map((section) => (
              <button
                key={section.title}
                onClick={() => setActiveSection(section.title)}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-none border-2 transition-all duration-300
                  ${activeSection === section.title 
                    ? 'border-neon-magenta bg-neon-magenta text-void-black' 
                    : 'border-ghost-grey text-ghost-grey hover:border-neon-cyan hover:text-neon-cyan'
                  }
                `}
              >
                {getSectionIcon(section.title)}
                <span>{section.title}</span>
              </button>
            ))}
          </div>

          {/* Team Sections */}
          {activeSection === 'all' ? (
            // Show all sections
            teamData.map((section) => (
              <div key={section.title} className="mb-16">
                <div className="flex items-center mb-8">
                  {getSectionIcon(section.title)}
                  <h2 className="text-2xl font-bold text-neon-cyan ml-3">{section.title}</h2>
                  <span className="ml-4 text-ghost-grey">({section.members.length} members)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.members.map((member, index) => (
                    <Card 
                      key={`${section.title}-${index}`} 
                      className="pixel-card group cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-black"
                      onClick={() => setSelectedMember(member)}
                    >
                      <CardContent className="p-6">
                        {/* Member Avatar */}
                        <div className="relative mb-6">
                          <div className="aspect-square overflow-hidden border-2 border-ghost-grey group-hover:border-neon-magenta transition-colors duration-300 bg-void-black flex items-center justify-center relative">
                            <div className="text-4xl font-bold text-neon-cyan">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            {member.photo && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={resolvePhotoUrl(member.photo)}
                                alt={`${member.name} photo`}
                                className="absolute inset-0 w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  const target = e.currentTarget as HTMLImageElement;
                                  const triedFallback = target.getAttribute('data-fallback-tried') === 'true';
                                  const id = extractDriveId(member.photo);
                                  if (!triedFallback && id) {
                                    target.setAttribute('data-fallback-tried', 'true');
                                    target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
                                  } else {
                                    target.style.display = 'none';
                                  }
                                }}
                              />
                            )}
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="text-center">
                          <h3 className="text-pixel-white font-bold text-lg mb-1 group-hover:text-neon-magenta transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-neon-cyan font-semibold">{member.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Show specific section
            (() => {
              const section = teamData.find(s => s.title === activeSection);
              if (!section) return null;
              
              return (
                <div className="mb-16">
                  <div className="flex items-center mb-8">
                    {getSectionIcon(section.title)}
                    <h2 className="text-2xl font-bold text-neon-cyan ml-3">{section.title}</h2>
                    <span className="ml-4 text-ghost-grey">({section.members.length} members)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {section.members.map((member, index) => (
                      <Card 
                        key={`${section.title}-${index}`} 
                        className="pixel-card group cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-black"
                        onClick={() => setSelectedMember(member)}
                      >
                        <CardContent className="p-6">
                          {/* Member Avatar */}
                          <div className="relative mb-6">
                            <div className="aspect-square overflow-hidden border-2 border-ghost-grey group-hover:border-neon-magenta transition-colors duration-300 bg-void-black flex items-center justify-center relative">
                              <div className="text-4xl font-bold text-neon-cyan">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              {member.photo && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={resolvePhotoUrl(member.photo)}
                                  alt={`${member.name} photo`}
                                  className="absolute inset-0 w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                  onError={(e) => {
                                    const target = e.currentTarget as HTMLImageElement;
                                    const triedFallback = target.getAttribute('data-fallback-tried') === 'true';
                                    const id = extractDriveId(member.photo);
                                    if (!triedFallback && id) {
                                      target.setAttribute('data-fallback-tried', 'true');
                                      target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
                                    } else {
                                      target.style.display = 'none';
                                    }
                                  }}
                                />
                              )}
                            </div>
                          </div>

                          {/* Member Info */}
                          <div className="text-center">
                            <h3 className="text-pixel-white font-bold text-lg mb-1 group-hover:text-neon-magenta transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-neon-cyan font-semibold">{member.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })()
          )}

          {/* Team Stats */}
          <div className="mt-20">
            <Card className="pixel-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-neon-magenta mb-2">{getTotalMembers()}</div>
                    <div className="text-ghost-grey">Team Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-neon-cyan mb-2">{teamData.length}</div>
                    <div className="text-ghost-grey">Teams</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pacman-yellow mb-2">7</div>
                    <div className="text-ghost-grey">Specializations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-neon-magenta mb-2">1000+</div>
                    <div className="text-ghost-grey">Hours of Work</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Member Details Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="bg-void-black border-2 border-ghost-grey max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-neon-magenta text-2xl">
              {selectedMember?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedMember && (
            <div className="space-y-6">
              {/* Member Avatar and Basic Info */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 flex-shrink-0">
                  <div className="w-full h-full border-2 border-ghost-grey bg-void-black flex items-center justify-center overflow-hidden relative">
                    <div className="text-4xl font-bold text-neon-cyan">
                      {selectedMember.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {selectedMember.photo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={resolvePhotoUrl(selectedMember.photo)}
                        alt={`${selectedMember.name} photo`}
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          const triedFallback = target.getAttribute('data-fallback-tried') === 'true';
                          const id = extractDriveId(selectedMember.photo);
                          if (!triedFallback && id) {
                            target.setAttribute('data-fallback-tried', 'true');
                            target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
                          } else {
                            target.style.display = 'none';
                          }
                        }}
                      />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-pixel-white font-bold text-xl mb-2">{selectedMember.name}</h3>
                  <p className="text-neon-cyan font-semibold mb-1">{selectedMember.role}</p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4 mt-4">
                    {selectedMember.linkedin && (
                      <a 
                        href={selectedMember.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-ghost-grey hover:text-neon-cyan transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember.github && (
                      <a 
                        href={selectedMember.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-ghost-grey hover:text-neon-magenta transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember.email && (
                      <a 
                        href={`mailto:${selectedMember.email}`}
                        className="text-ghost-grey hover:text-pacman-yellow transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Team Section Info */}
              <div>
                <h4 className="text-neon-cyan font-semibold mb-2">Team</h4>
                <p className="text-ghost-grey">
                  {teamData.find(section => 
                    section.members.some(member => member.name === selectedMember.name)
                  )?.title || 'Team Member'}
                </p>
              </div>

              {/* Photo Placeholder Notice */}
              {!selectedMember.photo && (
                <div className="bg-void-black/50 border border-ghost-grey p-4 rounded">
                  <p className="text-ghost-grey text-sm">
                    📸 Photo will be added soon. Contact the team member for more information.
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <PixelFooter />
    </>
  );
};

export default Team;
