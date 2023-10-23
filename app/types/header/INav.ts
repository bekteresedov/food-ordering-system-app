export interface INav {
    name: string;
    href: string;
}

export interface INavProps {
    onClick: (click: boolean) => void;
    isClick: boolean;
}