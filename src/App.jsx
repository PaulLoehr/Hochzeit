import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PasswordGate from './components/PasswordGate';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import DresscodeSection from './components/DresscodeSection';
import TimelineSection from './components/TimelineSection';
import RSVPSection from './components/RSVPSection';
import LocationSection from './components/LocationSection';
import PhotosSection from './components/PhotosSection';
import FAQSection from './components/FAQSection';
import TrauzeugenSection from './components/TrauzeugenSection';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user was already authenticated in this session
  useEffect(() => {
    const authenticated = sessionStorage.getItem('wedding_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleUnlock = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="password-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PasswordGate onUnlock={handleUnlock} />
          </motion.div>
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection />
            <DetailsSection />
            <TrauzeugenSection />
            <DresscodeSection />
            <TimelineSection />
            <RSVPSection />
            <LocationSection />
            <PhotosSection />
            <FAQSection />

            {/* Footer */}
            <footer className="bg-charcoal text-white py-8 text-center">
              <p className="text-sm">
                Kira & Paul
              </p>
              <p className="text-xs text-white/60 mt-2">
                © 2026 - Alle Rechte vorbehalten
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
