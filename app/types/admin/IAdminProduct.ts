export interface IExtraProduct {
    title?: string;
    price?: string;
}

export interface IProductBody {
    category_id: number;
    productName: String;
    description: String;
    price: String;
    img: String;
    extraOptions: any;
}