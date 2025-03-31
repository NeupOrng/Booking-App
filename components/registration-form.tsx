"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import PersonalInfoForm from "./personal-info-form";
import { useMediaQuery } from "@/hooks/use-media-query";

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
];

// Sample time slots
const timeSlots = ["2:15pm", "4:00pm", "5:30pm", "7:00pm"];

export default function RegistrationForm() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(
    undefined
  );
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handlePersonalInfoSubmit = (info: {
    name: string;
    email: string;
    phone: string;
  }) => {
    setPersonalInfo(info);
    setIsFormComplete(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...personalInfo, selectedDate, selectedTimeSlot });
    alert("Booking submitted successfully!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl md:text-5xl">Book Your Event</CardTitle>
        <CardHeader className="text-2xl md:text-3xl font-bold font-serif ml-16 md:ml-24">$69.00</CardHeader>
        <CardDescription className="text-lg text-gray-600">
          Select a date and time slot to reserve your spot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="date" className="font-bold text-lg">Date</Label>
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="text-lg" id="date">
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
            <Label className="font-bold text-lg">Timeslot</Label>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`px-4 py-2 rounded-full flex items-center justify-center gap-1 transition-colors ${
                    selectedTimeSlot === slot
                      ? "bg-pink-100 text-pink-800"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedTimeSlot(slot)}
                >
                  {slot}
                  {selectedTimeSlot === slot && (
                    <Check className="h-4 w-4 text-pink-800" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Personal Info Sheet/Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="w-full py-4 h-16 text-xl"
                disabled={!selectedDate || !selectedTimeSlot}
              >
                Book Now
              </Button>
            </SheetTrigger>
            <SheetContent
              side={isDesktop ? "right" : "bottom"}
              className={isDesktop ? "sm:max-w-md" : "h-[65vh]"}
            >
              <SheetHeader>
                <SheetTitle>Your Information</SheetTitle>
                <SheetDescription>
                  Please provide your contact details to complete the booking.
                </SheetDescription>
              </SheetHeader>
              <PersonalInfoForm
                initialValues={personalInfo}
                onSubmit={handlePersonalInfoSubmit}
              />
            </SheetContent>
          </Sheet>
        </form>
      </CardContent>
    </Card>
  );
}
