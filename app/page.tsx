import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  ShieldCheck,
  Stethoscope,
  Users as UsersIcon,
  Workflow,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  organisations,
  organisationTypes,
  users,
} from "@/lib/data"

const typeLookup = new Map(
  organisationTypes.map((type) => [type.id, type])
)

const organisationSummaries = organisations.map((organisation) => ({
  ...organisation,
  typeName: organisation.type_id
    ? typeLookup.get(organisation.type_id)?.name ?? "Unknown"
    : "Unassigned",
}))

const userSummaries = users.map((user) => ({
  ...user,
  organisationName: user.organisation_id
    ? organisations.find(
        (organisation) => organisation.id === user.organisation_id
      )?.name ?? "Unassigned"
    : "Unassigned",
}))

const stats = [
  {
    label: "Organisations",
    value: organisations.length,
    helper: "Healthcare facilities already connected to MedLink.",
  },
  {
    label: "Organisation Types",
    value: organisationTypes.length,
    helper: "Classification options mapped from backend schemas.",
  },
  {
    label: "Active Practitioners",
    value: users.filter((user) => user.is_active).length,
    helper: `${users.length} total professionals in the sample.`,
  },
]

const features = [
  {
    title: "Unified Profiles",
    description:
      "Keep organisation and practitioner details aligned through a single source of truth.",
    icon: UsersIcon,
  },
  {
    title: "Clinical Insights",
    description:
      "Visualise care coverage across Kigali, Gasabo, and beyond with actionable dashboards.",
    icon: Stethoscope,
  },
  {
    title: "Secure By Design",
    description:
      "Adopt MedLink workflows that respect Rwanda’s healthcare data regulations from day one.",
    icon: ShieldCheck,
  },
]

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=720&q=80",
    alt: "Healthcare professionals collaborating",
  },
  {
    src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=720&q=80",
    alt: "Doctor reviewing patient data on a tablet",
  },
]

const journeySteps = [
  {
    title: "1. Capture accurate data",
    description:
      "Collect facility and practitioner details in minutes using guided checklists tailored for Rwanda.",
    icon: Workflow,
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=720&q=80",
  },
  {
    title: "2. Validate and approve",
    description:
      "Compliance teams verify credentials, roles, and coverage. Assign tasks to specialists and track completion.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=720&q=80",
  },
  {
    title: "3. Monitor operations",
    description:
      "Surface live KPIs, spot gaps, and send proactive alerts to every region from a unified dashboard.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1576765607924-3f7b84b1f80a?auto=format&fit=crop&w=720&q=80",
  },
]

const successStories = [
  {
    title: "Kigali City pilot",
    description:
      "MedLink helped the Kigali operations team reduce onboarding time by 47% by centralising facility contacts and credential checks.",
  },
  {
    title: "Provincial data audit",
    description:
      "Regional supervisors resolved duplicate practitioner records in a single working session, ensuring accurate headcount reporting.",
  },
  {
    title: "National insight",
    description:
      "Executives used MedLink analytics to highlight resource gaps before quarterly planning, improving staffing allocation decisions.",
  },
]

