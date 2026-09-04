import { motion, useReducedMotion } from 'framer-motion'
import { timeline, type TimelineEntry } from '../data/timeline'

function PlaceholderFrame({ label }: { label: string }) {
  return (
    <div className="relative aspect-[4/3] w-full border border-line bg-gradient-to-br from-surface to-sage/10">
      {/* Corner ticks -- a small nod to a contact sheet / archive plate,
          purely decorative. */}
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-gold/70" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-gold/70" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold/70" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold/70" />
      <div className="flex h-full w-full items-center justify-center p-6 text-center">
        <span className="text-sm text-muted">{label}</span>
      </div>
    </div>
  )
}

function TimelineRow({ entry, index }: { entry: TimelineEntry; index: number }) {
  const reduceMotion = useReducedMotion()
  const fromLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: reduceMotion ? 0 : fromLeft ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: 'easeOut' }}
      className="relative pl-16 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
    >
      <span className="absolute left-6 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-ground md:left-1/2" />

      <div className={fromLeft ? 'md:order-1 md:pr-8' : 'md:order-2 md:pl-8'}>
        <p className="font-display text-2xl text-gold">{entry.year}</p>
        <p className="mt-1 text-sm text-muted">{entry.era}</p>
        <h3 className="mt-4 font-display text-2xl text-ink md:text-3xl">
          {entry.title}
        </h3>
        <p className="mt-3 max-w-md text-balance text-muted">
          {entry.description}
        </p>
      </div>

      <div
        className={`mt-6 md:mt-0 ${fromLeft ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'}`}
      >
        <PlaceholderFrame label={entry.placeholder} />
      </div>
    </motion.div>
  )
}

export function Timeline() {
  return (
    <section id="archive" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-20 max-w-lg">
          <p className="text-sm text-muted">A short history</p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            How we got to quiet.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-line md:left-1/2" />
          <div className="space-y-20 md:space-y-28">
            {timeline.map((entry, index) => (
              <TimelineRow key={entry.year} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
