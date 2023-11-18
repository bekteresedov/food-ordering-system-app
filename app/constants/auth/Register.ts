import IInputList from '../../types/auth/ILogin';
export const inputs: IInputList[] = [
    {
        id: 1,
        name: "fullname",
        type: "text",
        placeholder: "Your Full Name",
    },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Your Email Address",
    },
    {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Your Password",
    },
    {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Your Password Again",
    },
]