import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper, Music, Volume2, VolumeX } from 'lucide-react';

const PartyMode = () => {
  const [isActive, setIsActive] = useState(false);
  const [showAnimations, setShowAnimations] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    let timer;

    if (isActive) {
      document.body.classList.add('party-mode');
      setShowAnimations(true);

      // Stop animations after 10 seconds
      timer = setTimeout(() => {
        setShowAnimations(false);
      }, 10000);

      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
    } else {
      document.body.classList.remove('party-mode');
      setShowAnimations(false);
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        src="party-music.mp3" // Change this to "/party-music.mp3" for your local file
        preload="auto"
      />

      {/* Floating Toggle Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-colors duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white animate-pulse' 
            : 'bg-white text-gray-800 hover:bg-gray-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsActive(!isActive)}
        title={isActive ? "Party Modus aus!" : "Party Modus an!"}
      >
        {isActive ? <PartyPopper size={24} /> : <Music size={24} />}
      </motion.button>

      {/* Party Overlay Effects */}
      <AnimatePresence>
        {showAnimations && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
          >
            {/* Disco Balls / Color Overlay */}
            <div className="absolute inset-0 bg-mix-blend-overlay opacity-30 animate-disco-lights"></div>
            
            {/* Floating Emojis */}
            {Array.from({ length: 20 }).map((_, i) => (
              <FloatingEmoji key={i} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .party-mode {
          overflow-x: hidden;
        }
        
        @keyframes disco-lights {
          0% { background-color: rgba(255, 0, 0, 0.3); }
          25% { background-color: rgba(0, 255, 0, 0.3); }
          50% { background-color: rgba(0, 0, 255, 0.3); }
          75% { background-color: rgba(255, 0, 255, 0.3); }
          100% { background-color: rgba(255, 0, 0, 0.3); }
        }

        .animate-disco-lights {
          animation: disco-lights 2s infinite;
        }
      `}</style>
    </>
  );
};

const FloatingEmoji = ({ index }) => {
  const emojis = ['🎈', '🎉', '👯', '💃', '🕺', '🎵', '🎶', '🍾', '🥂', '✨'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const randomX = Math.random() * 100; // %
  const randomDelay = Math.random() * 5; // s
  const randomDuration = 3 + Math.random() * 4; // s

  return (
    <motion.div
      className="absolute text-4xl"
      initial={{ bottom: '-10vh', left: `${randomX}vw`, opacity: 0 }}
      animate={{ 
        bottom: '110vh', 
        opacity: [0, 1, 1, 0],
        rotate: [0, 180, 360],
        scale: [0.5, 1.2, 0.8] 
      }}
      transition={{ 
        duration: randomDuration, 
        repeat: Infinity, 
        delay: randomDelay,
        ease: "linear"
      }}
    >
      {randomEmoji}
    </motion.div>
  );
};

export default PartyMode;
