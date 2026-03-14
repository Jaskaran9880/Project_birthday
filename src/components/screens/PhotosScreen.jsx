'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ============================================================
//   ⚙️  PHOTOS — each photo can have its own settings!
//   Only add the properties you want to override.
//   Anything you skip will use the DEFAULTS below.
// ============================================================

const PHOTOS = [
  {
    image: '/photoo.jpg',
    caption: 'The day we became best friends forever 💜',
    // fit: 'contain',          // override just for this photo
    // borderRadius: '50%',     // override just for this photo
    // border: '3px solid gold',
    shadow: '0 0 40px black',
  },
  {
    image: '/prachii.webp',
    caption: 'The girl who made every outing feel like a celebration 🌸',
    shadow: '0 0 20px gold',
  },
  {
    image: '/black_p.webp', 
    caption: 'Miles away but never far from my mind 💜',
    shadow: '0 0 20px gold',
  },
  {
    image: '/new pra.webp',
    caption: 'Happy birthday to the most beautiful soul I know ✨',
    shadow: '0 0 30px rgb(66, 168, 26)',
  },
]

// ============================================================
//   🎨  DEFAULTS — used when a photo doesn't specify its own
// ============================================================

const DEFAULTS = {
  fit: 'cover',                              // 'cover' | 'contain' | 'fill'
  borderRadius: '22px',                      // '0' | '12px' | '50%'
  border: '1px solid rgba(255,255,255,0.2)', // any CSS border
  shadow: '0 4px 20px rgba(0,0,0,0.3)',      // any CSS box-shadow
  captionColor: 'rgba(255,255,255,0.85)',     // caption text color
  buttonText: '💌 Open My Message',
}

// ============================================================

export default function PhotosScreen({ onNext }) {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const goTo = (n) => { setDir(n > current ? 1 : -1); setCurrent(n) }

  // Merge per-photo settings with defaults
  const photo = PHOTOS[current]
  const fit = photo.fit ?? DEFAULTS.fit
  const radius = photo.borderRadius ?? DEFAULTS.borderRadius
  const border = photo.border ?? DEFAULTS.border
  const shadow = photo.shadow ?? DEFAULTS.shadow

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-3 px-4"
      style={{ zIndex: 10, willChange: 'transform' }}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.45 }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          willChange: 'transform',
          fontFamily: 'Dancing Script, cursive',
          fontSize: 'clamp(1.5rem,6vw,2.8rem)',
          color: 'white',
          textShadow: '0 2px 20px rgba(139,92,246,0.7)',
          textAlign: 'center',
        }}
      >
        Some Sweet Moments 🌸
      </motion.h2>

      {/* Card container — fully responsive */}
      <div style={{
        position: 'relative',
        width: 'min(300px, 85vw)',
        height: 'min(370px, 65vh)',
      }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: dir * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -80 }}
            transition={{ duration: 0.4 }}
            className="glass-strong"
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 10,
              padding: 'clamp(10px, 3vw, 16px)',
              overflow: 'hidden',
              willChange: 'transform',
            }}
          >
            {/* Photo */}
            <img
              src={photo.image}
              alt="memory"
              style={{
                width: '100%',
                flex: 1,
                minHeight: 0,
                objectFit: fit,
                borderRadius: radius,
                border: border,
                boxShadow: shadow,
              }}
            />

            {/* Caption */}
            <p style={{
              color: photo.captionColor ?? DEFAULTS.captionColor,
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 'clamp(0.78rem, 2.8vw, 0.88rem)',
              lineHeight: 1.5,
              padding: '0 4px',
              flexShrink: 0,
            }}>
              {photo.caption}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: 10 }}>
        {PHOTOS.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => goTo(i)}
            animate={{
              scale: i === current ? 1.4 : 1,
              background: i === current ? '#a78bfa' : 'rgba(255,255,255,0.3)',
            }}
            style={{ width: 10, height: 10, borderRadius: '50%', cursor: 'pointer', willChange: 'transform' }}
          />
        ))}
      </div>

      {/* Arrows */}
      <div style={{ display: 'flex', gap: 12 }}>
        {['◀', '▶'].map((arrow, i) => (
          <motion.button
            key={arrow}
            whileTap={{ scale: 0.9 }}
            onClick={() => goTo((current + (i === 0 ? -1 : 1) + PHOTOS.length) % PHOTOS.length)}
            className="glass"
            style={{
              willChange: 'transform',
              width: 40, height: 40, borderRadius: '50%',
              color: 'white', border: '1px solid rgba(255,255,255,0.25)',
              cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700,
            }}
          >
            {arrow}
          </motion.button>
        ))}
      </div>

      {/* Next button */}
      <motion.button
        className="btn-glass"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(6,182,212,0.6))', willChange: 'transform' }}
      >
        {DEFAULTS.buttonText}
      </motion.button>
    </motion.div>
  )
}