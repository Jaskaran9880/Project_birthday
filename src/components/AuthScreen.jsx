'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECRET_CODE = '9880'

export default function AuthScreen({ onUnlock }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    if (input === SECRET_CODE) {
      setSuccess(true)
      setTimeout(() => onUnlock(), 1200)
    } else {
      setError(true)
      setInput('')
      setTimeout(() => setError(false), 1500)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        background: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <motion.div
        className="glass-strong"
        style={{
          maxWidth: 360,
          width: '100%',
          padding: '44px 32px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20
        }}
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
      >
        <motion.div
          animate={success ? {} : { rotate: [0, -5, 5, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '3rem' }}
        >
          {success ? '🔓' : '🔒'}
        </motion.div>

        <h1
          style={{
            fontFamily: 'Pacifico',
            color: 'white',
            textShadow: '0 0 24px rgba(167,139,250,0.7)',
            fontSize: '1.5rem',
            margin: 0
          }}
        >
          Enter the Secret Code 🔐
        </h1>

        <div
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), rgba(6,182,212,0.6), transparent)',
            height: 1,
            width: '100%'
          }}
        />

        <p
          style={{
            color: 'rgba(255,255,255,0.55)',
            margin: 0,
            fontSize: '0.9rem'
          }}
        >
          You know the code 😉
        </p>

        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            textAlign: 'center',
            letterSpacing: '0.3em',
            background: 'rgba(255,255,255,0.08)',
            border: error ? '1px solid rgba(248,113,113,0.7)' : '1px solid rgba(255,255,255,0.2)',
            borderRadius: 14,
            color: 'white',
            fontFamily: 'Quicksand',
            padding: '12px 16px',
            fontSize: '1rem',
            width: '100%',
            outline: 'none'
          }}
        />

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                color: 'red',
                margin: 0,
                fontSize: '0.9rem'
              }}
            >
              Wrong code, try again! ❌
            </motion.p>
          )}
        </AnimatePresence>

        {!success ? (
          <button
            onClick={handleSubmit}
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.7), rgba(6,182,212,0.7))',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 50,
              color: 'white',
              fontFamily: 'Quicksand',
              fontWeight: 'bold',
              padding: '12px 24px',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            Unlock 🔓
          </button>
        ) : (
          <p
            style={{
              fontFamily: 'Dancing Script',
              color: 'white',
              fontSize: '1.2rem',
              margin: 0
            }}
          >
            Opening your surprise... ✨
          </p>
        )}
      </motion.div>
    </motion.div>
  )
}