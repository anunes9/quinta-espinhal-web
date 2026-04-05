'use client'

import { motion } from 'framer-motion'
import { Trees, PawPrint, Flame, Sun } from 'lucide-react'

const features = [
  {
    icon: Trees,
    title: 'Natureza',
    description:
      'Paisagens verdes, oliveiras e uma fauna encantadora que fazem deste lugar um verdadeiro paraíso.',
  },
  {
    icon: PawPrint,
    title: 'Pet Friendly',
    description:
      'Os seus animais de estimação são bem-vindos. A Quinta é o espaço perfeito para toda a família.',
  },
  {
    icon: Flame,
    title: 'Lareira',
    description:
      'Noites acolhedoras junto à lareira, perfeitas para relaxar após um dia na natureza.',
  },
  {
    icon: Sun,
    title: 'Piscina',
    description:
      'Piscina exterior para os dias quentes, rodeada de jardins e tranquilidade absoluta.',
  },
]

const Features = () => {
  return (
    <section
      id="features"
      className="bg-primary px-6 py-24 md:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/70">
            Experiência
          </p>
          <h2 className="font-display text-4xl font-medium text-primary-foreground md:text-5xl">
            Viva o Espinhal
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-primary-foreground/30" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-primary-foreground/20">
                <feature.icon
                  className="h-5 w-5 text-primary-foreground/80"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-primary-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-primary-foreground/70">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
