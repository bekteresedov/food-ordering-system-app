import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";

interface IBase {
    title: string;
}
export interface IProfile extends IBase {
    src: StaticImport;
}

export interface IProfileContent extends IBase {
    iconType: IconType;
}

export default interface IInputListSettings {
    id: number;
    name: string;
    type: string;
    placeholder: string;
}
export interface IFormValuesSettings {
    fullName: string;
    phoneNumber: string;
    email: string;
    job: string
    address: string;
    bio: string;


}

