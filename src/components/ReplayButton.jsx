'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ReplayButton({ onReplay }) {
  const [confirm, setConfirm] = useState(false)

  return (
    <div style={{
      position: 'fixed', bottom: 'max(20px, env(safe-area-inset-bottom, 20px))', right: 16,
      zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8,
    }}>
      <AnimatePresence>
        {confirm && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 16,
              padding: '10px 14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              maxWidth: 'min(220px, 60vw)',
            }}
          >
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center' }}>
              Restart from the beginning?
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <motion.button
                whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                onClick={() => { setConfirm(false); onReplay() }}
                style={{
                  padding: '6px 14px',
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.7), rgba(6,182,212,0.7))',
                  border: '1px solid rgba(255,255,255,0.25)', borderRadius: 50,
                  color: 'white', fontFamily: 'Quicksand, sans-serif',
                  fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                }}>
                Yes! 🔁
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                onClick={() => setConfirm(false)}
                style={{
                  padding: '6px 14px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)', borderRadius: 50,
                  color: 'rgba(255,255,255,0.6)', fontFamily: 'Quicksand, sans-serif',
                  fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                }}>
                Cancel
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main replay button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: -15 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setConfirm(c => !c)}
        title="Replay from start"
        style={{
          width: 'clamp(38px, 9vw, 46px)', height: 'clamp(38px, 9vw, 46px)', borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: 'white', fontSize: 'clamp(1rem, 3vw, 1.2rem)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        }}
      >
        🔁
      </motion.button>
    </div>
  )
}
