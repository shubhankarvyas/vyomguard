'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Highlights from './components/Highlights'
import Contact from './components/Contact'

export default function Home() {
    return (
        <main className="min-h-screen bg-charcoal-dark">
            <Hero />
            <About />
            <Capabilities />
            <Highlights />
            <Contact />
        </main>
    )
}