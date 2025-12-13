import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

interface Activity {
  id: number
  title: string
  date: string
  location: string
  description: string
  image: string
}

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted">
        <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
        <CardDescription className="space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} />
            {activity.date}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            {activity.location}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{activity.description}</p>
      </CardContent>
    </Card>
  )
}
