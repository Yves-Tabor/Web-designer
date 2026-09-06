export interface TimelineEntry {
  year: string
  era: string
  title: string
  description: string
  placeholder: string
}


export const timeline: TimelineEntry[] = [
  {
    year: '1990',
    era: 'The Beginning',
    title: 'HTML & Static Pages',
    description:
      'The web started with simple, text-based pages. No styling, just content. The foundation was laid for what would become a global design medium.',
    placeholder: 'Early HTML page, 1990',
  },
  {
    year: '1996',
    era: 'Visual Revolution',
    title: 'CSS Emerges',
    description:
      'Cascading Style Sheets changed everything. Designers could finally separate content from presentation, opening the door to creative expression.',
    placeholder: 'CSS-styled page, 1996',
  },
  {
    year: '2005',
    era: 'Web 2.0',
    title: 'Interactive Experiences',
    description:
      'AJAX brought dynamic content without page reloads. The web became more like applications, setting the stage for modern interactivity.',
    placeholder: 'Web 2.0 interface, 2005',
  },
  {
    year: '2010',
    era: 'Responsive Era',
    title: 'Mobile-First Design',
    description:
      'Smartphones demanded flexible layouts. Responsive design became essential, forcing designers to think beyond fixed desktop dimensions.',
    placeholder: 'Responsive layout, 2010',
  },
  {
    year: '2018',
    era: 'Modern Web',
    title: 'Component Systems',
    description:
      'Design systems and component libraries emerged. Consistency and scalability became paramount, changing how teams approach web design.',
    placeholder: 'Design system, 2018',
  },
  {
    year: '2026',
    era: 'The Future',
    title: 'AI-Enhanced Design',
    description:
      'Artificial intelligence is transforming how we create. From generative layouts to adaptive interfaces, the boundary between design and technology continues to blur.',
    placeholder: 'AI-powered interface, 2026',
  },
]
