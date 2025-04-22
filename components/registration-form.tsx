"use client";

import React from "react";

import { useEffect, useState } from "react";
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
import axios from "@/lib/axios";
import { EventDate, IEventDate } from "@/models/eventDate";
import { ITimeslot, Timeslot } from "@/models/timeslot";
import PaymentDialog from "./payment-dialog";
import { eventDateBuilder } from "@/lib/utils";

// Sample time slots
export default function RegistrationForm() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [timeSlotsState, setTimeSlotsState] = useState<Timeslot[]>([]);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [telegramUrl, setTelegramUrl] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<EventDate>(
    new EventDate({
      id: 0,
      documentId: "",
      title: "",
      date: "",
      state: "",
      timeslots: [],
      price: 0,
      scheduleDocumentId: "",
    })
  );
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<Timeslot>(
    new Timeslot({
      id: 0,
      documentId: "",
      display_name: "",
      event_time_start_at: "",
      limit_participant: 0,
      attendee_count: 0,
      is_reach_limit: true,
    })
  );
  const initialPersonalInfo = {
    name: "",
    email: "",
    phone: "",
  }

  const [avaialableDateState, setAvaialableDateState] = useState<EventDate[]>([]);

  const fetchAvailableDates = async () => {
    try {
      const response = await axios.get(
        "/api/event/schedule/count-attendees"
      );
      const data = response.data.data.event;
      const formattedDates = eventDateBuilder(data);

      setAvaialableDateState(formattedDates);
      // Set the first date as selected if available
    } catch (error) {
      console.error("Error fetching available dates", error);
    }
  };
  const fetchConfig = async () => {
    try {
      const response = await axios.get("/api/config?populate=payment_qr_code");
      const data = response.data.data;
      setQrCodeUrl(axios.getUri() + data.payment_qr_code.url);
      setTelegramUrl(data.telegram_url);
    } catch (error) {
      console.error("Error fetching config", error);
    }
  };

  useEffect(() => {
    fetchAvailableDates();
    fetchConfig();
  }, []);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handlePersonalInfoSubmit = async (info: {
    name: string;
    email: string;
    phone: string;
  }) => {
    try {
      setIsFormComplete(true);
      const requestBody = {
        data: {
          fullname: info.name,
          phone: info.phone,
          paid_amount: selectedDate.price,
          timeslot: {
            connect: [selectedTimeSlot.documentId],
          },
          event: {
            connect: [selectedDate.documentId],
          },
          schedule: {
            connect: [selectedDate.scheduleDocumentId],
          },
        },
      };
      const response = await axios.post("/api/attendee/register", requestBody);
      setShowPaymentDialog(true);
    } catch (error) {
      console.error("Error submitting personal info", error);
      const response = error.response;
      if(response && response.status === 429) {
        alert("The time slot is full. Please select another time slot.");
        window.location.reload();
      }
      if(response && response.status === 409) {
        alert("Telegram phone number already registered for this timeslot.");
      } else {
        alert(response.error.message)
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleDateChange = (value: string) => {
    const date = avaialableDateState.find((date) => date.keyForSelect === value);
    if (date) {
      setSelectedDate(date);
      setTimeSlotsState(date.timeslots);
      setSelectedTimeSlot(
        new Timeslot({
          id: 0,
          documentId: "",
          display_name: "",
          event_time_start_at: "",
          limit_participant: 0,
          attendee_count: 0,
          is_reach_limit: true,
        })
      )
      for (const slot of date.timeslots) {
        if (!slot.is_reach_limit) {
          setSelectedTimeSlot(slot);
          break;
        }
      }
    }
  };

  if (selectedDate.documentId === "" && avaialableDateState.length > 0) {
    setSelectedDate(avaialableDateState[0]);
    setTimeSlotsState(avaialableDateState[0].timeslots);
    for (const slot of avaialableDateState[0].timeslots) {
      if (!slot.is_reach_limit) {
        setSelectedTimeSlot(slot);
        break;
      }
    }
  }
  return (
    <>
      {qrCodeUrl !== "" && (
        <PaymentDialog
          open={showPaymentDialog}
          onOpenChange={setShowPaymentDialog}
          qrcodeUrl={qrCodeUrl}
          telegramUrl={telegramUrl}
        />
      )}
      <Card className="bg-white transition-all duration-500">
        <CardHeader>
          <CardTitle className="text-4xl text-center md:text-left md:text-5xl text-[#1150ab] font-bold">
            Book Your Slot With Us
          </CardTitle>
          <CardHeader className="text-2xl md:text-3xl font-bold text-center md:text-left text-[#d54783]">
            ${selectedDate.priceForDisplay}
          </CardHeader>
          <CardDescription className="text-lg text-[#d54783]">
            Select a date and time slot to reserve your spot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 bg-white">
              <div className="w-full text-center md:text-left">
                <Label htmlFor="date" className="font-bold text-lg">
                  Date
                </Label>
              </div>
              <Select
                value={selectedDate.keyForSelect}
                onValueChange={handleDateChange}
              >
                <SelectTrigger className="text-lg bg-white" id="date">
                  <SelectValue placeholder="Select an available date" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {avaialableDateState.map((date) => (
                    <SelectItem key={date.keyForSelect} value={date.keyForSelect}>
                      {date.titleForDisplay}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="w-full text-center md:text-left">
                <Label className="font-bold text-lg">Timeslot</Label>
              </div>
              <div className="flex flex-wrap gap-2">
                {timeSlotsState.map((slot) => (
                  <button
                    key={slot.documentId}
                    type="button"
                    disabled={slot.is_reach_limit}
                    className={`px-4 py-2 text-[#d54783] rounded-full flex border border-[#d54783] items-center justify-center gap-1 transition-colors ${
                      selectedTimeSlot?.documentId === slot.documentId || slot.is_reach_limit
                        ? "bg-pink-100"
                        : "text-black hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedTimeSlot(slot)}
                  >
                    {slot.display_name}
                    {selectedTimeSlot?.documentId === slot.documentId && (
                      <Check className="h-4 w-4 text-[#d54783]" />
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
                  color="#1150ab"
                  disabled={!selectedDate || !selectedTimeSlot.isSelected || selectedDate.isOutOfStock}
                >
                  {selectedDate.isOutOfStock ? "Out of Stock" : "Book Now"}
                </Button>
              </SheetTrigger>
              <SheetContent
                side={isDesktop ? "right" : "bottom"}
                className={
                  isDesktop ? "sm:max-w-md bg-white" : "h-[65vh] bg-white"
                }
              >
                <SheetHeader>
                  <SheetTitle>Your Information</SheetTitle>
                  <SheetDescription>
                    Please provide your contact details to complete the booking.
                  </SheetDescription>
                </SheetHeader>
                <PersonalInfoForm
                  initialValues={initialPersonalInfo}
                  onSubmit={handlePersonalInfoSubmit}
                />
              </SheetContent>
            </Sheet>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
