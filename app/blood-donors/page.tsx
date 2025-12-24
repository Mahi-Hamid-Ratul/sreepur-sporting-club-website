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
    name: "Afran Khan Shakil",
    bloodType: "O+",
    age: 24,
    phone: "+88 01855898887",
    location: "Sreepur, Chatkhil, Noakhali",
    available: true,
  },
  {
    id: 2,
    name: "Mohammad Rafi",
    bloodType: "A+",
    age: 25,
    phone: "+88 01877622849",
    location: "Sreepur, Chatkhil, Noakhali",
    available: true,
  },
  {
    id: 3,
    name: "Shahed Hasan",
    bloodType: "O+",
    age: 24,
    phone: "+88 01877942047",
    location: "Uttara, Dhaka",
    available: true,
  },
  {
    id: 4,
    name: "MD Mahi Hamid Ratul",
    bloodType: "A+",
    age: 21,
    phone: "+88 01715160203",
    location: "Mirpur-1, Dhaka",
    available: false,
  },
  {
    id: 5,
    name: "Ahammed Kochir",
    bloodType: "O-",
    age: 28,
    phone: "+13472723788",
    location: "USA",
    available: false,
  },
  {
    id: 6,
    name: "Ashraful Islam Limon",
    bloodType: "A+",
    age: 27,
    phone: "+88 01838063579",
    location: "New Market, Dhaka",
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
