import { IAdminProfileContent } from "@/app/types/admin/IAdminProfile";
import { BiCategoryAlt } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiMotorcycleFill } from "react-icons/pi";
import { RxBorderBottom } from "react-icons/rx";

export const adminProfileContentList: IAdminProfileContent[] = [
    {
        iconType: IoFastFoodOutline,
        title: "Products",
    },
    {
        iconType: PiMotorcycleFill,
        title: "Orders"
    },
    {
        iconType: BiCategoryAlt,
        title: "Categories"

    },
    {
        iconType: RxBorderBottom,
        title: "Footer"

    },

    {
        iconType: ImExit,
        title: "Exit"
    }
]