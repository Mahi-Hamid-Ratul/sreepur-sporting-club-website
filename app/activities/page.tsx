"use client"

import { ActivityCard } from "@/components/activity-card"
import { activities } from "@/lib/activities-data"

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
