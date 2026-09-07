import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Grain() {
  const reduced = usePrefersReducedMotion()

  return (
    <div
      aria-hidden="true"
      className={`grain-overlay ${reduced ? '' : 'animate-grain'}`}
    />
  )
}
