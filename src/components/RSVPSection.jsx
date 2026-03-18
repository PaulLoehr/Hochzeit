import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { weddingData } from '../data';

export default function RSVPSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-center text-charcoal mb-4"
        >
          Zusage
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-charcoal-light mb-12"
        >
          Wir freuen uns auf eure Rückmeldung
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Google Form Embed */}
          <div className="w-full h-[800px] md:h-[900px]">
            <iframe
              src={weddingData.rsvp.googleFormUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full h-full"
            >
              Lädt…
            </iframe>
          </div>

          {/* Fallback Contact */}
          <div className="p-6 bg-cream/50 border-t border-sage/20">
            <div className="flex items-center justify-center text-charcoal-light text-sm">
              <Mail className="w-4 h-4 mr-2 text-sage" />
              <span>
                Probleme mit dem Formular?{' '}
                <a
                  href={`mailto:${weddingData.rsvp.fallbackEmail}`}
                  className="text-sage hover:text-sage-dark font-medium transition-colors"
                >
                  Schreibt uns direkt
                </a>
              </span>
            </div>
          </div>
        </motion.div>

        {/* end RSVP content */}
      </div>
    </section>
  );
}
