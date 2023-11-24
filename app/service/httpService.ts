import axios from "axios";
import { IResponse } from "../types/share/IResponse";
import cookie from 'js-cookie';
import { IAuthBody } from "../types/share/IBody";

const base: string = "http://localhost:5000/api";

export async function postAuth(data: IAuthBody, path: string): Promise<IResponse> {
    try {
        const res = await axios.post(`${base}/auth${path}`, data.body);
        if (res.status === 200) {
            cookie.set("token", res.data.data.accessToken, { expires: 1 });
            cookie.set("id", res.data.data.id, { expires: 1 });
        }
        return { statusCode: res.status }
    } catch (err: any) {
        return { error: err.response.data.message || "" };
    }
};
