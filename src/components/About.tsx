'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-6 py-24 md:px-16 lg:py-32"
    >
      {/* Decorative letter — large faint Q as visual anchor */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 select-none font-display text-[22rem] font-bold leading-none text-foreground/[0.03]"
      >
        Q
      </span>
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Bem-vindo
          </p>
          <h2 className="font-display text-4xl font-medium leading-snug text-foreground md:text-5xl">
            Um refúgio encantador
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-accent" />
          <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            A pouco mais de uma hora de Lisboa, a Quinta do Espinhal convida-o a
            respirar fundo, a desligar-se da rotina e a reconectar-se com a
            tranquilidade do campo. Entre a serenidade da flora e da fauna
            locais, encontrará o equilíbrio perfeito entre descanso e
            inspiração.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center gap-12 md:flex-row"
        >
          <div className="text-center">
            <p className="font-display text-3xl font-medium text-accent">~1h</p>
            <p className="mt-2 font-body text-sm tracking-wider text-muted-foreground">
              de Lisboa
            </p>
          </div>
          <div className="hidden h-8 w-[1px] bg-border md:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-medium text-accent">
              30 min
            </p>
            <p className="mt-2 font-body text-sm tracking-wider text-muted-foreground">
              de Santarém
            </p>
          </div>
          <div className="hidden h-8 w-[1px] bg-border md:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-medium text-accent">
              Wi-Fi
            </p>
            <p className="mt-2 font-body text-sm tracking-wider text-muted-foreground">
              incluído
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
