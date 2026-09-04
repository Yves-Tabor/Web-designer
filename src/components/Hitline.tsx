import { motion, useReducedMotion } from 'framer-motion'

const LINES = [
  'Small interface with a great point of view.',
  'Quiet design.',
  'Expressive motion.',
]

export function Hitline() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="border-y border-line bg-surface/40 py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        {LINES.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              delay: reduceMotion ? 0 : index * 0.15,
              ease: 'easeOut',
            }}
            className={`font-display text-balance ${
              index === 0
                ? 'text-3xl text-ink md:text-5xl'
                : 'mt-3 text-2xl italic text-muted md:text-3xl'
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
