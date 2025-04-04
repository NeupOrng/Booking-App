import { ITimeslot, Timeslot } from "./timeslot";

export interface IEventDate {
    id: number;
    documentId: string;
    title: string;
    date: string;
    state: string;
    timeslots: ITimeslot[];
    price: number;
    telegram: string;
    qrcode: {
        url: string;
    }
}

export class EventDate implements IEventDate {
    id: number;
    documentId: string;
    title: string;
    date: string;
    state: string;
    timeslots: Timeslot[];
    price: number;
    telegram: string;
    qrcode: {
        url: string;
    };

    constructor(data: IEventDate, baseUrl: string = "") {
        this.id = data.id;
        this.documentId = data.documentId;
        this.title = data.title;
        this.date = data.date;
        this.state = data.state;
        this.timeslots = data.timeslots.map((timeslot) => new Timeslot(timeslot)); 
        this.price = data.price;
        this.telegram = data.telegram;
        this.qrcode = data.qrcode;
        this.qrcode.url = baseUrl + this.qrcode.url;
    }

    get titleForDisplay() {
        return `${this.title} | ${this.date}`;
    }

    get priceForDisplay() {
        return `${this.price.toFixed(2)}`;
    }

    get qrcodeUrl() {
        return this.qrcode.url;
    }
}
