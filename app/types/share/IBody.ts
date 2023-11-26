import { IFooterAdminBody } from "../admin/IAdminFooter";
import { IFormLogin } from "../auth/ILogin";
import { IFormRegister } from "../auth/IRegister";
import { IFormSettingBody, IFormSettings } from "../profile/IProfile";

export interface IAuthBody {
    body: IFormRegister | IFormLogin;
}

export interface IPatchBody {
    body: IFooterAdminBody | { password: string } | IFormSettingBody | { file: string }
}

export interface IPostBody {
    body: { categoryName: String }
}