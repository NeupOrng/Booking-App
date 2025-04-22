export interface ITimeslot {
    id: number;
    documentId: string;
    display_name: string;
    event_time_start_at: string;
    limit_participant: number;
    attendee_count: number;
    is_reach_limit: boolean;
}

export class Timeslot implements ITimeslot {
    id: number;
    documentId: string;
    display_name: string;
    event_time_start_at: string;
    limit_participant: number;
    attendee_count: number;
    is_reach_limit: boolean;

    constructor(data: ITimeslot) {
        this.id = data.id;
        this.documentId = data.documentId;
        this.display_name = data.display_name;
        this.event_time_start_at = data.event_time_start_at;
        this.limit_participant = data.limit_participant;
        this.attendee_count = data.attendee_count;
        this.is_reach_limit = data.is_reach_limit;
    }

    get isSelected() {
        return this.documentId !== "";
    }
}