import { motion } from 'framer-motion';
import { Sparkles, Coffee, UtensilsCrossed, Music } from 'lucide-react';
import { weddingData } from '../data';

const iconMap = {
  0: Sparkles,
  1: Coffee,
  2: UtensilsCrossed,
  3: Music,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white via-cream/30 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-center text-charcoal mb-16"
        >
          Der Ablauf
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-sage/30 transform md:-translate-x-1/2" />

          {weddingData.timeline.map((event, index) => {
            const Icon = iconMap[index] || Sparkles;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  } pl-16 md:pl-0`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-sage-dark font-semibold mb-2">
                      {event.time}
                    </p>
                    <h3 className="text-2xl font-serif text-charcoal mb-2">
                      {event.title}
                    </h3>
                    <p className="text-charcoal-light">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bg-sage p-3 rounded-full shadow-lg z-10">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
