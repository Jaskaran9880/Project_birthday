'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoaderScreen({ onDone }) {
  const [count, setCount] = useState(3)
  const [phase, setPhase] = useState('countdown')

  useEffect(() => {
    if (phase !== 'countdown') return
    const interval = setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          clearInterval(interval)
          setTimeout(() => setPhase('tada'), 500)
          return 0
        }
        return c - 1
      })
    }, 900)
    return () => clearInterval(interval)
  }, [phase])

  useEffect(() => {
    if (phase !== 'tada') return
    const t = setTimeout(() => onDone(), 1200)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-8 px-4"
      style={{ zIndex: 10 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glass card */}
      <div className="glass-strong flex flex-col items-center gap-6"
        style={{ padding: 'clamp(28px, 5vh, 48px) clamp(32px, 8vw, 64px)' }}>
        {/* Candle */}
        <div className="flex flex-col items-center gap-1">
          <motion.div
            style={{
              width: 16, height: 28, borderRadius: '50%',
              background: 'radial-gradient(ellipse at 50% 80%, #fbbf24, #f97316, transparent)',
              filter: 'blur(1px)',
            }}
            animate={{ scaleX: [1, 0.75, 1], scaleY: [1, 1.2, 1], rotate: [-3, 3, -3] }}
            transition={{ duration: 0.35, repeat: Infinity }}
          />
          <div style={{
            width: 18, height: 60, borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(167,139,250,0.8), rgba(139,92,246,0.9))',
            border: '1px solid rgba(255,255,255,0.3)',
          }} />
        </div>

        {/* Countdown */}
        <AnimatePresence mode="wait">
          {phase === 'countdown' && count > 0 && (
            <motion.div
              key={count}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              style={{
                fontFamily: 'Pacifico, cursive',
                fontSize: 'clamp(4rem,16vw,8rem)',
                color: 'white',
                textShadow: '0 0 40px rgba(167,139,250,0.8)',
                lineHeight: 1,
              }}
            >
              {count}
            </motion.div>
          )}
          {phase === 'tada' && (
            <motion.div
              key="tada"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 12 }}
              style={{ fontSize: 'clamp(3.5rem,14vw,7rem)' }}
            >
              🎉
            </motion.div>
          )}
        </AnimatePresence>

        <p style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', fontSize: '0.78rem', fontWeight: 700 }}>
          LOADING YOUR SURPRISE...
        </p>
      </div>
    </motion.div>
  )
}
