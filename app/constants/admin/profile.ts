import IAdminInputList, { IAdminProfileContent } from "@/app/types/admin/IAdminProfile";
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



export const adminInputs: IAdminInputList[] = [
    {
        id: 1,
        name: "location",
        type: "text",
        placeholder: "Your Location",
    },

    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Your Email Address",
    },
    {
        id: 3,
        name: "phoneNumber",
        type: "text",
        placeholder: "Your Phone Number",
    },
    {
        id: 4,
        name: "description",
        type: "text",
        placeholder: "Your Description",
    },
    {
        id: 5,
        name: "day",
        placeholder: "Update Day",
        type: "text",
    },
    {
        id: 5,
        name: "time",
        placeholder: "Update Time",
        type: "text",
    },
];