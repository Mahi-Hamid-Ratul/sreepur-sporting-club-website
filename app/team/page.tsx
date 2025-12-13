"use client"

import { useState } from "react"
import { TeamMemberCard } from "@/components/team-member-card"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    id: 1,
    name: "MD Mahi Hamid Ratul",
    role: "Technology Editor",
    image: "/ratul.webp",
    memberType: "Panel Member",
  },
  {
    id: 2,
    name: "MD Saiful Islam Kiron",
    role: "Former Chairman",
    image: "/kiron-advisor.webp",
    memberType: "Advisor",
  },
]

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const memberTypes = ["Panel Member", "Advisor", "General Member"]
  const filteredMembers = activeFilter
    ? teamMembers.filter((member) => member.memberType === activeFilter)
    : teamMembers

  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Meet the passionate professionals dedicated to improving community health.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          <Button
            variant={activeFilter === null ? "default" : "outline"}
            onClick={() => setActiveFilter(null)}
            className="transition-all"
          >
            All Members
          </Button>
          {memberTypes.map((type) => (
            <Button
              key={type}
              variant={activeFilter === type ? "default" : "outline"}
              onClick={() => setActiveFilter(type)}
              className="transition-all"
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </main>
  )
}
