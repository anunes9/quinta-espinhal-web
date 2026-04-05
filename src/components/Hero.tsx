'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'A Quinta' },
  { href: '#spaces', label: 'Espaços' },
  { href: '#features', label: 'Experiência' },
  { href: '#contact', label: 'Contacto' },
]

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed navigation — scroll-aware */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 md:px-16 ${
          scrolled
            ? 'bg-background/92 shadow-sm backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <span
          className={`font-display text-2xl font-semibold tracking-wide transition-colors duration-500 ${
            scrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
        >
          Quinta do Espinhal
        </span>

        {/* Desktop links */}
        <div
          className={`hidden gap-8 font-body text-sm tracking-widest uppercase transition-colors duration-500 md:flex ${
            scrolled ? 'text-foreground/70' : 'text-primary-foreground/90'
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          className={`md:hidden transition-colors duration-500 ${
            scrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-border bg-background/95 px-8 py-6 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-foreground/70 transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/hero-quinta.jpg)` }}
        />
        {/* Cinematic gradient — dark at bottom, luminous at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/15 via-foreground/25 to-foreground/65" />
        {/* Edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(26,26,24,0.35)_100%)]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80"
          >
            Ribatejo · Portugal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-4xl font-display text-5xl font-medium leading-tight text-primary-foreground md:text-7xl"
          >
            Desligue-se do mundo,
            <br />
            <span className="italic">ligue-se à Natureza</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="border border-primary-foreground/60 px-10 py-4 font-body text-xs tracking-[0.25em] uppercase text-primary-foreground transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Reservar Agora
            </a>
          </motion.div>
        </div>

        {/* Animated scroll indicator — light beam travelling down the line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 h-12 w-px -translate-x-1/2 overflow-hidden bg-primary-foreground/20"
        >
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 0.4,
            }}
            className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-primary-foreground/80 to-transparent"
          />
        </motion.div>
      </section>
    </>
  )
}

export default Hero
