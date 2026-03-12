'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const REASONS = [
  { emoji: '😂', text: 'Your brain lags more than my PC.' },
  { emoji: '🤝', text: 'You are always there, no matter what' },
  { emoji: '💡', text: 'Your advice is incredible. I always do the exact opposite and it works out perfectly.' },
  { emoji: '🌙', text: 'Our late night talks are my favourite thing' },
  { emoji: '🛡️', text: "It's so sweet how aggressively you defend me, even when you clearly have no idea what's going on.'" },
  { emoji: '🌻', text: 'You truly bring out the best in me, because dealing with you requires Olympic-level patience.' },
]

export default function ReasonsScreen({ onNext }) {
  const [revealed, setRevealed] = useState(0)

  const revealNext = () => {
    if (revealed < REASONS.length) setRevealed(r => r + 1)
  }

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-start gap-3 px-4 screen-scroll"
      style={{ zIndex: 10, paddingTop: 'clamp(40px, 8vh, 80px)', paddingBottom: 24, willChange: 'transform' }}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.45 }}
    >
      <motion.h2 initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: 'Dancing Script, cursive', fontSize: 'clamp(1.4rem,5.5vw,2.6rem)', color: 'white',
          textShadow: '0 2px 20px rgba(139,92,246,0.7)', textAlign: 'center', flexShrink: 0, willChange: 'transform'
        }}>
        {REASONS.length} Reasons You're My Favorite Headache 🤕
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 400, flexShrink: 0 }}>
        <AnimatePresence>
          {REASONS.slice(0, revealed).map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="glass"
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 'clamp(10px, 2vw, 13px) clamp(12px, 3vw, 18px)', willChange: 'transform' }}>
              <span style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', minWidth: 28 }}>{r.emoji}</span>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(0.78rem, 2.8vw, 0.9rem)', fontWeight: 600, lineHeight: 1.4 }}>{r.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {revealed < REASONS.length ? (
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} onClick={revealNext}
          style={{
            padding: '11px 28px', background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(6,182,212,0.6))',
            backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.28)', borderRadius: 50,
            color: 'white', fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)', fontWeight: 700, cursor: 'pointer',
            flexShrink: 0, willChange: 'transform'
          }}>
          {revealed === 0 ? '✨ Reveal Reasons' : `Next Reason (${revealed}/${REASONS.length})`}
        </motion.button>
      ) : (
        <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} onClick={onNext}
          style={{
            padding: '12px 32px', background: 'linear-gradient(135deg, rgba(139,92,246,0.65), rgba(6,182,212,0.65))',
            backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 50,
            color: 'white', fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(0.9rem, 3vw, 1rem)', fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(139,92,246,0.35)', flexShrink: 0, willChange: 'transform'
          }}>
          Let's Move Ahead 😎
        </motion.button>
      )}
    </motion.div>
  )
}
