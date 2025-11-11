import {
  Building2,
  Globe2,
  HeartPulse,
  UsersRound,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const milestones = [
  {
    title: "Local-first approach",
    description:
      "MedLink partners with Rwanda’s Ministry of Health to ensure every workflow respects national requirements.",
    icon: Globe2,
  },
  {
    title: "Provider enablement",
    description:
      "From tertiary hospitals in Kigali to rural health posts, MedLink helps teams stay coordinated.",
    icon: HeartPulse,
  },
  {
    title: "People-centric",
    description:
      "Our platform highlights the practitioners powering Rwanda’s care network and keeps them connected.",
    icon: UsersRound,
  },
]

const focusAreas = [
  {
    title: "Health system visibility",
    details:
      "Aggregate trustworthy data across hospitals, clinics, and diagnostics centres to understand coverage region by region.",
  },
  {
    title: "Digital patient experience",
    details:
      "Surface consistent provider information to the public and streamline referrals and remote consultations.",
  },
  {
    title: "Operational excellence",
    details:
      "Enable operations teams to audit data quality, run analytics, and deliver tailored support to every facility.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          <Building2 className="size-4" />
          Who we are
        </div>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Building the connective tissue for Rwanda’s healthcare system
        </h1>
        <p className="text-base text-muted-foreground">
          MedLink is a healthcare coordination platform designed to bring every
          organisation, practitioner, and patient touchpoint into alignment. We
          are piloting in Rwanda with a representative dataset that mirrors the
          planned backend services, helping teams validate and iterate quickly.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {focusAreas.map((area) => (
          <Card key={area.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{area.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{area.details}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our commitments</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {milestones.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader className="flex flex-col gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </span>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-muted/50 p-8">
        <h2 className="text-2xl font-semibold">Why a pilot environment?</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Before releasing production APIs, we collaborate with clinicians,
          administrators, and product partners to ensure data models and flows
          reflect real-world operations. This site showcases the future MedLink
          experience while keeping experimentation safe, fast, and transparent.
        </p>
      </section>
    </div>
  )
}

