'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function launchConfetti(canvas) {
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const colors = ['#a78bfa', '#06b6d4', '#8b5cf6', '#67e8f9', '#c4b5fd', '#ffffff', '#e879f9']
  const pieces = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: 7 + Math.random() * 8,
    h: 3 + Math.random() * 5,
    r: Math.random() * Math.PI,
    vx: (Math.random() - 0.5) * 3,
    vy: 2 + Math.random() * 4,
    vr: (Math.random() - 0.5) * 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: 1,
  }))
  let id
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    pieces.forEach(p => {
      ctx.save()
      ctx.globalAlpha = 0.8
      ctx.fillStyle = p.color
      ctx.translate(p.x, p.y)
      ctx.rotate(p.r)
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      ctx.restore()
      p.x += p.vx; p.y += p.vy; p.r += p.vr
      if (p.y > canvas.height) { p.y = -20; p.x = Math.random() * canvas.width }
    })
    id = requestAnimationFrame(draw)
  }
  draw()
  setTimeout(() => { cancelAnimationFrame(id); ctx.clearRect(0, 0, canvas.width, canvas.height) }, 4500)
}

export default function CelebrateScreen({ onNext }) {
  const canvasRef = useRef(null)
  useEffect(() => { if (canvasRef.current) launchConfetti(canvasRef.current) }, [])

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-4 px-4"
      style={{ zIndex: 10, willChange: 'transform' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 11 }} />

      <div className="glass-strong flex flex-col items-center gap-4 text-center"
        style={{
          zIndex: 20, maxWidth: 400, width: '92%',
          padding: 'clamp(24px, 4vh, 40px) clamp(20px, 5vw, 40px)',
        }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            willChange: 'transform',
            fontFamily: 'Dancing Script, cursive',
            fontSize: 'clamp(1.6rem,7vw,3.2rem)',
            color: 'white',
            textShadow: '0 2px 20px rgba(139,92,246,0.7)',
            lineHeight: 1.3,
          }}
        >
          Happy Birthday,<br />My Best Friend! 💜
        </motion.h1>

        <motion.div
          style={{ fontSize: 'clamp(3rem,12vw,7rem)', willChange: 'transform' }}
          animate={{ rotate: [-8, 8, -8], scale: [1, 1.06, 1] }}
          transition={{ duration: 0.65, repeat: Infinity, ease: 'easeInOut' }}
        >
          🎂
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.8rem, 2.8vw, 0.9rem)', willChange: 'transform' }}
        >
          You make every single day brighter just by being you! ☀️
        </motion.p>

        <motion.button
          className="btn-glass"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(6,182,212,0.6))', willChange: 'transform' }}
        >
          📸 See Sweet Moments
        </motion.button>
      </div>
    </motion.div>
  )
}
