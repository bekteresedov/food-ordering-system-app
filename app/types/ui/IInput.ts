export interface IInput {
    id?: string;
    type?: string
    name?: string
    className?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}