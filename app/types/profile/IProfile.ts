import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";

export interface IProfile {
    src: StaticImport;
    title: string;
}

export interface IProfileContent {
    iconType: IconType;
    title: string;
}