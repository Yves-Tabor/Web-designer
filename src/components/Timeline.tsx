import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { timeline, type TimelineEntry } from '../data/timeline'

import htmlImage from './../img/html2.jpg'
import cssImage from './../img/css.jpg'
import web2Image from './../img/web.jpg'
import responsiveImage from './../img/responsive.jpg'
import designSystemImage from './../img/design-system2.jpg'
import aiImage from './../img/ai.jpg'

function PlaceholderFrame({ label, description, imageSrc }: { label: string; description: string; imageSrc?: string }) {
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden border border-line bg-gradient-to-br from-surface to-sage/10">
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={label} 
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6 text-center">
          <span className="text-sm text-muted">{label}</span>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col bg-black/70 p-6 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 -translate-y-full group-hover:translate-y-0">
        <p className="text-balance text-ink">{description}</p>
      </div>
    </div>
  )
}

function TimelineRow({ entry, index }: { entry: TimelineEntry; index: number }) {
  const reduceMotion = useReducedMotion()
  const fromLeft = index % 2 === 0
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7])
  
  const imageMap: Record<string, string> = {
    '1990': htmlImage,
    '1996': cssImage,
    '2005': web2Image,
    '2010': responsiveImage,
    '2018': designSystemImage,
    '2026': aiImage,
  }
  
  const imageSrc = imageMap[entry.year]

  return (
    <motion.div
      initial={{ opacity: 0, x: reduceMotion ? 0 : fromLeft ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: 'easeOut' }}
      style={{ scale: reduceMotion ? 1 : scale, opacity: reduceMotion ? 1 : opacity }}
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
        <PlaceholderFrame label={entry.placeholder} description={entry.description} imageSrc={imageSrc} />
      </div>
    </motion.div>
  )
}

export function Timeline() {
  return (
    <section id="archive" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-20 max-w-lg">
          <p className="text-sm text-muted">The evolution</p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            How web design transformed.
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
