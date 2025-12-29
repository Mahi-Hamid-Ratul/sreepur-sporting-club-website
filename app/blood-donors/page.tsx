"use client"

import { useState } from "react"
import { BloodDonorCard } from "@/components/blood-donor-card"
import { BloodSearchForm } from "@/components/blood-search-form"

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
  const [filteredDonors, setFilteredDonors] = useState(bloodDonors)

  const handleSearch = (searchText: string, bloodType: string) => {
    const result = bloodDonors.filter((donor) => {
      const matchesText =
        donor.name.toLowerCase().includes(searchText.toLowerCase()) ||
        donor.phone.includes(searchText)

      const matchesBlood =
        bloodType === "" || donor.bloodType === bloodType

      return matchesText && matchesBlood
    })

    setFilteredDonors(result)
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <BloodSearchForm onSearch={handleSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredDonors.length ? (
            filteredDonors.map((donor) => (
              <BloodDonorCard key={donor.id} donor={donor} />
            ))
          ) : (
            <p className="text-muted-foreground">No donors found</p>
          )}
        </div>
      </div>
    </main>
  )
}