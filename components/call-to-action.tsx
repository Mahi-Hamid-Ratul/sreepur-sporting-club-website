import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6">Be Part of the Change</h2>
        <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto mb-8">
          Every donation saves a life. Join our community and make a real difference today.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Involved
          </Button>
        </Link>
      </div>
    </section>
  )
}
