export interface IInput {
    id?: string;
    type?: string
    name?: string
    className?: string
    value?: string
    placeholder?: string
    errorMessage?: string
    isShowError?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
}