import IInputListSettings, { IInputListPassword, IProfileContent } from "@/app/types/profile/IProfile";
import { FaHome } from "react-icons/fa"
import { IoKey } from 'react-icons/io5'
import { PiMotorcycleFill } from "react-icons/pi"
import { ImExit } from "react-icons/im"
export const profileContentList: IProfileContent[] = [
    {
        iconType: FaHome,
        title: "Account",
    },
    {
        iconType: IoKey,
        title: "Password"

    },
    {
        iconType: PiMotorcycleFill,
        title: "Orders"
    },
    {
        iconType: ImExit,
        title: "Exit"
    }
]


export const InputListsettings: IInputListSettings[] = [
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
        name: "address",
        type: "text",
        placeholder: "Your Address",
    },
    {
        id: 5,
        name: "job",
        type: "text",
        placeholder: "Your Job",
    },

];

export const InputListPassword: IInputListPassword[] = [
    {
        id: 1,
        name: "password",
        type: "password",
        placeholder: "Your Password",
    },
    {
        id: 2,
        name: "confirmPassword",
        type: "password",
        placeholder: "Your Password Again",
    },

];