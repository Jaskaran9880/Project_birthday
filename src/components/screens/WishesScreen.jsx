'use client'

import { motion } from 'framer-motion'

const WISHES = [
  { emoji: '🌟', text: 'May this year bring you everything you deserve' },
  { emoji: '😂', text: 'May you always have a reason to laugh loudly' },
  { emoji: '💪', text: 'May you crush every single goal you set' },
  { emoji: '🧘', text: 'May you find peace in every chapter ahead' },
  { emoji: '💜', text: 'May you always know how loved you truly are' },
]

export default function WishesScreen({ onNext }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-start gap-3 px-4 screen-scroll"
      style={{ zIndex: 10, paddingTop: 'clamp(36px, 7vh, 72px)', paddingBottom: 24, willChange: 'transform' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.45 }}
    >
      <motion.h2 initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: 'Dancing Script, cursive', fontSize: 'clamp(1.4rem,5.5vw,2.6rem)',
          color: 'white', textShadow: '0 2px 20px rgba(139,92,246,0.7)', textAlign: 'center', flexShrink: 0, willChange: 'transform'
        }}>
        Birthday Wishes For You 🌟
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 400, flexShrink: 0 }}>
        {WISHES.map((w, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 180 }}
            className="glass"
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 'clamp(10px, 2vw, 13px) clamp(12px, 3vw, 18px)', willChange: 'transform' }}>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', minWidth: 28, willChange: 'transform' }}>{w.emoji}</motion.span>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(0.78rem, 2.8vw, 0.9rem)', fontWeight: 600, lineHeight: 1.4 }}>{w.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Poem */}
      <motion.div className="glass-strong" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        style={{ maxWidth: 400, width: '100%', padding: 'clamp(14px, 3vw, 18px) clamp(16px, 4vw, 22px)', textAlign: 'center', flexShrink: 0, willChange: 'transform' }}>
        <p style={{
          fontFamily: 'Dancing Script, cursive', fontSize: 'clamp(0.85rem,3vw,1.15rem)',
          color: 'rgba(255,255,255,0.8)', lineHeight: 1.9
        }}>
          Another year older, wiser, and brighter 🌙<br />
          Here's to the girl who makes life lighter ✨
        </p>
      </motion.div>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} onClick={onNext}
        style={{
          padding: '12px 32px', background: 'linear-gradient(135deg, rgba(139,92,246,0.65), rgba(6,182,212,0.65))',
          backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 50,
          color: 'white', fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(0.9rem, 3vw, 1rem)', fontWeight: 700, cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(139,92,246,0.35)', flexShrink: 0, willChange: 'transform'
        }}>
        📸 See Sweet Moments
      </motion.button>
    </motion.div>
  )
}
