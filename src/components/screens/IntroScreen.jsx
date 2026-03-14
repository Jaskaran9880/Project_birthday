'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const FLOATERS = ['⭐', '💜', '✨', '🌟', '💫', '🎀', '🎊', '🌙']

export default function IntroScreen({ onStart }) {
  const bgRef = useRef(null)

  useEffect(() => {
    const container = bgRef.current
    if (!container) return
    const id = setInterval(() => {
      const el = document.createElement('div')
      el.textContent = FLOATERS[Math.floor(Math.random() * FLOATERS.length)]
      el.style.cssText = `
        position:absolute; bottom:-60px; font-size:${0.9 + Math.random() * 1}rem;
        left:${Math.random() * 100}vw; pointer-events:none; opacity:0.6; will-change: transform;
        animation: floatUp ${6 + Math.random() * 4}s linear forwards;
      `
      container.appendChild(el)
      setTimeout(() => el.remove(), 12000)
    }, 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-4 px-4"
      style={{ zIndex: 10, willChange: 'transform' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }} />

      {/* Sparkle corners */}
      {[
        { top: '12%', left: '8%', delay: 0 },
        { top: '10%', right: '10%', delay: 0.5 },
        { bottom: '20%', left: '10%', delay: 1 },
        { bottom: '18%', right: '8%', delay: 1.5 },
      ].map((s, i) => (
        <motion.span key={i} className="absolute text-xl pointer-events-none" style={{ ...s, zIndex: 1, willChange: 'transform' }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: s.delay }}
        >✨</motion.span>
      ))}

      {/* Main glass card */}
      <div className="glass-strong flex flex-col items-center gap-4 text-center"
        style={{
          zIndex: 10, maxWidth: 400, width: '92%',
          padding: 'clamp(24px, 4vh, 40px) clamp(20px, 5vw, 40px)',
        }}>
        <motion.div
          style={{ fontSize: 'clamp(2.8rem,11vw,6rem)', willChange: 'transform' }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          🐻
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            willChange: 'transform',
            fontFamily: 'Pacifico, cursive',
            fontSize: 'clamp(1.2rem,4.5vw,2.4rem)',
            color: 'white',
            lineHeight: 1.35,
            textShadow: '0 2px 20px rgba(139,92,246,0.6)',
          }}
        >
          19 years ago today, a massive Fore-Head was born......<br />and a girl just happened to be stuck to it 🎀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', willChange: 'transform' }}
        >
          Yes, it&apos;s YOU! A little surprise awaits...
        </motion.p>

        <motion.button
          className="btn-glass"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          style={{
            willChange: 'transform',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(6,182,212,0.6))',
            border: '1px solid rgba(255,255,255,0.3)',
            marginTop: 4,
          }}
        >
          🎊 Start the Surprise
        </motion.button>
      </div>

      <style>{`
        @keyframes floatUp { to { transform: translateY(-110vh) rotate(15deg); opacity: 0; } }
      `}</style>
    </motion.div>
  )
}
