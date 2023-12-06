export interface IMenu {
    categoryName: string;
    product: IProduct[];

}

export interface IProduct {
    id?: string;
    src?: string;
    title?: string;
    subTitle?: string;
    price?: number | string;
    campaign?: { isCampaign: boolean, campaignRate: number }

}