import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';
import { weddingData } from '../data';
import withBase from '../utils/asset';

export default function PhotosSection() {
  const { photos } = weddingData;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!photos?.previewPhotos?.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.previewPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos]);

  // Fallback if data is missing
  if (!photos) return null;

  return (
    <section className="py-20 md:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
              {photos.title}
            </h2>
             {/* Icon moved under title */}
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-sage/10 text-sage">
              <Camera className="w-6 h-6" />
            </div>
          </div>
          
          <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto mb-10">
            {photos.description}
          </p>

          <motion.a
            href={photos.albumUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors shadow-lg hover:shadow-xl mb-4"
          >
            <span>Fotos hochladen & ansehen</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <p className="text-sm text-charcoal-light/60 mb-16">
            Ihr werdet zu Google Fotos weitergeleitet
          </p>


          {/* Animated Collage / Slideshow */}
          {photos.previewPhotos?.length > 0 && (
            <div className="relative w-full max-w-2xl mx-auto aspect-[3/2] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 ring-8 ring-white">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={currentIndex}
                  src={withBase(photos.previewPhotos[currentIndex])}
                  alt="Hochzeitserinnerung"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Optional: Navigation dots or overlay */}
               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {photos.previewPhotos.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
