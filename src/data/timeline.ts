export interface TimelineEntry {
  year: string
  era: string
  title: string
  description: string
  placeholder: string
}


export const timeline: TimelineEntry[] = [
  {
    year: '2016',
    era: 'Print & Grid',
    title: 'Learning restraint from the page',
    description:
      'Before screens, the grid. Two years spent on editorial layouts taught us that margins carry as much meaning as the words they hold.',
    placeholder: 'Editorial spread, 2016',
  },
  {
    year: '2018',
    era: 'Skeuomorphic Depth',
    title: 'Interfaces that imitated the world',
    description:
      'Stitched leather, brushed metal, drop shadows on everything. Overdone in hindsight, but it taught us that texture builds trust.',
    placeholder: 'App icon study, 2018',
  },
  {
    year: '2021',
    era: 'Flat & Functional',
    title: 'Stripping it back to function',
    description:
      'The pendulum swung hard. Flat colour, no ornament, everything justified by a user story. Clean, but it often forgot to feel like anything.',
    placeholder: 'Dashboard redesign, 2021',
  },
  {
    year: '2024',
    era: 'Motion-First',
    title: 'Letting movement carry meaning',
    description:
      'Once performant animation became cheap, we started designing the transition before the screen. State changes became the interface.',
    placeholder: 'Prototype reel, 2024',
  },
  {
    year: '2026',
    era: 'Neo-Archive',
    title: 'Where we are now',
    description:
      'Warm, tactile, a little cinematic. We borrow the discipline of the archive and the expressiveness of film to make small interfaces feel alive.',
    placeholder: 'Current studio work, 2026',
  },
]
