'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MusicButton({ play }) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)
  const wasPlayingRef = useRef(false)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        wasPlayingRef.current = playing
        audioRef.current.pause()
        setPlaying(false)
      } else {
        if (wasPlayingRef.current) {
          audioRef.current.play().catch(() => {})
          setPlaying(true)
        }
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [playing])

  useEffect(() => {
    const handleUnload = () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [])

  const toggle = () => {
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
      wasPlayingRef.current = false
    } else {
      audioRef.current.play().catch(() => {})
      setPlaying(true)
      wasPlayingRef.current = true
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/birthday-song.mp3" type="audio/mpeg" />
      </audio>
      <motion.button
        onClick={toggle}
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={playing ? { duration: 4, repeat: Infinity, ease: 'linear' } : {}}
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 999,
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}
        title={playing ? 'Pause' : 'Play music'}
      >
        {playing ? '🎶' : '🎵'}
      </motion.button>
    </>
  )
}
