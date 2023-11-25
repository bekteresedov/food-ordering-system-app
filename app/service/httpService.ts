import axios from "axios";
import { IResponse } from "../types/share/IResponse";
import cookie from 'js-cookie';
import { IAuthBody, IPatchBody, IPostBody } from "../types/share/IBody";

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


export async function patchHeader(path: string, data: IPatchBody): Promise<IResponse> {
    try {
        const response = await axios.patch(
            `${base}${path}`,
            data.body,
            {
                headers: {
                    Authorization: cookie.get("token"),
                },
            }
        );

        return { statusCode: response.status, data: response.data.data }
    } catch (error: any) {
        return { error: error.response.data.message || "" };

    }
}

export async function postHeader(data: IPostBody, path: string): Promise<IResponse> {
    try {
        const response = await axios.post(`${base + path}`, data.body, {
            headers: {
                Authorization: cookie.get("token"),
            },
        });

        return { statusCode: response.status, data: response.data.data }

    } catch (err: any) {
        console.log(err);

        return { error: err.response.data.message || "" };
    }
};

export async function deleteHeader(path: string): Promise<IResponse> {
    try {
        const response = await axios.delete(`${base + path}`, {
            headers: {
                Authorization: cookie.get("token"),
            },
        });

        return { statusCode: response.status }

    } catch (err: any) {
        console.log(err);

        return { error: err.response.data.message || "" };
    }
};

export async function getHeader(path: string): Promise<IResponse> {
    try {
        const response = await axios.get(`${base + path}`, {
            headers: {
                Authorization: cookie.get("token"),
            },
        });
        return { statusCode: response.status, data: response.data.data }
    } catch (error: any) {
        return { error: error.response.data.message || "" };
    }
}

export async function get(path: string): Promise<IResponse> {
    try {
        const response = await axios.get(`${base + path}`);
        return { statusCode: response.status, data: response.data.data }
    } catch (error: any) {
        return { error: error.response.data.message || "" };
    }
};
