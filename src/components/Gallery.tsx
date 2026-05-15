'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type CategoryId = 'all' | 'exterior' | 'piscina' | 'quartos' | 'interior' | 'animais'

interface GalleryImage {
  src: string
  category: Exclude<CategoryId, 'all'>
  caption: string
}

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'piscina', label: 'Piscina' },
  { id: 'quartos', label: 'Quartos' },
  { id: 'interior', label: 'Interior' },
  { id: 'animais', label: 'Animais' },
]

const ALL_IMAGES: GalleryImage[] = [
  { src: '/outside.jpg', category: 'exterior', caption: 'Quinta do Espinhal' },
  { src: '/outside2.jpg', category: 'exterior', caption: 'Jardim exterior' },
  { src: '/outside3.jpeg', category: 'exterior', caption: 'Vista da propriedade' },
  { src: '/outside4.jpeg', category: 'exterior', caption: 'Paisagem ribatejana' },
  { src: '/bird-view.jpg', category: 'exterior', caption: 'Vista aérea' },
  { src: '/entrance.jpg', category: 'exterior', caption: 'Entrada principal' },
  { src: '/pool.jpg', category: 'piscina', caption: 'Piscina' },
  { src: '/pool2.jpg', category: 'piscina', caption: 'Piscina exterior' },
  { src: '/pool3.jpg', category: 'piscina', caption: 'Área de lazer' },
  { src: '/pool4.jpg', category: 'piscina', caption: 'Piscina ao entardecer' },
  { src: '/pool5.jpg', category: 'piscina', caption: 'Zona de banhos' },
  { src: '/pool6.jpeg', category: 'piscina', caption: 'Piscina' },
  { src: '/room.jpg', category: 'quartos', caption: 'Suite principal' },
  { src: '/room2.jpg', category: 'quartos', caption: 'Quarto duplo' },
  { src: '/room3.jpeg', category: 'quartos', caption: 'Quarto' },
  { src: '/room4.jpeg', category: 'quartos', caption: 'Quarto' },
  { src: '/room5.jpeg', category: 'quartos', caption: 'Quarto' },
  { src: '/room6.jpeg', category: 'quartos', caption: 'Quarto' },
  { src: '/room7.jpeg', category: 'quartos', caption: 'Quarto' },
  { src: '/room8.jpeg', category: 'quartos', caption: 'Quarto' },
  { src: '/bathroom.jpg', category: 'quartos', caption: 'Casa de banho' },
  { src: '/bathroom2.jpg', category: 'quartos', caption: 'Casa de banho' },
  { src: '/dining-room.jpg', category: 'interior', caption: 'Sala de jantar' },
  { src: '/dining-room2.jpg', category: 'interior', caption: 'Sala de jantar' },
  { src: '/dining-room3.jpg', category: 'interior', caption: 'Sala de jantar' },
  { src: '/dining-room4.jpg', category: 'interior', caption: 'Mesa de refeições' },
  { src: '/dining-room5.jpg', category: 'interior', caption: 'Espaço de refeições' },
  { src: '/living_room.jpeg', category: 'interior', caption: 'Sala de estar' },
  { src: '/living_room2.jpeg', category: 'interior', caption: 'Sala de estar' },
  { src: '/kitchen.jpg', category: 'interior', caption: 'Cozinha equipada' },
  { src: '/kitchen2.jpg', category: 'interior', caption: 'Cozinha' },
  { src: '/hall.jpg', category: 'interior', caption: 'Hall de entrada' },
  { src: '/hall-2.jpg', category: 'interior', caption: 'Corredor' },
  { src: '/animals.JPG', category: 'animais', caption: 'Animais da quinta' },
  { src: '/animals2.jpeg', category: 'animais', caption: 'Vida campestre' },
  { src: '/animals3.jpeg', category: 'animais', caption: 'Fauna da propriedade' },
  { src: '/animals4.jpeg', category: 'animais', caption: 'Animais da quinta' },
]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
}

const DRAG_THRESHOLD = 80

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const filtered =
    activeCategory === 'all'
      ? ALL_IMAGES
      : ALL_IMAGES.filter((img) => img.category === activeCategory)

  const total = filtered.length
  const safeIndex = Math.min(currentIndex, total - 1)
  const current = filtered[safeIndex]

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir)
      setCurrentIndex((prev) => {
        const next = prev + dir
        if (next < 0) return total - 1
        if (next >= total) return 0
        return next
      })
    },
    [total],
  )

  const handleCategoryChange = (cat: CategoryId) => {
    setActiveCategory(cat)
    setCurrentIndex(0)
    setDirection(0)
  }

  return (
    <section id="gallery" className="bg-background px-6 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Galeria
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
            Uma Janela para o Espinhal
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-accent" />
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 flex flex-wrap justify-center gap-1"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`relative px-5 py-2 font-body text-sm tracking-widest uppercase transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activeGalleryTab"
                  className="absolute inset-0 bg-primary"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Image viewport */}
          <div
            className="relative overflow-hidden"
            style={{ height: 'clamp(280px, 58vh, 620px)' }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={`${activeCategory}-${safeIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -DRAG_THRESHOLD) navigate(1)
                  else if (info.offset.x > DRAG_THRESHOLD) navigate(-1)
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
              >
                <img
                  src={current.src}
                  alt={current.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                {/* Bottom gradient for caption legibility */}
                <div
                  className="absolute inset-x-0 bottom-0 h-36 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(26,26,24,0.65) 0%, transparent 100%)',
                  }}
                />
                <p className="absolute bottom-6 left-6 font-body text-xs tracking-[0.25em] uppercase text-white/75 pointer-events-none">
                  {current.caption}
                </p>
                <p className="absolute bottom-5 right-6 font-display text-white/60 pointer-events-none">
                  <span className="text-lg font-medium text-white">
                    {String(safeIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="mx-2 text-sm text-white/40">/</span>
                  <span className="text-sm">{String(total).padStart(2, '0')}</span>
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Prev arrow */}
            <button
              onClick={() => navigate(-1)}
              aria-label="Imagem anterior"
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:border-accent hover:bg-accent"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M9 2L4 7L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={() => navigate(1)}
              aria-label="Próxima imagem"
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:border-accent hover:bg-accent"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M5 2L10 7L5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Progress indicators — dots for ≤20 images, progress bar for more */}
          <div className="mt-5 flex justify-center">
            {total <= 20 ? (
              <div className="flex items-center gap-1.5">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > safeIndex ? 1 : -1)
                      setCurrentIndex(i)
                    }}
                    aria-label={`Imagem ${i + 1}`}
                    className="h-[2px] transition-all duration-300"
                    style={{
                      width: i === safeIndex ? 20 : 6,
                      backgroundColor: i === safeIndex ? 'var(--accent)' : 'var(--border)',
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="relative h-[2px] w-48 bg-border">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-accent"
                  animate={{ width: `${((safeIndex + 1) / total) * 100}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
