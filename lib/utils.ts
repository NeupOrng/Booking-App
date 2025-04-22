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
    event.schedules.forEach((schedule) => {
      const timeslots = schedule.timeslots.map((timeslot) => ({
        id: 0,
        documentId: timeslot.documentId,
        display_name: timeslot.display_name,
        event_time_start_at: timeslot.event_time,
        limit_participant: timeslot.limit_participant,
        attendee_count: timeslot.attendee_count,
        is_reach_limit: timeslot.is_reach_limit,
      }));

      const eventDate = new EventDate({
        id: 0,
        documentId: event.documentId,
        title: event.title,
        date: schedule.date,
        state: event.state,
        timeslots: timeslots,
        price: event.price,
        price_for_display: event.price_for_display,
        scheduleDocumentId: schedule.documentId,
      });

      eventdateList.push(eventDate);
    });
  });

  return eventdateList;
}

export function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];

  // Get ordinal suffix
  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return `${dayName} ${day}${getOrdinal(day)} ${monthName}`;
}
