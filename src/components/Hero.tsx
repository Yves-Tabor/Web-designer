import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { MarqueeBand } from './MarqueeBand'

const MARQUEE_WORDS = [
  'Product Design',
  'Motion',
  'Interaction',
  'Editorial',
  'Development',
]

/**
 * The one signature, non-user-triggered moment on the page: a single GSAP
 * timeline that reveals the headline on load, then settles the crossed
 * marquee bands into place. Every other reveal on the page is a smaller,
 * scroll-triggered Framer Motion transition -- this is the only "big" one,
 * by design.
 */
export function Hero() {
  const reduced = usePrefersReducedMotion()
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const outlineRef = useRef<HTMLSpanElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <p
          ref={eyebrowRef}
          className="mb-6 text-sm text-muted md:text-base"
        >
          Hello there, we&rsquo;re a two-person studio.
        </p>

        <h1 className="font-display text-balance text-[15vw] leading-[0.95] tracking-tight md:text-[7.5rem]">
          <span
            ref={outlineRef}
            className="block text-transparent [-webkit-text-stroke:1.5px_#F3EEE3] md:[-webkit-text-stroke:2px_#F3EEE3]"
          >
            Crafted
          </span>
          <span ref={fillRef} className="block italic text-gold">
            to feel alive.
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-8 max-w-md text-balance text-lg text-muted"
        >
          We design small interfaces with a great point of view: quiet in
          structure, expressive in motion.
        </p>
      </div>

      <div
        ref={marqueeRef}
        className="relative mt-20 flex flex-col gap-6 md:mt-28"
      >
        <MarqueeBand words={MARQUEE_WORDS} direction="left" rotate={-2} />
        <MarqueeBand
          words={MARQUEE_WORDS}
          direction="right"
          rotate={2}
          emphasizeIndex={0}
        />
      </div>
    </section>
  )
}
