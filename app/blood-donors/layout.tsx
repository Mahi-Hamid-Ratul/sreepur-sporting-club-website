import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blood Donor | Sreepur Sporting Club",
  description: "One team, one mission. Empowering humanity for a brighter tomorrow!",
}

export default function BloodDonorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
