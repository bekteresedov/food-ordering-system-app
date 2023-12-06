"use client";
import React, { useState } from "react";
import Title from "../../UI/title";
import Input from "../../UI/input";
import Button from "../../UI/button";
import Link from "next/link";
import { BiSolidShow } from "react-icons/bi";
import { useFormik } from "formik";
import { loginSchema } from "@/app/schema/login";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { postAuth } from "@/app/service/httpService";
import { IResponse } from "@/app/types/share/IResponse";
import { IFormLogin } from "@/app/types/auth/ILogin";

const Login = () => {
  const t = useTranslations("Login");
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { push, refresh } = useRouter();
  const handleButtonClick = (): void => {
    setShowErrors(true);
    setError("");
  };

  const onSubmit = async (values: IFormLogin) => {
    const response: IResponse = await postAuth({ body: values }, "/login");
    if (response.statusCode == 200) {
      push("/home");
      notify();
      refresh();
    } else {
      setError(response.error as string);
    }
  };

  const notify = () =>
    toast.success(t("Successfully"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const formik = useFormik<IFormLogin>({
    initialValues: {
      fullname: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-8/12 md:w-4/12 mx-auto flex flex-col">
            <Title className="text-4xl font-bold text-center mb-5">
              {t("Login")}
            </Title>

            <Input
              className="p-3  "
              type="text"
              id="fullname"
              placeholder={t("Your Full Name")}
              value={formik.values.fullname}
              onChange={(e) => {
                formik.handleChange(e);
                setShowErrors(false);
              }}
              errorMessage={formik.errors.fullname}
              isShowError={showErrors && Object.keys(formik.errors).length > 0}
            />
            <div className="relative">
              <Input
                className="p-3 mt-2 "
                type={`${showPassword ? "password" : "text"}`}
                id="password"
                placeholder={t("Your Password")}
                value={formik.values.password}
                onChange={(e) => {
                  formik.handleChange(e);
                  setShowErrors(false);
                }}
                errorMessage={formik.errors.password}
                isShowError={
                  showErrors && Object.keys(formik.errors).length > 0
                }
              />
              <BiSolidShow
                className="absolute top-[21px] right-4 text-xl"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {showErrors && (
              <p className="text-red text-xs font-mont mt-[2px]">{error}</p>
            )}

            <Button
              className="btn-red w-full mt-4 uppercase"
              type="submit"
              onClick={handleButtonClick}
            >
              {t("Login")}
            </Button>
            <Link
              href={"/register"}
              className="mt-2 text-xs text-green dark:text-white font-mont font-medium underline"
            >
              <p>{t("Do you no have account?")}</p>
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

export default Login;
