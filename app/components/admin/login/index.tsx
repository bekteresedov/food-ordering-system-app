"use client";
import React, { useState } from "react";
import Title from "../../UI/title";
import Input from "../../UI/input";
import Button from "../../UI/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BiSolidShow } from "react-icons/bi";
import { useFormik } from "formik";
import { IFormValues } from "@/app/types/admin/IAdminLogin";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import { adminLoginSchema } from "@/app/schema/adminLogin";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
const AdminLogin = () => {
  const t = useTranslations("AdminLogin");
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { push, refresh } = useRouter();
  const [error, setError] = useState<string>("");

  const handleButtonClick = (): void => {
    setShowErrors(true);
    setError("");
  };

  const onSubmit = async (values: IFormValues, actions: any) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/admin/login`,
        {
          fullname: values.username,
          password: values.password,
        }
      );
      if (res.status === 200) {
        cookie.set("token", res.data.data.accessToken, { expires: 1 });
        cookie.set("id", res.data.data.id, { expires: 1 });
        push("/admin/profile");
        refresh();
        notify();
        actions.resetForm();
      }
    } catch (err: any) {
      setError(err.response.data.message ? err.response.data.message : "");
    }
  };

  const notify = () =>
    toast.success(t("Successfully completed!"), {
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
      username: "",
      password: "",
    },
    validationSchema: adminLoginSchema,
    onSubmit,
  });
  return (
    <>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-8/12 md:w-4/12 mx-auto flex flex-col">
            <Title className="text-4xl font-bold text-center mb-5">
              {t("Admin Login")}
            </Title>

            <Input
              className="p-3  "
              type="text"
              id="username"
              placeholder={t("Your Username")}
              value={formik.values.username}
              onChange={(e) => {
                formik.handleChange(e);
                setShowErrors(false);
              }}
              errorMessage={formik.errors.username}
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
              href={"/"}
              className="mt-2 text-xs text-green dark:text-white font-mont font-medium underline"
            >
              <p>{t("Home Page")}</p>
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

export default AdminLogin;
