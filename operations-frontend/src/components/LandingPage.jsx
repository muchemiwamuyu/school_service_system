import React from 'react'
import { Button } from './ui/button'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import schollImage from '../assets/school.jpg'

function LandingPage() {
  const listInfo = [
    'Create and manage accounts',
    'Build teams and classes',
    'Track and manage students',
    'Centralized school operations',
  ]

  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-background text-foreground flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <span className="text-primary">KingsBridge</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            A modern school control system built to simplify administration,
            streamline teams, and keep everything organized — without chaos.
          </p>

          {/* FEATURE LIST */}
          <ul className="mt-6 space-y-3 max-w-md mx-auto md:mx-0">
            {listInfo.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-4 sm:justify-start justify-center">
            <Button className="px-6 w-full sm:w-auto">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="px-6 w-full sm:w-auto">
              Learn More
            </Button>
          </div>

          {/* INFO BOX */}
          <div className="mt-8 p-5 rounded-xl border bg-muted/40 hover:bg-muted/60 transition max-w-xl mx-auto md:mx-0">
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              Why SchoolSys?
            </h3>
            <p className="text-sm text-muted-foreground">
              Designed for real schools. Less paperwork, fewer errors,
              faster decisions. Everything lives in one clean dashboard.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex justify-center"
        >
          {/* Glow hidden on very small screens */}
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full hidden sm:block" />
          <img
            src={schollImage}
            alt="KingsBridge dashboard illustration"
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg drop-shadow-xl rounded-md"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default LandingPage
