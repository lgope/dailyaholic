export type TModalType = "addEvent";

export interface IDaysData {
    [key: string]: {
        events: string[];
    };
}

export interface IEvents {
    [key: string]: {
        title: string;
        startDate: Date;
        endDate: Date;
    };
}

