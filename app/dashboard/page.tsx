import { Metadata } from "next"

import { DashboardScreen } from "./dashboard-screen"
export const metadata: Metadata = {
  title: "Dashboard | MedLink Rwanda",
  description:
    "Operations dashboard preview for the MedLink Rwanda rollout.",
}

export default function DashboardPage() {
  return <DashboardScreen />
}

