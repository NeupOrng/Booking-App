export interface ITimeslot {
    id: number;
    documentId: string;
    display_name: string;
    event_time_start_at: string;
}

export class Timeslot implements ITimeslot {
    id: number;
    documentId: string;
    display_name: string;
    event_time_start_at: string;

    constructor(data: ITimeslot) {
        this.id = data.id;
        this.documentId = data.documentId;
        this.display_name = data.display_name;
        this.event_time_start_at = data.event_time_start_at;
    }

    get isSelected() {
        return this.documentId !== "";
    }
}