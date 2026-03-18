import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { weddingData } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function DetailsSection() {
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
          Die Details
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* When */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-sage/10 p-4 rounded-full">
                <Calendar className="w-8 h-8 text-sage" />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-charcoal mb-3">Wann</h3>
            <p className="text-lg text-charcoal-light mb-2">
              {weddingData.date.full}
            </p>
            <p className="text-sage-dark font-medium">
              {weddingData.date.time}
            </p>
          </motion.div>

          {/* Where */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-sage/10 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-sage" />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-charcoal mb-3">Wo</h3>
            <p className="text-lg text-charcoal mb-1">
              {weddingData.location.name}
            </p>
            <p className="text-charcoal-light mb-4">
              {weddingData.location.address}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
