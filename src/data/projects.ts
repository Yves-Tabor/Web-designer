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
    id: 'almanac',
    title: 'Almanac',
    category: 'Product design',
    year: '2026',
    description:
      'A journaling app rebuilt around a single scroll. We replaced its settings maze with one continuous, searchable timeline.',
    placeholder: 'Almanac — cover frame',
  },
  {
    id: 'lowtide',
    title: 'Low Tide',
    category: 'Brand & site',
    year: '2025',
    description:
      'A tidal-research nonprofit needed a home that felt as unhurried as its subject. Long scrolls, slow reveals, no dashboards.',
    placeholder: 'Low Tide — cover frame',
  },
  {
    id: 'ferrous',
    title: 'Ferrous',
    category: 'Interaction design',
    year: '2025',
    description:
      'An industrial parts catalogue for people who already know what they want. We designed for speed and cut every unnecessary step.',
    placeholder: 'Ferrous — cover frame',
  },
  {
    id: 'nightcall',
    title: 'Nightcall',
    category: 'Motion & UI',
    year: '2024',
    description:
      'A late-night radio archive. The signature moment: tuning between stations is a physical, frictioned drag, not a dropdown.',
    placeholder: 'Nightcall — cover frame',
  },
  {
    id: 'quiethours',
    title: 'Quiet Hours',
    category: 'Product design',
    year: '2024',
    description:
      'A focus-timer for shared studios. The whole interface dims in step with the timer, so the UI itself models the quiet it asks for.',
    placeholder: 'Quiet Hours — cover frame',
  },
  {
    id: 'harbor',
    title: 'Harbor Index',
    category: 'Data & editorial',
    year: '2023',
    description:
      'A shipping-data archive turned readable. Dense tables became an annotated map, built to be skimmed, not queried.',
    placeholder: 'Harbor Index — cover frame',
  },
]
