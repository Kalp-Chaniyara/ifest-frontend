import { MapPin, Mail, Phone } from 'lucide-react';

export const PixelFooter = () => {
  return (
    <footer className="bg-void-black border-t border-ghost-grey mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address Column */}
          <div className="space-y-4">
            <h3 className="text-neon-cyan mb-4">Location</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-pacman-yellow mt-1 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-pixel-white">
                  Dhirubhai Ambani University (DAU)<br />
                  Near Indroda Circle<br />
                  Gandhinagar - 382007, Gujarat, India
                </p>
                <a 
                  href="https://www.bing.com/ck/a?!&&p=458895116b8005bfd751d7c5032b4b13b7e5ef650eaf11c883a39a629d77d910JmltdHM9MTc1NzcyMTYwMA&ptn=3&ver=2&hsh=4&fclid=1dad8ac7-eb0d-6cda-2413-99baeabf6d4e&u=a1L21hcHM_Jm1lcGk9MTA5fkRpcmVjdGlvbnN-VG9wT2ZQYWdlfkRpcmVjdGlvbl9CdXR0b24mdHk9MCZydHA9cG9zLjIzLjE4ODkwNTcxNTk0MjM4M183Mi42Mjg0NzEzNzQ1MTE3Ml9fRGhpcnViaGFpJTIwQW1iYW5pJTIwSW5zdGl0dXRlJTIwb2YlMjBJbmZvcm1hdGlvbiUyMCUyNiUyMENvbW11bmljYXRpb24lMjBUZWNobm9sb2d5X19lX34mbW9kZT1kJnY9MiZzVj0x" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-neon-cyan transition-colors inline-block mt-2"
                >
                  View on Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4">
            <h3 className="text-neon-cyan mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.instagram.com/i.fest?igsh=MTU4eHl2M2F3dXlwcQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-neon-cyan transition-colors flex items-center space-x-2"
              >
                <span className="w-4 h-4 bg-secondary"></span>
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/ieeesbdau/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-neon-cyan transition-colors flex items-center space-x-2"
              >
                <span className="w-4 h-4 bg-secondary"></span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-neon-cyan mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pacman-yellow" />
                <a 
                  href="mailto:ifest@dau.ac.in" 
                  className="text-secondary hover:text-neon-cyan transition-colors"
                >
                  ifest@dau.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pacman-yellow" />
                <span className="text-secondary">Harshil: +91 70416 12868</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pacman-yellow" />
                <span className="text-secondary">Poorva: +91 78029 21067</span>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <a 
                  href="/privacy-policy" 
                  className="text-ghost-grey hover:text-secondary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms-and-conditions" 
                  className="text-ghost-grey hover:text-secondary transition-colors text-sm"
                >
                  Terms and Conditions
                </a>
                <a 
                  href="/refund-policy" 
                  className="text-ghost-grey hover:text-secondary transition-colors text-sm"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ghost-grey mt-8 pt-6 text-center">
          <p className="text-ghost-grey text-sm">
            © 2025 i'Fest'25. Embracing the Pixel Paradox.
          </p>
        </div>
      </div>
    </footer>
  );
};