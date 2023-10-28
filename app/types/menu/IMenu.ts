export interface IMenu {
    categoryName: string;
    product: IProduct[];

}

export interface IProduct {
    src: string;
    title: string;
    subTitle: string;
    price: number;

}