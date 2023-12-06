export interface IExtraProduct {
    title?: string;
    price?: string;
}

export interface IProduct {
    productId?: string;
    category_id: number;
    productName: string;
    description: String;
    price: string;
    img: string;
    extraOptions: any;
    Category?: {
        categoryId: number;
        categoryName: string;
    }
    campaign?: { isCampaign: boolean, campaignRate: number }
}

export interface IAddProductsProps {
    setClick: (click: boolean) => void;
    setState: (state: IProduct[]) => void;
    state: IProduct[] | undefined;
}


export interface ICampaign {
    campaign: { isCampaign: boolean, campaignRate: number }
}