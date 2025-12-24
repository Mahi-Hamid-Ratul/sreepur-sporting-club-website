import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone } from "lucide-react"

interface BloodDonor {
  id: number
  name: string
  bloodType: string
  age: number
  phone: string
  location: string
  available: boolean
}

export function BloodDonorCard({ donor }: { donor: BloodDonor }) {
  const getBloodTypeColor = (bloodType: string) => {
    if (bloodType.includes("O")) return "bg-red-100 text-red-800"
    if (bloodType.includes("A")) return "bg-yellow-100 text-yellow-800"
    if (bloodType.includes("B")) return "bg-blue-100 text-blue-800"
    return "bg-purple-100 text-purple-800"
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{donor.name}</CardTitle>
            <CardDescription>Age: {donor.age}</CardDescription>
          </div>
          <Badge className={`${getBloodTypeColor(donor.bloodType)} text-xl font-bold`}>{donor.bloodType}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Location: {donor.location}
          </p>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <a href={`tel:${donor.phone}`} className="text-sm text-primary hover:underline">
              {donor.phone}
            </a>
          </div>
        </div>
        <Badge variant={donor.available ? "default" : "secondary"}>
          {donor.available ? "Available" : "Not Available"}
        </Badge>
      </CardContent>
    </Card>
  )
}
