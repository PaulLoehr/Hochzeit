import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';
import { weddingData } from '../data';
import withBase from '../utils/asset';

export default function DresscodeSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-center text-charcoal mb-6"
        >
          {weddingData.dresscode.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-center text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {weddingData.dresscode.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <figure className="relative bg-white rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white">
            <img
              src={withBase(weddingData.dresscode.paletteImage)}
              alt="Dresscode Farbpalette in Pastelltönen mit Navy-Blau"
              className="w-full h-64 md:h-72 object-cover object-center"
              loading="lazy"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}