"use client"

import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div>
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}
