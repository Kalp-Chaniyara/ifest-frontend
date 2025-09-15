import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, ExternalLink } from 'lucide-react';

const GOOGLE_FORM_URL = "https://forms.gle/JXjs4cK6Qts4h2LQ7"; // Replace with your actual Google Form URL

interface MerchandiseItem {
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const merchandise: MerchandiseItem = {
  name: "i'Fest'25 Official T-Shirt",
  description: "Limited edition i'Fest'25 t-shirt featuring our exclusive pixel art design. Be part of the digital revolution with our signature merchandise that combines style with gaming aesthetics.",
  price: "₹350",
  image: "/tShirt.png", // Add your actual image path
  features: [
    "100% Premium Cotton",
    "Exclusive Pixel Art Design",
    "Limited Edition Release",
    "Official i'Fest'25 Merchandise",
    "High-Quality Print"
  ]
};

const Merchandise = () => {
  const handleOrderClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <>
      <PixelHeader />
      
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 pixel-glow-magenta">Official Merchandise</h1>
            <h2 className="mb-8 text-ghost-grey">Get Your i'Fest'25 Exclusive T-Shirt</h2>
          </div>

          {/* Single Merchandise Item */}
          <div className="max-w-4xl mx-auto">
            <Card className="pixel-card overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="relative h-[500px] w-full bg-void-black/50 p-4">
                  <img 
                    src={merchandise.image} 
                    alt={merchandise.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-neon-cyan flex items-center">
                      <ShoppingBag className="w-6 h-6 mr-3" />
                      {merchandise.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    {/* Description */}
                    <p className="text-ghost-grey text-lg">
                      {merchandise.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h3 className="text-neon-cyan mb-2">Features:</h3>
                      <div className="flex flex-wrap gap-2">
                        {merchandise.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-sm">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price and Order */}
                    <div className="flex flex-col gap-4 pt-4">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-pixel-header text-pacman-yellow">
                          {merchandise.price}
                        </span>
                        <Badge variant="outline" className="text-neon-cyan">
                          Limited Edition
                        </Badge>
                      </div>
                      <Button 
                        onClick={handleOrderClick}
                        className="pixel-button-primary w-full text-lg py-6 flex items-center justify-center gap-2"
                      >
                        Pre-order Now
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <PixelFooter />
    </>
  );
};

export default Merchandise;
