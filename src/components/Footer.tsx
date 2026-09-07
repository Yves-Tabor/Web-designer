export function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="max-w-lg font-display text-3xl text-balance text-ink md:text-4xl">
          Have something that needs to feel alive?
        </h2>

        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:walvesoutis@gmail.com"
            className="font-display text-2xl italic text-gold hover:underline"
          >
            Click to send a mail.
          </a>

          <ul className="flex gap-6 text-sm text-muted">
            <li>
              <a href="https://yvestabor-website.vercel.app" className="hover:text-ink">
                My-Website
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yves-tabor-a625b4388" className="hover:text-ink">
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
          &copy; {new Date().getFullYear()} Yves Tabor - Web Designer. Built quiet.
        </p>
      </div>
    </footer>
  )
}
