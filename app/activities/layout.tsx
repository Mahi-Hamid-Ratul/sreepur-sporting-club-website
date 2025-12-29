import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Activities | Sreepur Sporting Club",
  description: "One team, one mission. Empowering humanity for a brighter tomorrow!",
}

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
