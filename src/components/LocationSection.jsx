import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data';
import withBase from '../utils/asset';

export default function LocationSection() {
  const { location } = weddingData;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!location?.images?.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % location.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <section className="py-20 md:py-32 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-center text-charcoal mb-16"
        >
          Die Location
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-2xl mx-auto aspect-[3/2] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 ring-8 ring-white"
          >
            <iframe
              src={weddingData.location.googleMapsEmbedUrl}
              title="Google Maps - Castillo del Mar"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        {location.images?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-2xl mx-auto aspect-[3/2] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 ring-8 ring-white">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={currentIndex}
                  src={withBase(location.images[currentIndex].src)}
                  alt={location.images[currentIndex].alt}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {location.images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        </div>
      </div>
    </section>
  );
}
