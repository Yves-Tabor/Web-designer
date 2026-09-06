import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { MarqueeBand } from './MarqueeBand'

const MARQUEE_WORDS = [
  'Modern Design',
  'User Experience',
  'Visual Story',
  'Digital Craft',
  'Web Innovation',
]

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const outlineRef = useRef<HTMLSpanElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  
  const reduceMotionFramer = useReducedMotion()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150], { clamp: false })
  const y2 = useTransform(scrollY, [0, 500], [0, 100], { clamp: false })
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useLayoutEffect(() => {
    const targets = [
      eyebrowRef.current,
      outlineRef.current,
      fillRef.current,
      subRef.current,
      marqueeRef.current,
    ]
    if (targets.some((t) => !t)) return

    if (reduced) {
      // Skip straight to the end state -- no timeline, no clipping tricks,
      // just the finished layout. Nothing in this section is essential
      // information that only the animation reveals, so this is safe.
      gsap.set(targets, { clearProps: 'all' })
      return
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.set(eyebrowRef.current, { opacity: 0, y: 12 })
      .set([outlineRef.current, fillRef.current], {
        opacity: 1,
        clipPath: 'inset(0 100% 0 0)',
      })
      .set(subRef.current, { opacity: 0, y: 12 })
      .set(marqueeRef.current, { opacity: 0, y: 32 })
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.1)
      .to(
        outlineRef.current,
        { clipPath: 'inset(0 0% 0 0)', duration: 0.9 },
        0.35
      )
      .to(
        fillRef.current,
        { clipPath: 'inset(0 0% 0 0)', duration: 0.9 },
        0.6
      )
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.95)
      .to(marqueeRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.05)

    return () => {
      tl.kill()
    }
  }, [reduced])

  return (
    <section
      id="top"
      className="sticky top-0 z-0 flex min-h-screen flex-col justify-center overflow-hidden pt-28"
    >
      <motion.div 
        style={{ 
          y: reduceMotionFramer ? 0 : y1,
          opacity: reduceMotionFramer ? 1 : opacity
        }}
        className="mx-auto w-full max-w-6xl px-6 md:px-10"
      >
        <p
          ref={eyebrowRef}
          className="mb-6 text-sm text-muted md:text-base"
        >
          The evolution of digital experiences
        </p>

        <h1 className="font-display text-balance text-[15vw] leading-[0.95] tracking-tight md:text-[7.5rem]">
          <span
            ref={outlineRef}
            className="block text-transparent [-webkit-text-stroke:1.5px_#F3EEE3] md:[-webkit-text-stroke:2px_#F3EEE3]"
          >
            Web Design
          </span>
          <span ref={fillRef} className="block italic text-gold">
            Reimagined.
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-8 max-w-md text-balance text-lg text-muted"
        >
          Where form meets function in the digital age. Modern interfaces that tell stories, create connections, and leave lasting impressions.
        </p>
      </motion.div>

      <motion.div
        ref={marqueeRef}
        style={{ y: reduceMotionFramer ? 0 : y2 }}
        className="relative mt-20 flex flex-col gap-6 md:mt-28"
      >
        <MarqueeBand words={MARQUEE_WORDS} direction="left" rotate={-2} />
        <MarqueeBand
          words={MARQUEE_WORDS}
          direction="right"
          rotate={2}
          emphasizeIndex={0}
        />
      </motion.div>
    </section>
  )
}
