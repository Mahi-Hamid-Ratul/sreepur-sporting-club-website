import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { activities } from "@/lib/activities-data"

export function RecentActivities() {
  // Get the 2 most recent activities from the shared activities data
  const recentActivities = activities.slice(0, 2)

  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Recent Activities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest initiatives and community programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentActivities.map((activity) => (
            <Card key={activity.id} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl">{activity.title}</CardTitle>
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {activity.type}
                  </span>
                </div>
                <CardDescription className="text-base">{activity.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-lg">📍</span>
                  <span className="text-sm">{activity.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
