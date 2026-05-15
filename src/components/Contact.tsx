'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section
      id='contact'
      className='relative overflow-hidden bg-background px-6 py-24 md:px-16 lg:py-32'
    >
      {/* Desaturated landscape background for atmosphere */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-20 saturate-0'
        style={{ backgroundImage: 'url(/bg_tot.jpg)' }}
      />
      <div className='absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/70' />

      <div className='relative z-10 mx-auto max-w-3xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className='mb-4 font-body text-xs tracking-[0.3em] uppercase text-muted-foreground'>
            Reserve
          </p>
          <h2 className='font-display text-4xl font-medium text-foreground md:text-5xl'>
            O seu momento de pausa
          </h2>
          <div className='mx-auto mt-6 h-[1px] w-16 bg-accent' />
          <p className='mx-auto mt-8 max-w-xl font-body text-lg leading-relaxed text-muted-foreground'>
            Ideal para famílias, casais ou viajantes solitários em busca de paz,
            simplicidade e autenticidade.
          </p>

          <div className='mt-12 flex flex-col items-center justify-center gap-4 md:flex-row'>
            <a
              href='tel:+351962824699'
              className='flex items-center gap-3 border border-border px-6 py-3 font-body text-sm tracking-wider text-foreground transition-all duration-300 hover:border-accent hover:text-accent'
            >
              <Phone className='h-4 w-4 flex-shrink-0' strokeWidth={1.5} />
              +351 962 824 699
            </a>
            <a
              href='mailto:filipa.ferreira@espinhalartesanal.com'
              className='flex items-center gap-3 border border-border px-6 py-3 font-body text-sm tracking-wider text-foreground transition-all duration-300 hover:border-accent hover:text-accent'
            >
              <Mail className='h-4 w-4 flex-shrink-0' strokeWidth={1.5} />
              filipa.ferreira@espinhalartesanal.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
