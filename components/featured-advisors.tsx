import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TeamMemberCard } from "@/components/team-member-card"
import { teamMembers } from "@/lib/team-data"

export function FeaturedAdvisors() {
  const advisors = teamMembers.filter((member) => member.memberType === "Panel Member").slice(0, 2)

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced team who provide strategic guidance to all our initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {advisors.map((advisor) => (
            <TeamMemberCard key={advisor.id} member={advisor} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/team">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              View All Team Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
