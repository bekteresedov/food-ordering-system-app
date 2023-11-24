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

