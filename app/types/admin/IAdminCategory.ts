export interface ICategoryResponse {
    categoryId: string;
    categoryName: string;
}

export interface ICategoryProps {
    setClick: (click: boolean) => void;
}