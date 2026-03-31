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
          Bitte teilt uns mit, ob Ihr an unserer Hochzeit teilnehmen könnt.<br /><br />
          Füllt das Formular jeweils <span className="font-bold">einzeln für jede Person</span> aus, damit wir die Gästeliste korrekt führen können.
          <br /><br />
          Wir freuen uns auf Eure Rückmeldung bis zum <span className="font-bold">31. Juli 2026</span>!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Google Form Embed */}
          <div className="w-full h-[1180px] md:h-[950px]">
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

          
        </motion.div>

        {/* end RSVP content */}
      </div>
    </section>
  );
}
