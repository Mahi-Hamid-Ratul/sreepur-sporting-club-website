"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  onSearch: (searchText: string, bloodType: string) => void
}

export function BloodSearchForm({ onSearch }: Props) {
  const [searchText, setSearchText] = useState("")
  const [bloodType, setBloodType] = useState("")

  const bloodTypes = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search by name or phone..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1"
          />

          <Select value={bloodType} onValueChange={setBloodType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="All Blood Types" />
            </SelectTrigger>
            <SelectContent>
              {bloodTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            onClick={() => onSearch(searchText, bloodType)}
            className="bg-primary hover:bg-primary/90"
          >
            Search
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
