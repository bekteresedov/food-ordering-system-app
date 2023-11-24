"use client";
import React, { useState } from "react";
import Title from "../../UI/title";
import Input from "../../UI/input";
import Button from "../../UI/button";
import Link from "next/link";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import { registerSchema } from "@/app/schema/register";
import { inputs } from "@/app/constants/auth/register";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { IFormRegister } from "@/app/types/auth/IRegister";
import { postAuth } from "@/app/service/httpService";
import { IResponse } from "@/app/types/share/IResponse";
const Register = () => {
  const t = useTranslations("Register");
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const { push, refresh } = useRouter();
  const [error, setError] = useState<string>();
  const handleButtonClick = (): void => {
    setShowErrors(true);
    setError("");
  };

  const onSubmit = async (values: IFormRegister) => {
    const response: IResponse = await postAuth({ body: values }, "/register");
    if (response.statusCode == 200) {
      push("/home");
      notify();
      refresh();
    } else {
      setError(response.error);
    }
  };

  const notify = () =>
    toast.success(t("Successfully Register in"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const formik = useFormik<IFormRegister>({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });
  return (
    <>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-8/12 md:w-4/12 mx-auto flex flex-col">
            <Title className="text-4xl font-bold text-center mb-5">
              {t("Register")}
            </Title>

            {inputs?.map((input, index) => (
              <Input
                className="p-3 mt-2"
                value={formik.values[input.name as keyof IFormRegister]}
                onChange={(e) => {
                  formik.handleChange(e);
                  setShowErrors(false);
                }}
                id={input.name}
                key={index}
                placeholder={t(input.placeholder)}
                type={input.type}
                errorMessage={formik.errors[input.name as keyof IFormRegister]}
                isShowError={
                  showErrors && Object.keys(formik.errors).length > 0
                }
              />
            ))}

            {showErrors && (
              <p className="text-red text-xs font-mont mt-[2px]">{error}</p>
            )}
            <Button
              className="btn-red w-full mt-4 uppercase"
              type="submit"
              onClick={handleButtonClick}
            >
              {t("Register")}
            </Button>
            <Link
              href={"/login"}
              className="mt-2 text-xs text-green dark:text-white font-mont font-medium underline"
            >
              <p>{t("Do you have account?")}</p>
            </Link>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </>
  );
};

export default Register;
