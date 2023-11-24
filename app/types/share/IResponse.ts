import { IFooterResponse } from '../admin/IAdminFooter';
export interface IResponse {
    statusCode?: number;
    error?: any;
    data?: IFooterResponse
}