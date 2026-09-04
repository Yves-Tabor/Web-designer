import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * A purely decorative film-grain layer. It never carries information, so it
 * is marked aria-hidden, and its subtle drift animation is driven by a
 * Tailwind keyframe that the global prefers-reduced-motion CSS rule already
 * freezes -- this component just avoids even mounting the animation class
 * when motion is reduced, as a second line of defence.
 */
export function Grain() {
  const reduced = usePrefersReducedMotion()

  return (
    <div
      aria-hidden="true"
      className={`grain-overlay ${reduced ? '' : 'animate-grain'}`}
    />
  )
}
