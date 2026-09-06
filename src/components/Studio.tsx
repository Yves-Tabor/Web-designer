import { motion, useReducedMotion } from 'framer-motion'

const PRINCIPLES = [
  {
    title: 'Design with purpose, not decoration.',
    body: 'Every element serves a function. Beauty emerges from clarity, not excess.',
  },
  {
    title: 'Users come first, always.',
    body: 'Great design disappears. It guides without demanding attention.',
  },
  {
    title: 'Simplicity is the ultimate sophistication.',
    body: 'The best interfaces solve complex problems with elegant solutions.',
  },
]

export function Studio() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="studio" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
            className="md:sticky md:top-28 md:self-start"
          >
            <p className="text-sm text-muted">The philosophy</p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Design that speaks.
            </h2>
            <p className="mt-6 max-w-sm text-balance text-muted">
              Web design has evolved from static pages to living experiences. We believe in creating interfaces that communicate, connect, and inspire through thoughtful visual storytelling.
            </p>
          </motion.div>

          <ul className="space-y-10">
            {PRINCIPLES.map((principle, index) => (
              <motion.li
                key={principle.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: reduceMotion ? 0.2 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="border-l border-line pl-6"
              >
                <p className="font-display text-xl text-ink">
                  {principle.title}
                </p>
                <p className="mt-2 max-w-md text-muted">{principle.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
