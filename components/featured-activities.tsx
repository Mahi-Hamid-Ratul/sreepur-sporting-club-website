import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedActivities() {
  const activities = [
    {
      title: "Blood Donation Camps",
      description: "Regular blood donation camps held every Saturday at community centers.",
      icon: "🩸",
    },
    {
      title: "Wellbeing in Sport",
      description: "Workshops supporting wellbeing through sport nutrition and fitness.",
      icon: "⚽",
    },
    {
      title: "Community Support",
      description: "Medical camps and free consultations for underprivileged communities.",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to making a meaningful difference within the sporting and social work community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="text-4xl mb-2">{activity.icon}</div>
                <CardTitle>{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{activity.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/activities">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Activities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
