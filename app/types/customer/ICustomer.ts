import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ICustomer {
    description: string;
    title: string;
    subTitle: string;
    src: StaticImport | string;
}