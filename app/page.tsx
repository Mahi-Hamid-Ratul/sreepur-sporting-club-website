import { Hero } from "@/components/hero"
import { FeaturedActivities } from "@/components/featured-activities"
import { RecentActivities } from "@/components/recent-activities"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedActivities />
      <RecentActivities />
      <CallToAction />
    </main>
  )
}
