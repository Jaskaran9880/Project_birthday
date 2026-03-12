'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STARS = [1, 2, 3, 4, 5]
const REACTIONS = ['😐', '🙂', '😊', '🥰', '🤩']

export default function ExperienceScreen({ onReplay }) {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (rating === 0) return

    // Build the WhatsApp message
    const stars = '⭐'.repeat(rating)
    const reaction = REACTIONS[rating - 1]
    let whatsappMsg = `🎂 *Birthday Experience Feedback* 🎂\n\n`
    whatsappMsg += `Rating: ${stars} (${rating}/5) ${reaction}\n`
    if (message.trim()) {
      whatsappMsg += `\nMessage: "${message.trim()}"\n`
    }
    whatsappMsg += `\n💜 Sent from your Birthday Surprise!`

    // Open WhatsApp with pre-filled message
    const phone = '919779488340'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`
    window.open(url, '_blank')

    setSubmitted(true)
  }

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-4 px-4 screen-scroll"
      style={{ zIndex: 10, paddingTop: 'clamp(24px, 4vh, 40px)', paddingBottom: 24, willChange: 'transform' }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="glass-strong flex flex-col items-center gap-4 text-center"
            style={{ maxWidth: 400, width: '92%', padding: 'clamp(24px, 4vh, 36px) clamp(18px, 5vw, 28px)', willChange: 'transform' }}>

            <motion.div style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', willChange: 'transform' }}
              animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              💌
            </motion.div>

            <h2 style={{
              fontFamily: 'Dancing Script, cursive', fontSize: 'clamp(1.3rem,5vw,2.2rem)',
              color: 'white', textShadow: '0 2px 16px rgba(139,92,246,0.6)', lineHeight: 1.3
            }}>
              How was your experience? 🌟
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)' }}>
              Tell me what you felt opening this surprise 💜
            </p>

            {/* Star rating */}
            <div style={{ display: 'flex', gap: 'clamp(6px, 2vw, 10px)' }}>
              {STARS.map(s => (
                <motion.button key={s}
                  onMouseEnter={() => setHovered(s)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => setRating(s)}
                  whileHover={{ scale: 1.35 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ willChange: 'transform',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 'clamp(1.5rem, 5vw, 2rem)', filter: s <= (hovered || rating) ? 'none' : 'grayscale(1) opacity(0.35)',
                    transition: 'filter 0.2s',
                  }}>
                  ⭐
                </motion.button>
              ))}
            </div>

            {/* Reaction emoji */}
            <AnimatePresence mode="wait">
              {(hovered > 0 || rating > 0) && (
                <motion.div key={hovered || rating}
                  initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                  style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', willChange: 'transform' }}>
                  {REACTIONS[(hovered || rating) - 1]}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message box */}
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Write something... (optional) 💬"
              maxLength={200}
              style={{
                width: '100%', minHeight: 'clamp(70px, 12vh, 90px)', background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)', borderRadius: 14,
                color: 'white', fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(0.8rem, 2.8vw, 0.88rem)',
                padding: '10px 12px', resize: 'none', outline: 'none',
              }}
            />
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', alignSelf: 'flex-end', marginTop: -10 }}>
              {message.length}/200
            </p>

            <motion.button
              whileHover={{ scale: rating > 0 ? 1.05 : 1 }}
              whileTap={{ scale: rating > 0 ? 0.96 : 1 }}
              onClick={handleSubmit}
              style={{ willChange: 'transform',
                padding: '12px 32px',
                background: rating > 0
                  ? 'linear-gradient(135deg, rgba(139,92,246,0.65), rgba(6,182,212,0.65))'
                  : 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 50, color: rating > 0 ? 'white' : 'rgba(255,255,255,0.35)',
                fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(0.88rem, 3vw, 1rem)', fontWeight: 700,
                cursor: rating > 0 ? 'pointer' : 'not-allowed',
                boxShadow: rating > 0 ? '0 6px 24px rgba(139,92,246,0.35)' : 'none',
                transition: 'all 0.3s',
              }}>
              Share My Experience ✨
            </motion.button>
          </motion.div>

        ) : (
          /* Thank you card */
          <motion.div key="thanks"
            initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
            className="glass-strong flex flex-col items-center gap-4 text-center"
            style={{ maxWidth: 400, width: '92%', padding: 'clamp(28px, 5vh, 44px) clamp(18px, 5vw, 28px)', willChange: 'transform' }}>

            <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }} style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', willChange: 'transform' }}>
              🥰
            </motion.div>

            <h2 style={{
              fontFamily: 'Pacifico, cursive', fontSize: 'clamp(1.3rem,5vw,2.2rem)',
              color: 'white', textShadow: '0 0 24px rgba(167,139,250,0.7)', lineHeight: 1.3
            }}>
              Thank You!
            </h2>

            <p style={{
              fontFamily: 'Dancing Script, cursive', fontSize: 'clamp(0.9rem,3.5vw,1.3rem)',
              color: 'rgba(255,255,255,0.8)', lineHeight: 1.7
            }}>
              You gave it {rating} star{rating > 1 ? 's' : ''} {REACTIONS[rating - 1]}<br />
              {message && `"${message}"`}<br /><br />
              That means the world to me 💜
            </p>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
              style={{ width: '60%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)', willChange: 'transform' }} />

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} onClick={onReplay}
              style={{ willChange: 'transform',
                padding: '11px 28px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.25)', borderRadius: 50, color: 'white',
                fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)', fontWeight: 700, cursor: 'pointer',
              }}>
              🔁 Watch Again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

