import { ICategoryResponse } from '../admin/IAdminCategory';
import { IFooterResponse } from '../admin/IAdminFooter';
export interface IResponse {
    statusCode?: number;
    error?: string;
    data?: any
}