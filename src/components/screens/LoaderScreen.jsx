'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LoaderScreen({ onDone }) {
  const [count, setCount] = useState(3)
  const [showTada, setShowTada] = useState(false)

  useEffect(() => {
    if (showTada) return

    const timer =
      count === 0
        ? setTimeout(() => {
            setShowTada(true)
            onDone()
          }, 1920)
        : setTimeout(() => setCount((c) => c - 1), 1000)

    return () => clearTimeout(timer)
  }, [count, showTada, onDone])

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-8 px-4"
      style={{ zIndex: 10, willChange: 'transform' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.0 }}
    >
      {/* Glass card */}
      <div className="glass-strong flex flex-col items-center gap-6"
        style={{ padding: 'clamp(28px, 5vh, 48px) clamp(32px, 8vw, 64px)' }}>
        {/* Candle */}
        <div className="flex flex-col items-center gap-1">
          <motion.div
            style={{
              willChange: 'transform',
              width: 16,
              height: 28,
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at 50% 80%, #fbbf24, #f97316, transparent)',
              filter: 'blur(1px)',
            }}
            animate={{ scaleX: [1, 0.75, 1], scaleY: [1, 1.2, 1] }}
            transition={{ duration: 0.35, repeat: Infinity }}
          />
          <div
            style={{
              width: 18,
              height: 60,
              borderRadius: 4,
              background:
                'linear-gradient(135deg, rgba(167,139,250,0.8), rgba(139,92,246,0.9))',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          />
        </div>

        {/* Countdown */}
        <motion.div
          key={showTada ? 'tada' : count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{
            minHeight: '8rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            willChange: 'transform',
            fontFamily: 'Pacifico, cursive',
            fontSize: showTada ? 'clamp(3.5rem,14vw,7rem)' : 'clamp(4rem,16vw,8rem)',
            color: 'white',
            textShadow: '0 0 40px rgba(167,139,250,0.8)',
            lineHeight: 1,
          }}
        >
          {showTada ? '🎉' : count}
        </motion.div>

        <p
          style={{
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.18em',
            fontSize: '0.78rem',
            fontWeight: 700,
          }}
        >
          LOADING YOUR SURPRISE...
        </p>
      </div>
    </motion.div>
  )
}
