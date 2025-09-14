import { useEffect, useState } from 'react';
import { PixelHeader } from '@/components/PixelHeader';
import { PixelFooter } from '@/components/PixelFooter';
import { Card, CardContent } from '@/components/ui/card';

const GALLERY_BASE_PATH = '/gallery';

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all images from the gallery folder
    const loadImages = async () => {
      setLoading(true);
      try {
        // Get all images using Vite's glob import
        const galleryImages = import.meta.glob('/public/gallery/*.jpeg');
        const imagesList = Object.keys(galleryImages).map(path => 
          path.replace('/public', '')
        );
        setImages(imagesList);
      } catch (error) {
        console.error('Failed to load gallery images:', error);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  return (
    <>
      <PixelHeader />
      <main className="pt-24 pb-12 min-h-screen bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl md:text-6xl pixel-glow-magenta">Gallery</h1>
            <p className="text-ghost-grey max-w-2xl mx-auto">
              Past years in pixels. Images are served from public/gallery.
            </p>
          </div>

          {loading ? (
            <div className="text-center text-ghost-grey">Loading photos...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((imagePath, index) => (
                <Card 
                  key={imagePath} 
                  className="pixel-card overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedImage(imagePath)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <img
                        src={imagePath}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-void-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-lg">Click to expand</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Lightbox */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-void-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-6xl w-full max-h-[90vh]">
                <img
                  src={selectedImage}
                  alt="Selected gallery image"
                  className="w-full h-full object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white text-3xl hover:text-neon-magenta transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <PixelFooter />
    </>
  );
};

export default Gallery;


