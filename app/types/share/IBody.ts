import { IFormLogin } from "../auth/ILogin";
import { IFormRegister } from "../auth/IRegister";

export interface IAuthBody {
    body: IFormRegister | IFormLogin;
}