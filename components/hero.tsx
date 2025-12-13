import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  const heroImageUrl = "/football-team-banner.webp"

  return (
    <section className="relative h-screen md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImageUrl || "/placeholder.svg"}
          alt="Community Health Initiative Banner"
          fill
          className="object-cover brightness-70"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 bg-gradient-to-r from-primary/95 to-primary/70 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Sreepur Sporting Club</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 text-white">
              One team, one mission - Empowering humanity for a brighter tomorrow!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blood-donors">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Find Donors
                </Button>
              </Link>
              <Link href="/activities">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  Explore Activities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
