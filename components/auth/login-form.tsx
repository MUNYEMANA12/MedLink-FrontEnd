"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const demoAccounts = [
  {
    label: "Operations lead",
    email: "danny.niyonzima@gmail.com",
    password: "medlink-demo",
  },
  {
    label: "Clinical supervisor",
    email: "gloria.uwase@gmail.com",
    password: "medlink-demo",
  },
]

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: LoginValues) => {
    console.info("Login attempt:", values)
  }

  const handleAutofill = (email: string, password: string) => {
    form.setValue("email", email)
    form.setValue("password", password)
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="danny.niyonzima@gmail.com"
                    type="email"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="••••••••"
                    type="password"
                    autoComplete="current-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Form>
      <div className="space-y-3">
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>
            Need an account?{" "}
            <Link href="/auth/signup" className="font-medium text-primary">
              Create one now
            </Link>
          </p>
          <p>Try a demo account to explore the dashboard instantly:</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {demoAccounts.map((account) => (
            <Button
              key={account.email}
              type="button"
              variant="outline"
              onClick={() => handleAutofill(account.email, account.password)}
            >
              Autofill {account.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

