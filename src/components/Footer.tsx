export function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="max-w-lg font-display text-3xl text-balance text-ink md:text-4xl">
          Have something that needs to feel alive?
        </h2>

        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:hello@studioalmanac.example"
            className="font-display text-2xl italic text-gold hover:underline"
          >
            hello@studioalmanac.example
          </a>

          <ul className="flex gap-6 text-sm text-muted">
            <li>
              <a href="#" className="hover:text-ink">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-ink">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-ink">
                Back to top
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-16 text-sm text-muted">
          &copy; {new Date().getFullYear()} Studio Almanac. Built quiet.
        </p>
      </div>
    </footer>
  )
}
