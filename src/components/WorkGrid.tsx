import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function WorkGrid() {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  }

  return (
    <section id="work" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-muted">Design showcase</p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              Exploring modern web design.
            </h2>
          </div>
          <p className="max-w-xs text-balance text-sm text-muted">
            Each piece tells a story of how design shapes digital experiences. Hover to discover the narrative behind each visual.
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
