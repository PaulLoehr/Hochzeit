import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingData } from '../data';
import withBase from '../utils/asset';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image (from public/) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${withBase(weddingData.heroImage)})` }}
      />

      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-light/40 via-cream/30 to-sage/30" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <Heart 
              className="w-12 h-12 md:w-16 md:h-16 text-sage mx-auto" 
              fill="currentColor" 
            />
          </motion.div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-charcoal mb-6 tracking-tight">
            {weddingData.couple.firstName}
            <span className="inline-block mx-4 md:mx-8 text-sage">&</span>
            {weddingData.couple.secondName}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl text-charcoal-light font-light">
              {weddingData.date.full}
            </p>
            <p className="text-lg md:text-xl text-sage-dark">
              {weddingData.location.name}
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sage rounded-full flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-sage rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
