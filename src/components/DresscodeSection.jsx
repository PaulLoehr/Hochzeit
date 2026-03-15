import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';
import { weddingData } from '../data';

export default function DresscodeSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-cream/40 to-white">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center bg-sage/10 text-sage-dark rounded-full px-4 py-2 mb-5">
            <Shirt className="w-4 h-4 mr-2" />
            Schick · Pastell
          </div>
          <p className="text-lg text-charcoal-light leading-relaxed">
            {weddingData.dresscode.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 mt-14"
        >
          <figure className="bg-white rounded-2xl overflow-hidden border border-sage/20">
            <img
              src={weddingData.dresscode.paletteImage}
              alt="Dresscode Farbpalette in Pastelltönen mit Navi-Blau"
              className="w-full h-72 md:h-80 object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-4 text-sm text-charcoal-light">
              Farbpalette: Rosé, Champagner, Salbei und Lavendel
            </figcaption>
          </figure>

          <figure className="bg-white rounded-2xl overflow-hidden border border-sage/20">
            <img
              src={weddingData.dresscode.moodboardImage}
              alt="Dresscode Moodboard mit schickem, elegantem Stil"
              className="w-full h-72 md:h-80 object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-4 text-sm text-charcoal-light">
              Moodboard: Elegant, klassisch und modern in softer Pastellästhetik
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}