import React from 'react';
import NeleImg from '../assets/nele.svg';
import FabianImg from '../assets/fabian.svg';

export default function TrauzeugenSection() {
  return (
    <section className="py-16 bg-cream/50"> 
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4 text-center">Unsere Trauzeugen</h2>

        <p className="max-w-3xl mx-auto text-center text-charcoal-light mb-8">
          Nele und Fabian sind unsere Trauzeugen. Sie kümmern sich um den Ablauf und die Planung des Programms.
          Wenn ihr Ideen oder Vorschläge für Programmpunkte habt, sprecht euch bitte mit ihnen ab.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm">
            <img src={NeleImg} alt="Nele" className="w-28 h-28 rounded-full object-cover flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-charcoal">Nele</h3>
              <p className="text-sm text-charcoal-light mt-2">Unsere herzliche Organisatorin. Nele unterstützt bei Ablaufplanung und Koordination am Tag selbst.</p>
            </div>
          </div>

          <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm">
            <img src={FabianImg} alt="Fabian" className="w-28 h-28 rounded-full object-cover flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-charcoal">Fabian</h3>
              <p className="text-sm text-charcoal-light mt-2">Unser Ruhepol und Ansprechpartner für technische/organisatorische Fragen während des Events.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
