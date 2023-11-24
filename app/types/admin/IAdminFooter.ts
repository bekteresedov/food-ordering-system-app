export interface IFooterResponse {
    location: string;
    email: string;
    phoneNumber: string;
    description: string;
    openingDay: string;
    openingHour: string;
}

export interface IAdminFooterForm {
    location: string;
    email: string;
    phoneNumber: string;
    description: string;
    day: string;
    time: string;

}

export interface IFooterAdminBody {
    location: string;
    email: string;
    phoneNumber: string;
    description: string;
    openingDay: string;
    openingHour: string;
}