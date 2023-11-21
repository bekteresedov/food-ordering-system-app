"use client";
import React, { useState } from "react";
import Title from "../../UI/title";
import Input from "../../UI/input";
import Button from "../../UI/button";
import Link from "next/link";
import { useFormik } from "formik";
import { IFormValues } from "@/app/types/auth/IRegister";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import { registerSchema } from "@/app/schema/register";
import { inputs } from "@/app/constants/auth/register";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";
const Register = () => {
  const t = useTranslations("Register");
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const { push, refresh } = useRouter();
  const [error, setError] = useState<string>();
  const handleButtonClick = (): void => {
    setShowErrors(true);
    setError("");
  };

  const onSubmit = async (values: IFormValues, actions: any) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/register`, {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
      });
      if (res.status === 200) {
        cookie.set("token", res.data.data.accessToken, { expires: 1 });
        cookie.set("id", res.data.data.id, { expires: 1 });
        push("/home");
        notify();
        refresh();
      }
      console.log(res.data.message);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.message || "");
    }
    actions.resetForm();
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

  const formik = useFormik<IFormValues>({
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
                value={formik.values[input.name as keyof IFormValues]}
                onChange={(e) => {
                  formik.handleChange(e);
                  setShowErrors(false);
                }}
                id={input.name}
                key={index}
                placeholder={t(input.placeholder)}
                type={input.type}
                errorMessage={formik.errors[input.name as keyof IFormValues]}
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
