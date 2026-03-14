'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPrompt({ onDone }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          background: 'rgba(0, 0, 0, 0.50)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="glass-strong"
          style={{
            maxWidth: 360, width: '100%',
            padding: '40px 32px', textAlign: 'center',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 18,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [-5, 5, -5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ fontSize: '3.5rem' }}
          >🔊</motion.div>

          <h2 style={{
            fontFamily: 'Pacifico, cursive',
            fontSize: 'clamp(1.4rem,6vw,1.9rem)',
            color: 'white', lineHeight: 1.3,
            textShadow: '0 0 24px rgba(167,139,250,0.7)',
          }}>Before You Begin 🎶</h2>

          <div style={{ width: '55%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), rgba(6,182,212,0.6), transparent)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            {[
              { emoji: '🎵', text: 'Enhanced with music.' },
              { emoji: '📱', text: 'Increase your volume to max' },
              { emoji: '🎧', text: 'The Button is located in the top right corner' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 12, padding: '10px 14px',
              }}>
                <span style={{ fontSize: '1.4rem' }}>{item.emoji}</span>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.9rem' }}>{item.text}</p>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}
            onClick={() => {
              window.dispatchEvent(new Event('birthday-music-play'))
              onDone(true)
            }}
            style={{
              marginTop: 6, width: '100%', padding: '14px 0',
              background: 'linear-gradient(135deg, rgba(139,92,246,0.75), rgba(6,182,212,0.75))',
              backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 50, color: 'white', fontFamily: 'Quicksand, sans-serif',
              fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 6px 28px rgba(139,92,246,0.4)',
            }}
          >Volume Increased? Let's Start! 🚀</motion.button>

          <button onClick={() => onDone(false)} style={{
            background: 'none', border: 'none',
            color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem',
            cursor: 'pointer', textDecoration: 'underline',
            fontFamily: 'Quicksand, sans-serif',
          }}>Skip</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}