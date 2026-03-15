import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';
import { weddingData } from '../data';

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === weddingData.password) {
      // Store in sessionStorage so it persists on refresh
      sessionStorage.setItem('wedding_authenticated', 'true');
      onUnlock();
    } else {
      setError('Das Passwort ist leider nicht korrekt. Versuch es noch einmal.');
      setPassword('');
      
      // Clear error after 3 seconds
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-sage-light/20 to-cream px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Heart className="w-16 h-16 text-sage mx-auto" fill="currentColor" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-2">
            {weddingData.couple.firstName} & {weddingData.couple.secondName}
          </h1>
          <p className="text-sage-dark text-lg">Unsere Hochzeit</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center justify-center mb-6">
            <Lock className="w-5 h-5 text-sage mr-2" />
            <p className="text-charcoal-light text-sm">
              Diese Seite ist geschützt
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Passwort eingeben
              </label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-sage-light rounded-lg focus:outline-none focus:border-sage transition-colors text-charcoal"
                placeholder="Passwort"
                autoFocus
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full bg-sage hover:bg-sage-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Eintreten
            </button>
          </form>

          <p className="text-xs text-charcoal-light text-center mt-6">
            Hinweis: Das Passwort findest du in deiner Einladung
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
