// import { IProduct } from "../admin/IAdminProduct";

import { IProduct } from "../menu/IMenu";

export default interface IProducts {
    inCount: number;
    data: IProduct;
    inPrice: number
}
export interface ICartState {
    products: IProducts[]
    quantity: number;
    total: number;
}
