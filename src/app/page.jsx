'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import CreatedByScreen from '@/components/screens/CreatedByScreen'
import LoaderScreen from '@/components/screens/LoaderScreen'
import IntroScreen from '@/components/screens/IntroScreen'
import ReasonsScreen from '@/components/screens/ReasonsScreen'
import TimelineScreen from '@/components/screens/TimelineScreen'
import CelebrateScreen from '@/components/screens/CelebrateScreen'
import WishesScreen from '@/components/screens/WishesScreen'
import PhotosScreen from '@/components/screens/PhotosScreen'
import MessageScreen from '@/components/screens/MessageScreen'
import ExperienceScreen from '@/components/screens/ExperienceScreen'
import MusicButton from '@/components/MusicButton'
import ReplayButton from '@/components/ReplayButton'
import Orbs from '@/components/Orbs'
import MusicPrompt from '@/components/MusicPrompt'

// Screens where replay button should NOT show (too early in the flow)
const HIDE_REPLAY = ['createdby', 'loader']

export default function Home() {
  const [screen, setScreen] = useState('createdby')
  const [showPrompt, setShowPrompt] = useState(true)

  const replay = () => setScreen('createdby')

  return (
    <main className="relative w-screen overflow-hidden" style={{ height: '100dvh' }}>
      <Orbs />
      <MusicButton />
      {!HIDE_REPLAY.includes(screen) && <ReplayButton onReplay={replay} />}

      <AnimatePresence mode="wait">
        {screen === 'createdby' && <CreatedByScreen key="createdby" onDone={() => setScreen('loader')} />}
        {screen === 'loader' && <LoaderScreen key="loader" onDone={() => setScreen('intro')} />}
        {screen === 'intro' && <IntroScreen key="intro" onStart={() => setScreen('reasons')} />}
        {screen === 'reasons' && <ReasonsScreen key="reasons" onNext={() => setScreen('timeline')} />}
        {screen === 'timeline' && <TimelineScreen key="timeline" onNext={() => setScreen('celebrate')} />}
        {screen === 'celebrate' && <CelebrateScreen key="celebrate" onNext={() => setScreen('wishes')} />}
        {screen === 'wishes' && <WishesScreen key="wishes" onNext={() => setScreen('photos')} />}
        {screen === 'photos' && <PhotosScreen key="photos" onNext={() => setScreen('message')} />}
        {screen === 'message' && <MessageScreen key="message" onNext={() => setScreen('experience')} />}
        {screen === 'experience' && <ExperienceScreen key="experience" onReplay={replay} />}
      </AnimatePresence>
      {showPrompt && <MusicPrompt onDone={() => setShowPrompt(false)} />}
    </main>
  )
}
