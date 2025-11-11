import Link from "next/link"
import { Mail, MessageCircleQuestion, Phone, Shield } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const faqs = [
  {
    question: "Is the data live?",
    answer:
      "No. Everything you see here is a curated pilot dataset modelled after upcoming MedLink backend responses. It’s safe for demos and design validation.",
  },
  {
    question: "How do I request new pilot scenarios?",
    answer:
      "Send us a message with the organisation types, relationships, or user journeys you want to explore. We iterate quickly.",
  },
  {
    question: "When will live APIs be available?",
    answer:
      "We’re targeting phased releases after we complete pilots with key partners. Follow the roadmap on the dashboard for updates.",
  },
]

const supportChannels = [
  {
    title: "Email support",
    description: "Get detailed guidance or report an issue.",
    icon: Mail,
    href: "mailto:support@medlink.rw",
  },
  {
    title: "Call MedLink",
    description: "Weekdays 08:00 – 17:00 CAT.",
    icon: Phone,
    href: "tel:+250788000123",
  },
  {
    title: "Product feedback",
    description: "Share feature ideas and workflow needs.",
    icon: MessageCircleQuestion,
    href: "mailto:feedback@medlink.rw",
  },
]

export default function HelpPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          <MessageCircleQuestion className="size-4" />
          Help centre
        </div>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          How can we assist you today?
        </h1>
        <p className="text-base text-muted-foreground">
          Whether you are preparing for a demo, validating user journeys, or
          planning integration milestones, we’re here to help.
        </p>
      </header>

      <section id="contact" className="grid gap-4 md:grid-cols-3">
        {supportChannels.map((channel) => (
          <Card key={channel.title}>
            <CardHeader className="flex flex-col gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <channel.icon className="size-5" />
              </span>
              <CardTitle className="text-lg">{channel.title}</CardTitle>
              <CardDescription>{channel.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link href={channel.href}>Contact now</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {faq.answer}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section id="privacy" className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
          <Shield className="size-4" />
          Privacy & security
        </div>
        <h2 className="text-2xl font-semibold">Data handling principles</h2>
        <p className="text-sm text-muted-foreground">
          MedLink pilot data is generated for demonstration purposes only. No
          personally identifiable patient information is ever used. When we move
          to production, strict data governance will underpin every environment.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            Secure authentication flows with JWT-based sessions (coming in live
            release).
          </li>
          <li>Role-based access controls to tailor views for each user.</li>
          <li>Audit trails for all record updates and credentialed access.</li>
        </ul>
        <Button variant="link" className="px-0" asChild>
          <Link href="/dashboard#roadmap">Review roadmap commitments</Link>
        </Button>
      </section>

      <Separator />

      <section id="terms" className="space-y-4">
        <Badge variant="outline">Terms preview</Badge>
        <h2 className="text-2xl font-semibold">Acceptable use</h2>
        <p className="text-sm text-muted-foreground">
          This preview environment is solely for product evaluation. Do not
          upload real patient data or share access credentials publicly. By using
          this site you agree to follow Rwanda’s health data protection laws and
          MedLink’s forthcoming terms of service.
        </p>
      </section>
    </div>
  )
}

