export interface INav {
    id: number
    name: string;
    href: string;
}

export interface INavProps {
    onClick: (click: boolean) => void;
    isClick: boolean;
}