import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

import minimalistImage from './../img/minimalist.jpg'
import darkmodeImage from './../img/darkmode.jpg'
import microinteractionsImage from './../img/microinteractions.jpg'
import gradientsImage from './../img/gradients.jpg'
import typographyImage from './../img/typography.jpg'
import accessibilityImage from './../img/accessibility.jpg'


const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectCard({ project }: { project: Project }) {
  const imageMap: Record<string, string> = {
    minimalist: minimalistImage,
    darkmode: darkmodeImage,
    microinteractions: microinteractionsImage,
    gradients: gradientsImage,
    typography: typographyImage,
    accessibility: accessibilityImage,
  }
  
  const imageSrc = imageMap[project.id]

  return (
    <motion.li variants={cardVariants} className="group list-none">
      <a href={`#${project.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden border border-line bg-gradient-to-br from-surface to-sage/10">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={project.title} 
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-6 text-center">
              <span className="text-sm text-muted">{project.placeholder}</span>
            </div>
          )}

          <div className="absolute inset-0 flex flex-col bg-black/70 p-6 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 -translate-y-full group-hover:translate-y-0">
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
