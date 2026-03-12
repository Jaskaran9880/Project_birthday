'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function MusicButton() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) { audioRef.current.pause(); setPlaying(false) }
    else { audioRef.current.play().catch(() => { }); setPlaying(true) }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/birthday.mp3" type="audio/mpeg" />
      </audio>
      <motion.button
        onClick={toggle}
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={playing ? { duration: 3, repeat: Infinity, ease: 'linear' } : {}}
        style={{
          position: 'fixed', top: 'max(12px, env(safe-area-inset-top, 12px))', right: 12, zIndex: 999,
          width: 'clamp(38px, 9vw, 44px)', height: 'clamp(38px, 9vw, 44px)', borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: 'white', fontSize: 'clamp(1rem, 3vw, 1.2rem)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
        title={playing ? 'Pause' : 'Play music'}
      >
        {playing ? '🎶' : '🎵'}
      </motion.button>
    </>
  )
}
