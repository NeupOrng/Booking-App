import { ITimeslot, Timeslot } from "./timeslot";

export interface IEventDate {
    id: number;
    documentId: string;
    scheduleDocumentId: string;
    title: string;
    date: string;
    state: string;
    timeslots: ITimeslot[];
    price_for_display?: string;
    price: number;
}

export class EventDate implements IEventDate {
    id: number;
    documentId: string;
    scheduleDocumentId: string;
    title: string;
    date: string;
    state: string;
    timeslots: Timeslot[];
    price: number;
    price_for_display: string;

    constructor(data: IEventDate) {
        this.id = data.id;
        this.documentId = data.documentId;
        this.title = data.title;
        this.date = data.date;
        this.state = data.state;
        this.timeslots = data.timeslots.map((timeslot) => new Timeslot(timeslot)); 
        this.price = data.price;
        this.scheduleDocumentId = data.scheduleDocumentId;
        this.price_for_display = data.price_for_display ?? "";
    }

    get titleForDisplay() {
        return `${this.title} | ${this.date}`;
    }

    get keyForSelect() {
        return `${this.documentId}-${this.scheduleDocumentId}`;
    }

    get priceForDisplay() {
        return this.price_for_display !== "" ? this.price_for_display :`${this.price.toFixed(2)}`;
    }
}
