import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft, Sparkles } from "lucide-react"

import { SignupForm } from "@/components/auth/signup-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sign up | MedLink Rwanda",
}

export default function SignupPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-4xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-6">
        <Button variant="ghost" size="sm" asChild className="-ml-2 w-fit">
          <Link href="/auth/login" className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Already have an account?
          </Link>
        </Button>
        <Card>
          <CardHeader className="space-y-3 text-center">
            <div className="flex justify-center">
              <Badge variant="outline" className="uppercase tracking-wide">
                Early access
              </Badge>
            </div>
            <CardTitle className="text-2xl font-semibold">
              Request MedLink access
            </CardTitle>
            <CardDescription>
              Fill in your organisation details and we will onboard you once the
              pilot programme expands.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
        <div className="flex items-start gap-3 rounded-lg border border-dashed border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
          <Sparkles className="mt-0.5 size-4 text-primary" />
          <p>
            Tip: Use your Rwanda-based organisation name and contact details to
            keep everything aligned with the MedLink pilot records.
          </p>
        </div>
      </div>
    </div>
  )
}

