import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#archive', label: 'Archive' },
  { href: '#studio', label: 'Studio' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  // Close the mobile menu on Escape, and return focus-friendly behaviour --
  // keyboard users should never get trapped once a panel opens.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ground/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10"
      >
        <a
          href="#top"
          className="font-display text-xl italic tracking-tight text-ink"
        >
          Studio Almanac
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-sm border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-gold hover:text-gold md:inline-block"
        >
          Start a conversation
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-line bg-ground md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-block py-3 text-lg text-gold"
                >
                  Start a conversation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
