import { IFooterAdminBody } from "../admin/IAdminFooter";
import { ICampaign, IProduct } from "../admin/IAdminProduct";
import { IFormLogin } from "../auth/ILogin";
import { IFormRegister } from "../auth/IRegister";
import { IOrder } from '../order/IOrder';
import { IFormSettingBody, IFormSettings } from "../profile/IProfile";

export interface IAuthBody {
    body: IFormRegister | IFormLogin;
}

export interface IPatchBody {
    body: IFooterAdminBody | { password: string } | IFormSettingBody | { file: string } | ICampaign | IOrder
}

export interface IPostBody {
    body: { categoryName: String } | IProduct | IOrder
}