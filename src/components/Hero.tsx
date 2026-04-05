'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/hero-quinta.jpg)` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />

      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-2xl font-semibold tracking-wide text-primary-foreground"
        >
          Quinta do Espinhal
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden gap-8 font-body text-sm tracking-widest uppercase text-primary-foreground/90 md:flex"
        >
          <a
            href="#about"
            className="transition-opacity hover:opacity-70"
          >
            A Quinta
          </a>
          <a
            href="#spaces"
            className="transition-opacity hover:opacity-70"
          >
            Espaços
          </a>
          <a
            href="#features"
            className="transition-opacity hover:opacity-70"
          >
            Experiência
          </a>
          <a
            href="#contact"
            className="transition-opacity hover:opacity-70"
          >
            Contacto
          </a>
        </motion.div>
      </nav>

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
            className="border border-primary-foreground/60 px-10 py-4 font-body text-xs tracking-[0.25em] uppercase text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Reservar Agora
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-[1px] bg-primary-foreground/40" />
      </motion.div>
    </section>
  )
}

export default Hero
