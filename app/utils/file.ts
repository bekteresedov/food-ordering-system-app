import { toast } from "react-toastify";

export const convertToBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (!(file instanceof Blob)) {
            reject(new Error("File must be not a Blob"));
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result as string);
        };

        fileReader.onerror = (error) => {
            reject(error);
            toast.error("Dosya okuma hatası");
        };
    });
};
