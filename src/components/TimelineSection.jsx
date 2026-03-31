import { motion } from 'framer-motion';
import {
  Sparkles,
  DoorOpen,
  Heart,
  Wine,
  Cake,
  Mic,
  UtensilsCrossed,
  PartyPopper,
  MoonStar,
} from 'lucide-react';
import { weddingData } from '../data';

const timelineIconRules = [
  {
    pattern: /ankunft|empfang|willkommen|aperitif/i,
    icon: DoorOpen,
  },
  {
    pattern: /trauung|ja-wort|zeremonie/i,
    icon: Heart,
  },
  {
    pattern: /sektempfang|sekt|ansto/i,
    icon: Wine,
  },
  {
    pattern: /torte|kuchen|dessert/i,
    icon: Cake,
  },
  {
    pattern: /ansprache|rede|vorstell/i,
    icon: Mic,
  },
  {
    pattern: /buffet|essen|speisen|dinner/i,
    icon: UtensilsCrossed,
  },
  {
    pattern: /party|hochzeitstanz|tanzen|programmpunkte/i,
    icon: PartyPopper,
  },
  {
    pattern: /ende|abschied|nachts|nacht/i,
    icon: MoonStar,
  },
];

const getTimelineIcon = (event) => {
  const text = `${event.title} ${event.description}`;
  const matchingRule = timelineIconRules.find((rule) => rule.pattern.test(text));
  return matchingRule?.icon || Sparkles;
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
    <section className="py-20 md:py-32 px-4 bg-sage-light/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-center text-charcoal mb-6"
        >
          Der Ablauf
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-center text-charcoal-light max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Unser Tag mit euch voller Liebe, Lachen und unvergesslicher Momente – hier ist der grobe Ablauf, damit ihr wisst, was euch erwartet.
        </motion.p>

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
            const Icon = getTimelineIcon(event);
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
                  className={`flex-1 md:flex-none md:w-[calc(50%-0rem)] ${
                    isEven
                      ? 'md:mr-auto md:text-right md:pr-14'
                      : 'md:ml-auto md:text-left md:pl-14'
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
