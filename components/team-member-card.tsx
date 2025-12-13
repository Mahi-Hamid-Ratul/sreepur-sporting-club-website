import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  memberType?: string
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const getBadgeStyle = (type?: string) => {
    switch (type) {
      case "Panel Member":
        return "bg-primary text-white"
      case "Advisor":
        return "bg-accent text-white"
      case "General Member":
        return "bg-muted text-foreground"
      default:
        return "bg-muted text-foreground"
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 bg-muted">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <CardTitle>{member.name}</CardTitle>
            <CardDescription>{member.role}</CardDescription>
          </div>
          {member.memberType && (
            <span
              className={`text-xs font-semibold px-2 py-1 rounded whitespace-nowrap ${getBadgeStyle(member.memberType)}`}
            >
              {member.memberType}
            </span>
          )}
        </div>
      </CardHeader>
    </Card>
  )
}
