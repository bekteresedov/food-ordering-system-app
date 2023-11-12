import { IProfileContent } from "@/app/types/profile/IProfile";
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