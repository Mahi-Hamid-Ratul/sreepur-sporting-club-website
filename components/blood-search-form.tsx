"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function BloodSearchForm() {
  const [bloodType, setBloodType] = useState("")

  const bloodTypes = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input placeholder="Search by name or phone..." className="flex-1" />
          <select
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
          >
            <option value="">All Blood Types</option>
            {bloodTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <Button className="bg-primary hover:bg-primary/90">Search</Button>
        </div>
      </CardContent>
    </Card>
  )
}
