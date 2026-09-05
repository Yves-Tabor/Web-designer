import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.li variants={cardVariants} className="group list-none">
      {/*
        The whole interactive surface is one focusable link, so keyboard
        users get the overlay on focus (group-focus-within) exactly as
        mouse users get it on hover -- and the caption below is never
        hidden inside the animation at all, for either input method.
      */}
      <a href={`#${project.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden border border-line bg-gradient-to-br from-surface to-sage/10">
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <span className="text-sm text-muted">{project.placeholder}</span>
          </div>

          <div className="absolute inset-0 flex flex-col bg-black/70 p-6 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 -translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0">
            <p className="text-balance text-ink">{project.description}</p>
            <span className="mt-4 inline-block w-fit border-b border-gold text-sm text-gold">
              View project
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between">
          <h3 className="font-display text-xl text-ink">{project.title}</h3>
          <span className="text-sm text-muted">{project.year}</span>
        </div>
        <p className="text-sm text-muted">{project.category}</p>
      </a>
    </motion.li>
  )
}
