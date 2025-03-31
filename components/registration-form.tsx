"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

// Sample dates (dummy data that would normally come from backend)
const availableDates = [
  { value: "2025-06-01", label: "June 1, 2025" },
  { value: "2025-06-02", label: "June 2, 2025" },
  { value: "2025-06-03", label: "June 3, 2025" },
  { value: "2025-06-04", label: "June 4, 2025" },
  { value: "2025-06-05", label: "June 5, 2025" },
  { value: "2025-06-08", label: "June 8, 2025" },
  { value: "2025-06-09", label: "June 9, 2025" },
  { value: "2025-06-10", label: "June 10, 2025" },
]

// Sample time slots
const timeSlots = ["2:15pm", "4:00pm", "5:30pm", "7:00pm"]

export default function RegistrationForm() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ name, email, phone, selectedDate, selectedTimeSlot })
    alert("Booking submitted successfully!")
  }

  // Simple phone number formatter
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, "")

    // Apply formatting based on length
    if (phoneNumber.length <= 3) {
      return phoneNumber
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value)
    setPhone(formattedPhone)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Event</CardTitle>
        <CardHeader className="font-bold text-xl">$69.00</CardHeader>
        <CardDescription>Book and pay with KHQR</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div> */}

          <div className="space-y-2">
            <Label htmlFor="date">Select Date</Label>
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger id="date">
                <SelectValue placeholder="Select an available date" />
              </SelectTrigger>
              <SelectContent>
                {availableDates.map((date) => (
                  <SelectItem key={date.value} value={date.value}>
                    {date.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Timeslot</Label>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`px-4 py-2 rounded-full flex items-center justify-center gap-1 transition-colors ${
                    selectedTimeSlot === slot ? "bg-pink-100 text-pink-800" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedTimeSlot(slot)}
                >
                  {slot}
                  {selectedTimeSlot === slot && <Check className="h-4 w-4 text-pink-800" />}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full text-xl"
            size="lg"
            disabled={!selectedDate || !selectedTimeSlot || !name || !email || !phone}
          >
            Book Now
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

