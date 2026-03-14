'use client'

import { motion } from 'framer-motion'

// ============ IMAGE CONTROLS (edit these values) ============
const IMAGE_ZOOM = 1.352         // Zoom level: 0.5 = half size, 1 = normal, 2 = double
const SHADOW_SIZE = 15        // Glow spread in px: 0 = none, 30 = medium, 60 = large
const SHADOW_OPACITY = 0.8   // Glow intensity: 0 = invisible, 0.5 = medium, 1 = full
const SHADOW_COLOR = '255,255,255' // Glow color in RGB (gold: 255,215,0  purple: 139,92,246)
// ============================================================

export default function CreatedByScreen({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-6 px-4"
      style={{ zIndex: 10, willChange: 'transform' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7 }}
    >
      {[...Array(14)].map((_, i) => (
        <motion.div key={i} style={{ willChange: 'transform',
          position: 'absolute', width: i % 3 === 0 ? 6 : 4, height: i % 3 === 0 ? 6 : 4,
          borderRadius: '50%', background: i % 2 === 0 ? 'rgba(167,139,250,0.7)' : 'rgba(6,182,212,0.7)',
          left: `${5 + i * 6.5}%`, top: `${15 + (i % 4) * 20}%`,
        }}
          animate={{ y: [-12, 12, -12], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.5 + i * 0.25, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}

      <div className="glass-strong flex flex-col items-center gap-5 text-center"
        style={{ padding: 'clamp(28px, 6vw, 52px) clamp(24px, 5vw, 56px)', maxWidth: 400, width: '92%' }}>

        <motion.img
          src="/jass.webp"
          initial={{ scale: 0, rotate: -0 }}
          animate={{ scale: IMAGE_ZOOM }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
          style={{
            willChange: 'transform',
            width: 'clamp(72px, 20vw, 100px)',
            height: 'clamp(72px, 20vw, 100px)',
            borderRadius: '10%',
            objectFit: 'cover',
            border: '2px solid rgba(255,255,255,0.3)',
            boxShadow: `0 0 ${SHADOW_SIZE}px rgba(${SHADOW_COLOR},${SHADOW_OPACITY}), 0 0 ${SHADOW_SIZE * 2}px rgba(${SHADOW_COLOR},${SHADOW_OPACITY * 0.4})`,
          }}
        />
        <br></br>

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ color: 'rgba(244, 244, 244, 1)', fontSize: '0.72rem', letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase', textShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255,215,0,0.3)', willChange: 'transform' }}>
          Created by
        </motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.55 }}
          style={{ willChange: 'transform',
            fontFamily: 'Pacifico, cursive', fontSize: 'clamp(1.6rem,7vw,3rem)', color: 'white',
            textShadow: '0 0 30px rgba(167,139,250,0.8), 0 0 60px rgba(139,92,246,0.4)', lineHeight: 1.2,
          }}>
          Mr.Jaskaranpreet Singh
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.75, duration: 0.6 }}
          style={{ width: '60%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), rgba(6,182,212,0.6), transparent)', willChange: 'transform' }} />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ fontFamily: 'Dancing Script, cursive', fontSize: 'clamp(1rem,4vw,1.25rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, willChange: 'transform' }}>
          A little surprise, made just for you ✨
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}
          onClick={onDone}
          style={{
            willChange: 'transform',
            marginTop: 8, padding: '13px 36px',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.65), rgba(6,182,212,0.65))',
            backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 50, color: 'white', fontFamily: 'Quicksand, sans-serif',
            fontSize: '1rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.05em',
            boxShadow: '0 6px 24px rgba(139,92,246,0.35)',
          }}>
          Begin the Surprise 💜
        </motion.button>
      </div>
    </motion.div>
  )
}
