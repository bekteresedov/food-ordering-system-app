type ButtonType = "submit" | "reset" | "button" | undefined

export interface IButtonProps {
    children: React.ReactNode
    className: string
    onClick?: () => void
    disabled?: boolean
    type?: ButtonType

}