import { IconType } from "react-icons";

export interface IAdminProfileContent {
    title: string
    iconType: IconType;
}

export default interface IAdminInputList {
    id: number;
    name: string;
    type: string;
    placeholder: string;
}

export interface IAdminFormValues {
    location: string;
    email: string;
    phoneNumber: string;
    description: string;
    day: string;
    time: string;

}