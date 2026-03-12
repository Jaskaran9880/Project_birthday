'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MessageScreen({ onNext }) {
  const [opened, setOpened] = useState(false)

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-5 px-4"
      style={{ zIndex: 10 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: 'clamp(1.5rem,6vw,2.8rem)',
          color: 'white',
          textShadow: '0 2px 20px rgba(139,92,246,0.7)',
          textAlign: 'center',
        }}
      >
        A Note For You 💌
      </motion.h2>

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            onClick={() => setOpened(true)}
            className="glass-strong flex flex-col items-center gap-3"
            style={{ cursor: 'pointer', textAlign: 'center', padding: 'clamp(20px, 5vw, 32px) clamp(28px, 8vw, 48px)' }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], rotate: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: 'clamp(2.5rem,10vw,5rem)' }}
            >
              💌
            </motion.div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em' }}>
              TAP TO OPEN
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="glass-strong"
            style={{ maxWidth: 380, width: '92%', padding: 'clamp(20px, 4vw, 28px) clamp(18px, 4vw, 24px)', textAlign: 'center' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 0.5 }}
              style={{ fontSize: '2rem', marginBottom: 12 }}
            >🎉</motion.div>
            <p style={{
              fontFamily: 'Dancing Script, cursive',
              fontSize: 'clamp(0.95rem,3.5vw,1.4rem)',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.9,
            }}>
              Happy Birthday, my dearest best friend! 🎂<br /><br />
              Thank you for always being there,<br />
              for the laughs, the memories,<br />
              and for making life so much better. 🌟<br /><br />
              You are one in a million and I&apos;m so<br />
              lucky to call you my best friend. 💜
            </p>
            <p style={{ marginTop: 16, color: 'rgba(167,139,250,0.9)', fontWeight: 700, fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)' }}>
              — Your Kutta😎 Like bestie, always 🤗
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="btn-glass"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
      >
        Continue 💜
      </motion.button>
    </motion.div>
  )
}
