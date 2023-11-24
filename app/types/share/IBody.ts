import { IFooterAdminBody } from "../admin/IAdminFooter";
import { IFormLogin } from "../auth/ILogin";
import { IFormRegister } from "../auth/IRegister";

export interface IAuthBody {
    body: IFormRegister | IFormLogin;
}

export interface IPatchBody {
    body: IFooterAdminBody
}