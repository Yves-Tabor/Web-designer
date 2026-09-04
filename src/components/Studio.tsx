import { motion, useReducedMotion } from 'framer-motion'

const PRINCIPLES = [
  {
    title: 'Motion answers, it doesn\u2019t perform.',
    body: 'Something moves because the interface changed, not because we wanted a flourish.',
  },
  {
    title: 'Nothing important lives only in an animation.',
    body: 'If motion were switched off tomorrow, every screen would still make sense.',
  },
  {
    title: 'One bold move per screen.',
    body: 'We pick the thing worth noticing, then keep everything around it quiet.',
  },
]

export function Studio() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="studio" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto grid max-w-5xl gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:gap-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
        >
          <p className="text-sm text-muted">The studio</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Two people, one point of view.
          </h2>
          <p className="mt-6 max-w-sm text-balance text-muted">
            Almanac is small on purpose. Every project gets both of us, start
            to finish, which is the only way we know to keep an interface
            feeling considered rather than assembled.
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
    </section>
  )
}
