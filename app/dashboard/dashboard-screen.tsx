"use client"

import { useEffect, useMemo, useState } from "react"
import {
  Activity,
  AlertCircle,
  BarChart3,
  CheckCircle2,
  Clock4,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  organisations as organisationsSeed,
  organisationTypes as organisationTypesSeed,
  users as usersSeed,
  type Organisation,
  type OrganisationType,
  type User,
} from "@/lib/data"
import { cn } from "@/lib/utils"

type DashboardData = {
  organisations: Organisation[]
  organisationTypes: OrganisationType[]
  users: User[]
}

type Task = {
  title: string
  owner: string
  status: "In progress" | "Blocked" | "Completed"
}

type SupportTicket = {
  id: string
  topic: string
  priority: "High" | "Medium" | "Low"
  owner: string
  status: string
}

type ActivityItem = {
  title: string
  description: string
  time: string
}

type CoverageItem = {
  region: string
  facilities: number
  readiness: number
  lead: string
}

type AuditItem = {
  name: string
  owner: string
  due: string
  status: "Scheduled" | "In progress" | "Completed"
}

const operationsTasks: Task[] = [
  {
    title: "Validate provider roster updates",
    owner: "Data Operations",
    status: "In progress",
  },
  {
    title: "Confirm facility licensing with MINISANTE",
    owner: "Compliance",
    status: "Completed",
  },
  {
    title: "Configure emergency escalation contacts",
    owner: "Support",
    status: "Blocked",
  },
]

const supportTickets: SupportTicket[] = [
  {
    id: "CS-1042",
    topic: "Credential sync delays",
    priority: "High",
    owner: "Integrations",
    status: "Investigating",
  },
  {
    id: "CS-1039",
    topic: "Missing on-call rotation",
    priority: "Medium",
    owner: "Operations",
    status: "Awaiting update",
  },
  {
    id: "CS-1034",
    topic: "Clinic onboarding checklist",
    priority: "Low",
    owner: "Customer Success",
    status: "Resolved",
  },
]

const activityFeed: ActivityItem[] = [
  {
    title: "Facility onboarding review",
    description: "HuYe District Hospital submitted the readiness checklist.",
    time: "08:42",
  },
  {
    title: "Practitioner access refreshed",
    description: "4 practitioner profiles synced to reflect new departments.",
    time: "07:55",
  },
  {
    title: "Analytics snapshot exported",
    description: "Weekly facility coverage report emailed to leadership.",
    time: "07:12",
  },
]

const coverageSnapshot: CoverageItem[] = [
  { region: "Kigali City", facilities: 18, readiness: 0.92, lead: "Aimée Uwimana" },
  { region: "Southern Province", facilities: 9, readiness: 0.79, lead: "Patrick Ndayizeye" },
  { region: "Eastern Province", facilities: 6, readiness: 0.73, lead: "Janvier Mukamana" },
]

const audits: AuditItem[] = [
  {
    name: "Data quality sweep",
    owner: "Data Operations",
    due: "Nov 14",
    status: "In progress",
  },
  {
    name: "Facility credential refresh",
    owner: "Compliance",
    due: "Nov 20",
    status: "Scheduled",
  },
  {
    name: "Disaster recovery simulation",
    owner: "Platform Engineering",
    due: "Dec 04",
    status: "Scheduled",
  },
]

const roadmapMilestones = [
  {
    quarter: "Q1 2026",
    summary: "Authentication & API foundations",
    items: [
      "Launch secure authentication with token rotation.",
      "Expose organisation and practitioner REST endpoints.",
    ],
    status: "On track",
  },
  {
    quarter: "Q2 2026",
    summary: "Analytics and workflow automation",
    items: [
      "Roll out provincial analytics dashboards.",
      "Automate facility credential verification flows.",
    ],
    status: "Planned",
  },
  {
    quarter: "Q3 2026",
    summary: "Expansion & referral coordination",
    items: [
      "Introduce patient referral tracking.",
      "Expand MedLink access to regional partners beyond Kigali.",
    ],
    status: "Planned",
  },
]

