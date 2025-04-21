"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SheetClose } from "@/components/ui/sheet"

interface PersonalInfoFormProps {
  initialValues: {
    name: string
    email: string
    phone: string
  },
  onSubmit: (values: { name: string; email: string; phone: string }) => void
}

export default function PersonalInfoForm({ initialValues, onSubmit}: PersonalInfoFormProps) {
  const [name, setName] = useState(initialValues.name)
  const [email, setEmail] = useState(initialValues.email)
  const [phone, setPhone] = useState(initialValues.phone)
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  })

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
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 11)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value)
    setPhone(formattedPhone)
  }

  const validateForm = () => {
    console.log("phone", phone.replace(/\D/g, "").length)
    const formattedPhone = phone.replace(/\D/g, "");
    const newErrors = {
      name: name.trim() === "",
      phone: formattedPhone.length < 9 && formattedPhone.length > 10,
    }
    console.log(newErrors)
    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit({ name, email, phone })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <div className="space-y-2">
        <Label htmlFor="name" className={errors.name ? "text-red-500" : ""}>
          Full Name
        </Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "border-red-500 bg-white" : "bg-white"}
        />
        {errors.name && <p className="text-xs text-red-500">Please enter your name</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className={errors.phone ? "text-red-500" : ""}>
          Telegram Number
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          value={phone}
          onChange={handlePhoneChange}
          className={errors.name ? "border-red-500 bg-white" : "bg-white"}
        />
        {errors.phone && <p className="text-xs text-red-500">Please enter a valid telegram number</p>}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 pt-4">
        <SheetClose asChild className="hidden md:relative">
          <Button type="button" className="bg-white" variant="outline">
            Cancel
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button
            type="submit"
            onClick={(e) => {
              if (!validateForm()) {
                e.preventDefault()
              }
            }}
          >
            Book Now
          </Button>
        </SheetClose>
      </div>
    </form>
  )
}