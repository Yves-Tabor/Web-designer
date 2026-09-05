export interface Project {
  id: string
  title: string
  category: string
  year: string
  description: string
  placeholder: string
}

// Swap `placeholder` for a real image path (e.g. "/work/almanac.jpg") on
// each entry once assets are ready -- the card component falls back to a
// labelled frame automatically when no `image` is supplied.
export const projects: Project[] = [
  {
    id: 'minimalist',
    title: 'Minimalist Aesthetics',
    category: 'Visual Design',
    year: '2026',
    description:
      'The art of saying more with less. Explore how whitespace, typography, and deliberate restraint create powerful visual statements.',
    placeholder: 'Minimalist Design — cover frame',
  },
  {
    id: 'darkmode',
    title: 'Dark Mode Evolution',
    category: 'Interface Design',
    year: '2025',
    description:
      'From high-contrast necessity to sophisticated aesthetic. How dark interfaces have transformed from accessibility feature to design choice.',
    placeholder: 'Dark Mode — cover frame',
  },
  {
    id: 'microinteractions',
    title: 'Microinteractions',
    category: 'Motion Design',
    year: '2025',
    description:
      'Small details, big impact. The subtle animations that guide users and add personality to digital experiences.',
    placeholder: 'Microinteractions — cover frame',
  },
  {
    id: 'gradients',
    title: 'Gradient Renaissance',
    category: 'Color Theory',
    year: '2024',
    description:
      'The return of vibrant color blends. How modern gradients moved from 90s nostalgia to contemporary sophistication.',
    placeholder: 'Gradients — cover frame',
  },
  {
    id: 'typography',
    title: 'Typography Systems',
    category: 'Type Design',
    year: '2024',
    description:
      'Building visual hierarchy through type. The systematic approach to selecting and pairing fonts for digital interfaces.',
    placeholder: 'Typography — cover frame',
  },
  {
    id: 'accessibility',
    title: 'Inclusive Design',
    category: 'UX Principles',
    year: '2023',
    description:
      'Design that works for everyone. How accessibility considerations lead to better experiences for all users.',
    placeholder: 'Accessibility — cover frame',
  },
]
