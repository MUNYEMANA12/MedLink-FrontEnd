import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Log in | MedLink Rwanda",
}

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-4xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <Button variant="ghost" size="sm" asChild className="-ml-2 w-fit">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </Button>
        <Card>
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center">
              <Badge variant="outline" className="uppercase tracking-wide">
                Mock auth
              </Badge>
            </div>
            <CardTitle className="text-2xl font-semibold">
              Sign in to MedLink
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Use the credential patterns below to simulate the upcoming
              authentication experience.
            </p>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        <div className="text-center text-xs text-muted-foreground">
          <p>
            Hint: Try{" "}
            <span className="font-medium">danny.niyonzima@gmail.com</span> with
            any 6+ character password to go through the flow.
          </p>
        </div>
      </div>
    </div>
  )
}

