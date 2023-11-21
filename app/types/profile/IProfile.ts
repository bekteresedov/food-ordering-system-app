import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";
import { IUser } from "../user/IUser";

interface IBase {
    title: string;
}

interface IBaseInput {
    id: number;
    name: string;
    type: string;
    placeholder: string;
}

export interface IProfile extends IBase {
    src: StaticImport;
}

export interface IProfileContent extends IBase {
    iconType: IconType;
}

export default interface IInputListSettings extends IBaseInput {
}
export interface IFormValuesSettings {
    fullName: string;
    phoneNumber: string;
    email: string;
    job: string
    address: string;
}

export interface IInputListPassword extends IBaseInput {

}

export interface IFormValuesPassword {
    password: string
    confirmPassword: string;

}

export interface ISettings {
    id?: string | string[];
    fullname?: string;
    email?: string;
    phoneNumber?: string;
    address?: string
    job?: string;
    bio?: string;
    setState: (body: IUser) => void;
}

export interface IPassword {
    id?: string | string[];

}