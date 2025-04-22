export type EventDateData = {
    documentId: string,
    title: string,
    state: string,
    price: number,
    price_for_display?: string,
    schedules: {
        documentId: string,
        date: string,
        timeslots: {
            documentId: string,
            display_name: string,
            event_time: string,
            limit_participant: number,
            attendee_count: number,
            is_reach_limit: boolean,
        }[]
    }[]
}