import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Sreepur Sporting Club",
  description: "One team, one mission. Empowering humanity for a brighter tomorrow!",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
