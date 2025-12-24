import type { Metadata } from "next"
import { BloodDonorCard } from "@/components/blood-donor-card"
import { BloodSearchForm } from "@/components/blood-search-form"

export const metadata: Metadata = {
  title: "Blood Donor | Sreepur Sporting Club",
  description: "One team, one mission. Empowering humanity for a brighter tomorrow!",
}

const bloodDonors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    bloodType: "O+",
    age: 28,
    phone: "+91-9876543210",
    lastDonated: "2025-09-15",
    available: true,
  },
  {
    id: 2,
    name: "Priya Singh",
    bloodType: "A+",
    age: 32,
    phone: "+91-9876543211",
    lastDonated: "2025-10-20",
    available: true,
  },
  {
    id: 3,
    name: "Amit Patel",
    bloodType: "B+",
    age: 25,
    phone: "+91-9876543212",
    lastDonated: "2025-08-10",
    available: true,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    bloodType: "AB-",
    age: 35,
    phone: "+91-9876543213",
    lastDonated: "2025-11-05",
    available: false,
  },
  {
    id: 5,
    name: "Vikram Sharma",
    bloodType: "O+",
    age: 29,
    phone: "+91-9876543214",
    lastDonated: "2025-09-28",
    available: true,
  },
  {
    id: 6,
    name: "Anjali Gupta",
    bloodType: "A-",
    age: 27,
    phone: "+91-9876543215",
    lastDonated: "2025-10-12",
    available: true,
  },
]

export default function BloodDonorsPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Blood Donor Directory</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Connect with registered donors in our community. Together, we save lives.
          </p>
        </div>

        <div className="mb-12">
          <BloodSearchForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloodDonors.map((donor) => (
            <BloodDonorCard key={donor.id} donor={donor} />
          ))}
        </div>
      </div>
    </main>
  )
}