function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} />
}

export function DashboardScreen() {
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        organisations: organisationsSeed,
        organisationTypes: organisationTypesSeed,
        users: usersSeed,
      })
    }, 900)

    return () => clearTimeout(timer)
  }, [])

  const isLoading = data === null

  const organisations = useMemo(
    () => (data ? data.organisations : []),
    [data]
  )
  const organisationTypes = useMemo(
    () => (data ? data.organisationTypes : []),
    [data]
  )
  const users = useMemo(() => (data ? data.users : []), [data])

  const totalActiveUsers = useMemo(
    () => users.filter((user) => user.is_active).length,
    [users]
  )

  const organisationBreakdown = useMemo(() => {
    if (!organisations.length) {
      return []
    }
    return organisationTypes.map((type) => {
      const count = organisations.filter(
        (organisation) => organisation.type_id === type.id
      ).length
      const percentage = Math.round((count / organisations.length) * 100)
      return {
        id: type.id,
        name: type.name,
        description: type.description,
        count,
        percentage,
      }
    })
  }, [organisations, organisationTypes])

  const engagementScore = useMemo(() => {
    if (!users.length) {
      return 0
    }
    return Math.round((totalActiveUsers / users.length) * 100)
  }, [totalActiveUsers, users.length])

  const metrics = useMemo(
    () => [
      {
        label: "Organisations",
        value: organisations.length.toString(),
        helper: "Facilities activated across Rwanda.",
        icon: MapPin,
      },
      {
        label: "Active practitioners",
        value: totalActiveUsers.toString(),
        helper: `${users.length} total practitioners on record.`,
        icon: Users,
      },
      {
        label: "Coverage types",
        value: organisationTypes.length.toString(),
        helper: "Hospitals, clinics, and diagnostics centres.",
        icon: Activity,
      },
      {
        label: "Engagement score",
        value: `${engagementScore}%`,
        helper: "Share of active logins across practitioner accounts.",
        icon: ShieldCheck,
      },
    ],
    [
      organisations.length,
      totalActiveUsers,
      users.length,
      organisationTypes.length,
      engagementScore,
    ]
  )

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <BarChart3 className="size-4" />
              Operations dashboard
            </div>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Real-time overview for the Rwanda rollout
            </h1>
            <p className="text-base text-muted-foreground">
              Track facilities, practitioners, and operational follow-ups—
              everything needed to keep MedLink running smoothly nationwide.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => console.log("Downloading daily operations report")}
          >
            Download daily report
          </Button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="flex items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.label}
              </CardTitle>
              <metric.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-3xl font-semibold">{metric.value}</div>
              )}
              <p className="mt-2 text-xs text-muted-foreground">
                {metric.helper}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Organisations by type</CardTitle>
            <CardDescription>
              Snapshot of facilities connected to MedLink today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton className="h-4 w-32" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell className="text-right">
                          <Skeleton className="ml-auto h-4 w-10" />
                        </TableCell>
                      </TableRow>
                    ))
                  : organisationBreakdown.map((type) => (
                      <TableRow key={type.id}>
                        <TableCell className="space-y-2">
                          <div className="font-medium">{type.name}</div>
                          <div className="h-2 rounded-full bg-muted">
                            <div
                              className="h-2 rounded-full bg-primary transition-all"
                              style={{ width: `${type.percentage}%` }}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {type.description}
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {type.count}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="space-y-4">
          <CardHeader>
            <CardTitle>Coverage focus</CardTitle>
            <CardDescription>
              Regional rollout leads coordinating go-live readiness.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {(isLoading ? [] : coverageSnapshot).map((item) => (
              <div
                key={item.region}
                className="rounded-xl border border-muted p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{item.region}</p>
                    <p className="text-xs text-muted-foreground">
                      Lead: {item.lead}
                    </p>
                  </div>
                  <Badge variant="outline" className="font-medium">
                    {item.facilities} facilities
                  </Badge>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-muted-foreground">
                    Readiness {Math.round(item.readiness * 100)}%
                  </p>
                  <div className="mt-1 h-2 rounded-full bg-muted">
                    <div
                      className={cn(
                        "h-2 rounded-full transition-all",
                        item.readiness > 0.85
                          ? "bg-emerald-500"
                          : item.readiness > 0.7
                            ? "bg-amber-500"
                            : "bg-destructive"
                      )}
                      style={{ width: `${item.readiness * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="space-y-3">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Operational tracker</CardTitle>
              <CardDescription>
                Monitor the status of the most important rollout tasks.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {(isLoading ? [] : operationsTasks).map((task) => (
              <div
                key={task.title}
                className="flex flex-col gap-2 rounded-lg border border-muted/60 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium">{task.title}</p>
                  <p className="text-xs text-muted-foreground">
                    Owner: {task.owner}
                  </p>
                </div>
                <Badge
                  variant={
                    task.status === "Completed"
                      ? "default"
                      : task.status === "In progress"
                        ? "outline"
                        : "destructive"
                  }
                  className="w-fit"
                >
                  {task.status}
                </Badge>
              </div>
            ))}
            {isLoading && (
              <div className="space-y-3">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming audits</CardTitle>
            <CardDescription>
              Confirm ownership and deadlines for compliance work.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {(isLoading ? [] : audits).map((audit) => (
              <div key={audit.name} className="space-y-2 rounded-lg bg-muted/40 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">{audit.name}</p>
                  <Badge variant="outline">{audit.due}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Owner: {audit.owner}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium">
                  {audit.status === "Completed" ? (
                    <CheckCircle2 className="size-4 text-emerald-500" />
                  ) : (
                    <Clock4 className="size-4 text-amber-500" />
                  )}
                  {audit.status}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="space-y-3">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Support desk</CardTitle>
            <CardDescription>
              Tickets raised by facilities and practitioner teams.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Topic</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead className="text-right">Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton className="h-4 w-12" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-24" />
                        </TableCell>
                        <TableCell className="text-right">
                          <Skeleton className="ml-auto h-4 w-16" />
                        </TableCell>
                      </TableRow>
                    ))
                  : supportTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-medium">
                          {ticket.id}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {ticket.topic}
                        </TableCell>
                        <TableCell>{ticket.owner}</TableCell>
                        <TableCell className="flex justify-end">
                          <Badge
                            variant={
                              ticket.priority === "High"
                                ? "destructive"
                                : ticket.priority === "Medium"
                                  ? "default"
                                  : "outline"
                            }
                          >
                            {ticket.priority}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Activity feed</CardTitle>
            <CardDescription>
              Automatic updates from the past few hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {(isLoading ? [] : activityFeed).map((item) => (
              <div
                key={item.title}
                className="space-y-1.5 rounded-lg border border-muted/50 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{item.title}</p>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="space-y-3">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <section id="roadmap" className="space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="outline">Roadmap</Badge>
          <h2 className="text-2xl font-semibold">Delivery milestones</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {roadmapMilestones.map((stage) => (
            <Card key={stage.quarter} className="flex h-full flex-col">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg">{stage.quarter}</CardTitle>
                  <Badge
                    variant={
                      stage.status === "On track" ? "default" : "secondary"
                    }
                  >
                    {stage.status}
                  </Badge>
                </div>
                <CardDescription>{stage.summary}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="rounded-2xl border border-dashed border-primary/30 p-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-foreground">Need a deeper dive?</p>
            <p>
              Wire these tiles to your production APIs to keep operations,
              clinical leadership, and support teams in sync.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <AlertCircle className="size-4" />
            Simulated loading shown above to mirror API latency.
          </div>
        </div>
      </footer>
    </div>
  )
}

