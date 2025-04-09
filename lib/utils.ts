import { EventDate } from "@/models/eventDate"
import { EventDateData } from "@/models/types/eventDateData";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function eventDateBuilder(data: EventDateData[]): EventDate[] {
  const eventdateList: EventDate[] = [];

  data.forEach((event: EventDateData) => {
    console.log("event", event);
    event.schedules.forEach((schedule) => {
      const timeslots = schedule.timeslots.map((timeslot) => ({
        id: 0,
        documentId: timeslot.documentId,
        display_name: timeslot.display_name,
        event_time_start_at: timeslot.event_time,
      }));

      const eventDate = new EventDate({
        id: 0,
        documentId: event.documentId,
        title: event.title,
        date: schedule.date,
        state: event.state,
        timeslots: timeslots,
        price: event.price,
        scheduleDocumentId: schedule.documentId,
      });

      eventdateList.push(eventDate);
    });
  });

  return eventdateList;
}
