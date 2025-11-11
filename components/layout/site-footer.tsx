import Link from "next/link"

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Features", href: "/" },
      { label: "Pricing", href: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Help", href: "/help" },
      { label: "Contact", href: "/help#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/help#privacy" },
      { label: "Terms", href: "/help#terms" },
    ],
  },
]

const currentYear = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold">MedLink Rwanda</p>
            <p className="text-sm text-muted-foreground">
              Bridging healthcare organisations and professionals with a unified
              platform tailored for Rwanda&apos;s ecosystem.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} MedLink Rwanda. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/help#privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/help#terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

