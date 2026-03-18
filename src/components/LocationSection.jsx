import { motion } from 'framer-motion';
import { weddingData } from '../data';

export default function LocationSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-sage-light/20">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-sage/20"
        >
          <iframe
            src={weddingData.location.googleMapsEmbedUrl}
            title="Google Maps - Castillo del Mar"
            className="w-full h-[320px] md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-6"
        >
          {weddingData.location.images.map((image) => (
            <div key={image.src} className="rounded-2xl overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
