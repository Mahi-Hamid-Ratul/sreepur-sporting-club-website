import type { Metadata } from "next"
import { ActivityCard } from "@/components/activity-card"

export const metadata: Metadata = {
  title: "Activities | Community Health Initiative",
  description: "Browse our community activities and health awareness programs",
}

const activities = [
  {
    id: 1,
    title: "Blood Donation Camp",
    date: "Every Saturday",
    location: "Community Center Hall",
    description: "Join us for regular blood donation camps. All healthy individuals welcome to donate and save lives.",
    image: "/blood-donation-camp.jpg",
  },
  {
    id: 2,
    title: "Health Awareness Seminar",
    date: "First Sunday of Month",
    location: "Central Library",
    description: "Learn about nutrition, fitness, and preventive healthcare from our expert speakers.",
    image: "/health-awareness-seminar.jpg",
  },
  {
    id: 3,
    title: "Community Wellness Walk",
    date: "Every Wednesday",
    location: "City Park",
    description: "Join our morning wellness walk. Free fitness activity for all age groups.",
    image: "/community-wellness-walk.jpg",
  },
  {
    id: 4,
    title: "Medical Camp for Underprivileged",
    date: "Third Saturday",
    location: "Local NGO Office",
    description: "Free health checkups and medical consultations for those in need.",
    image: "/medical-camp.jpg",
  },
]

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Activities</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Join us in making a difference. Explore all our community programs and health initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </main>
  )
}
