'use client'

import { motion } from 'framer-motion'
const spaces = [
  {
    title: 'Salão',
    description:
      'Um espaço acolhedor com lareira, ar condicionado, cozinha aberta e vista para o logradouro e piscina. Perfeito para noites frias de inverno ou quentes de verão.',
    image: '/dining-room2.jpg',
  },
  {
    title: 'Jardim & Piscina',
    description:
      'Relaxe junto à piscina, apanhe sol ou desfrute de uma refeição ao ar livre no churrasco exterior, rodeado pela natureza.',
    image: '/pool.jpg',
  },
  {
    title: 'Quartos',
    description:
      'Acorde com o som dos pássaros e adormeça sob um céu estrelado. Quartos confortáveis com toda a tranquilidade do campo português.',
    image: '/room.jpg',
  },
]

const Spaces = () => {
  return (
    <section
      id="spaces"
      className="bg-card px-6 py-24 md:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Espaços
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
            Conforto & Autenticidade
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-accent" />
        </motion.div>

        <div className="space-y-20">
          {spaces.map((space, index) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col items-center gap-10 lg:flex-row ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Decorative section number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 left-0 select-none font-display text-[5rem] font-bold leading-none text-foreground/[0.06] lg:text-[7rem]"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-full overflow-hidden lg:w-1/2">
                <img
                  src={space.image}
                  alt={space.title}
                  className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="w-full lg:w-1/2 lg:px-8">
                <h3 className="font-display text-3xl font-medium text-foreground">
                  {space.title}
                </h3>
                <div className="mt-4 h-[1px] w-12 bg-accent" />
                <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                  {space.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Spaces
