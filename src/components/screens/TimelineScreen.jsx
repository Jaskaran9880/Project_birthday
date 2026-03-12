'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const MILESTONES = [
  { year: 'Day 1', emoji: '👋', title: 'The Incident', desc: 'The universe decided it was time to test my Patience.😎😂' },
  { year: 'Month 1', emoji: '😂', title: 'Infinite Loop', desc: 'Realizing dealing with you is like a broken code--just unhandleable errors🤨.' },
  { year: 'Year 1', emoji: '🌙', title: 'Late Night Chats', desc: 'Talking all night like time didn\'t exist.' },
  { year: 'Year 2', emoji: '🛤️', title: 'Trauma Bonding', desc: "Surviving each other's absolutely terrible life decisions." },
  { year: 'Now', emoji: '💜', title: 'Stuck Together (Best Friends)', desc: 'And here we are — forever and always.' },
]

export default function TimelineScreen({ onNext }) {
  const [visible, setVisible] = useState(1)

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-start gap-4 px-4 screen-scroll"
      style={{ zIndex: 10, paddingTop: 'clamp(36px, 7vh, 72px)', paddingBottom: 24, willChange: 'transform' }}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.45 }}
    >
      <motion.h2 initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: 'Dancing Script, cursive', fontSize: 'clamp(1.5rem,5.5vw,2.6rem)',
          color: 'white', textShadow: '0 2px 20px rgba(139,92,246,0.7)', textAlign: 'center', flexShrink: 0, willChange: 'transform'
        }}>
        Our Friendship Story 🌙
      </motion.h2>

      {/* Timeline */}
      <div style={{ position: 'relative', width: '100%', maxWidth: 380, flexShrink: 0 }}>
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'absolute', left: 'clamp(18px, 5vw, 28px)', top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, rgba(139,92,246,0.8), rgba(6,182,212,0.8))',
            transformOrigin: 'top', willChange: 'transform'
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingLeft: 'clamp(4px, 2vw, 12px)' }}>
          {MILESTONES.slice(0, visible).map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: i * 0.05 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(8px, 2.5vw, 14px)', willChange: 'transform' }}>
              {/* Dot */}
              <div style={{
                minWidth: 'clamp(28px, 7vw, 34px)', height: 'clamp(28px, 7vw, 34px)', borderRadius: '50%', zIndex: 2,
                background: 'linear-gradient(135deg, rgba(139,92,246,0.8), rgba(6,182,212,0.8))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', boxShadow: '0 0 14px rgba(139,92,246,0.5)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}>{m.emoji}</div>

              {/* Card */}
              <div className="glass" style={{ flex: 1, padding: 'clamp(8px, 2vw, 10px) clamp(10px, 3vw, 14px)' }}>
                <p style={{ color: 'rgba(167,139,250,0.9)', fontSize: 'clamp(0.62rem, 2vw, 0.72rem)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{m.year}</p>
                <p style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(0.82rem, 2.8vw, 0.95rem)', marginTop: 2 }}>{m.title}</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.72rem, 2.5vw, 0.82rem)', marginTop: 3, lineHeight: 1.4 }}>{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {visible < MILESTONES.length ? (
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
          onClick={() => setVisible(v => v + 1)}
          style={{
            padding: '11px 28px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.25)', borderRadius: 50, color: 'white',
            fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(0.82rem, 2.8vw, 0.9rem)', fontWeight: 700, cursor: 'pointer',
            flexShrink: 0, willChange: 'transform'
          }}>
          Continue the story ➜
        </motion.button>
      ) : (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} onClick={onNext}
          style={{
            padding: '12px 32px', background: 'linear-gradient(135deg, rgba(139,92,246,0.65), rgba(6,182,212,0.65))',
            backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 50,
            color: 'white', fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(0.9rem, 3vw, 1rem)', fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(139,92,246,0.35)', flexShrink: 0, willChange: 'transform'
          }}>
          🎉 Let's Celebrate!
        </motion.button>
      )}
    </motion.div>
  )
}
