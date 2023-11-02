import { IInputList } from "@/app/types/reservation/IReservation";

export const inputs: IInputList[] = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        placeholder: "Your Full Name",
    },
    {
        id: 2,
        name: "phoneNumber",
        type: "number",
        placeholder: "Your Phone Number",
    },
    {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Your Email Address",
    },
    {
        id: 4,
        name: "persons",
        type: "number",
        placeholder: "How Many Persons?",
    },
    {
        id: 5,
        name: "date",
        placeholder: "Date",
        type: "datetime-local",
    },
];