const engagementHighlights = [
  {
    title: "Daily readiness pulse",
    description:
      "Review facility readiness, practitioner activity, and outstanding tasks at a glance.",
    icon: CalendarCheck,
  },
  {
    title: "Coordinated outreach",
    description:
      "Assign follow-ups to operations, compliance, or success teams—the system keeps everyone aligned.",
    icon: UsersIcon,
  },
  {
    title: "Insightful reporting",
    description:
      "Export tailored reports for Ministry stakeholders with a single click.",
    icon: Stethoscope,
  },
]

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8 lg:py-24">
          <div className="space-y-6 lg:w-1/2">
            <Badge variant="outline" className="uppercase tracking-wide">
              Rwanda pilot
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Connect Rwanda’s healthcare ecosystem with MedLink
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience the end-to-end provider journey using real-world
              structures from the MedLink backend—available today without
              waiting on live APIs.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/dashboard" className="flex items-center gap-2">
                  View dashboard <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/auth/signup">Create an account</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {heroImages.map((image, index) => (
              <div
                key={image.alt}
                className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={720}
                  height={540}
                  className="h-64 w-full object-cover transition-all duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute bottom-4 left-4 space-y-1 text-sm text-background">
                  <p className="font-semibold uppercase tracking-wide">
                    MedLink in action
                  </p>
                  <p className="text-xs text-background/80">
                    Teams collaborating across facilities
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {engagementHighlights.map((highlight) => (
            <Card key={highlight.title} className="h-full border-primary/10">
              <CardHeader className="flex flex-row items-start gap-3 pb-2">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <highlight.icon className="size-4" />
                </span>
                <div>
                  <CardTitle className="text-base font-semibold">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription className="pt-1 text-xs">
                    {highlight.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">By the numbers</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="pb-2">
                <CardDescription>{stat.label}</CardDescription>
                <CardTitle className="text-3xl font-semibold">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.helper}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              The MedLink difference
            </h2>
            <p className="text-sm text-muted-foreground">
              Combine structured healthcare data with coordinated workflows to
              manage nationwide rollouts.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/about" className="flex items-center gap-2">
              Learn more
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-primary/10">
              <CardHeader className="flex flex-col gap-3 pb-2">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </span>
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden border-primary/10">
          <CardHeader>
            <CardTitle>How it works</CardTitle>
            <CardDescription>
              A guided path from data capture to operational oversight.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            {journeySteps.map((step, index) => (
              <div
                key={step.title}
                className="space-y-3 rounded-xl border border-muted/40 bg-background/90 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.icon className="size-5" />
                  </span>
                  <p className="text-sm font-semibold">{step.title}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
                <div className="relative h-28 overflow-hidden rounded-lg">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={720}
                    height={480}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Operational snapshot
            </h2>
            <p className="text-sm text-muted-foreground">
              Tables below mirror backend response formats for organisations and
              practitioners.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/dashboard" className="flex items-center gap-2">
              Explore dashboard
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Organisations</CardTitle>
              <CardDescription>
                Structure matches{" "}
                <span className="font-medium">OrganisationResponse</span>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {organisationSummaries.map((organisation) => (
                    <TableRow key={organisation.id}>
                      <TableCell>
                        <div className="font-medium">{organisation.name}</div>
                        <p className="text-xs text-muted-foreground">
                          {organisation.address}
                        </p>
                      </TableCell>
                      <TableCell>{organisation.typeName}</TableCell>
                      <TableCell>
                        <div className="text-sm">{organisation.email}</div>
                        <p className="text-xs text-muted-foreground">
                          {organisation.phone}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Practitioners</CardTitle>
              <CardDescription>
                Aligns with the{" "}
                <span className="font-medium">UserResponse</span> schema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Practitioner</TableHead>
                    <TableHead>Organisation</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userSummaries.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="font-medium">{user.full_name}</div>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </TableCell>
                      <TableCell>{user.organisationName}</TableCell>
                      <TableCell>
                        <Badge
                          variant={user.is_active ? "default" : "secondary"}
                        >
                          {user.is_active ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl rounded-2xl bg-muted/50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Ready to validate your workflows?
            </h2>
            <p className="text-sm text-muted-foreground">
              The MedLink Rwanda pilot environment is purpose-built for product
              design, stakeholder demos, and integration planning. Explore the
              interactive dashboard or sign up to simulate onboarding flows.
            </p>
            <div className="grid gap-4 rounded-xl border border-dashed border-primary/30 bg-background p-4 md:grid-cols-3">
              {successStories.map((story) => (
                <div key={story.title} className="space-y-1">
                  <p className="text-sm font-semibold text-primary">
                    {story.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {story.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button asChild size="lg">
              <Link href="/auth/login">Go to login</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/help">Get help</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
