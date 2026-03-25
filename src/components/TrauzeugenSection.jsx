import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { weddingData } from '../data';
import { withBase } from '../utils/asset';

export default function TrauzeugenSection() {
  const { trauzeugen } = weddingData;

  return (
    <section className="py-20 md:py-32 px-4 bg-sage-light/20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4 text-center">Unsere Trauzeugen</h2>

        <p className="max-w-3xl mx-auto text-center text-charcoal-light mb-8">
          {trauzeugen.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trauzeugen.people.map((person) => (
            <div key={person.name} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm">
              <img src={withBase(person.image)} alt={person.alt} className="w-28 h-28 rounded-full object-cover flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-charcoal">{person.name}</h3>
                <p className="text-sm text-charcoal-light mt-2">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.a
            href={`mailto:${trauzeugen.kontakt}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            <span>E-Mail an die Trauzeugen</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
