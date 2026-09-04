interface MarqueeBandProps {
  words: string[]
  direction?: 'left' | 'right'
  rotate?: number
  emphasizeIndex?: number
}

/**
 * A single ticker row of the crossed marquee under the hero. Content is
 * duplicated once so the CSS translateX loop can wrap seamlessly. The
 * looping animation is pure CSS (see tailwind.config.ts), which the global
 * prefers-reduced-motion rule in index.css already freezes -- there is no
 * essential information here, it's a decorative rhythm, so freezing it is
 * enough (no separate JS branch needed).
 */
export function MarqueeBand({
  words,
  direction = 'left',
  rotate = 0,
  emphasizeIndex,
}: MarqueeBandProps) {
  const doubled = [...words, ...words]

  return (
    <div
      aria-hidden="true"
      className="w-[140%] overflow-hidden border-y border-line bg-surface/60 py-4"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className={`flex w-max gap-3 whitespace-nowrap ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {doubled.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={`font-display text-2xl md:text-4xl ${
              index % words.length === emphasizeIndex
                ? 'font-medium text-ink'
                : 'text-muted'
            }`}
          >
            {word}
            <span className="mx-3 text-line">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
