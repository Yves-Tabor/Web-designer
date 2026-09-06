import { useState, useEffect } from 'react'

interface MarqueeBandProps {
  words: string[]
  direction?: 'left' | 'right'
  rotate?: number
  emphasizeIndex?: number
}

export function MarqueeBand({
  words,
  direction = 'left',
  rotate = 0,
  emphasizeIndex,
}: MarqueeBandProps) {
  const doubled = [...words, ...words]
  const [patternIndex, setPatternIndex] = useState(0)
  
  // Generate multiple decoration patterns with max 4 highlights
  const patterns = words.map((_, patternIdx) => {
    // Generate all potential decorations first
    const allDecorations = doubled.map((word, index) => {
      const hash = word.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + index + patternIdx
      const startPos = hash % Math.max(1, word.length - 2)
      return { index, startPos, word, priority: hash }
    })
    
    // Sort by priority and take top 4, then mark the rest as not decorated
    const sorted = [...allDecorations].sort((a, b) => a.priority - b.priority)
    const topIndices = new Set(sorted.slice(0, 4).map(d => d.index))
    
    return allDecorations.map(decoration => ({
      shouldDecorate: topIndices.has(decoration.index) && decoration.word.length >= 4,
      startPos: decoration.startPos,
      word: decoration.word
    }))
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPatternIndex((prev) => (prev + 1) % patterns.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [patterns.length])
  
  const getDecoratedWord = (word: string, index: number) => {
    const pattern = patterns[patternIndex][index]
    
    if (!pattern.shouldDecorate || word.length < 4) return word
    
    const before = word.slice(0, pattern.startPos)
    const decorated = word.slice(pattern.startPos, pattern.startPos + 3)
    const after = word.slice(pattern.startPos + 3)
    
    return (
      <>
        {before}
        <span className="relative inline-block transition-all duration-1000 ease-in-out">
          <span className="absolute -inset-1 bg-[#C89B4A] transition-opacity duration-1000 ease-in-out" />
          <span className="relative text-[#0D0C0A] transition-colors duration-1000 ease-in-out">{decorated}</span>
        </span>
        {after}
      </>
    )
  }

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
            {getDecoratedWord(word, index)}
            <span className="mx-3 text-line">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
