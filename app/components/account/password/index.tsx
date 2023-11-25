"use client";
import React, { useState } from "react";
import Title from "../../UI/title";
import { IFormValuesPassword, IPassword } from "@/app/types/profile/IProfile";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { InputListPassword } from "@/app/constants/profile/profile";
import Input from "../../UI/input";
import Button from "../../UI/button";
import "react-toastify/dist/ReactToastify.css";
import { newPasswordSchema } from "@/app/schema/profilePassword";
import { patchHeader } from "@/app/service/httpService";

const Password: React.FC<IPassword> = ({ id }) => {
  const t = useTranslations("AccountPassword");
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const handleButtonClick = (): void => {
    setShowErrors(true);
  };

  const onSubmit = async (values: IFormValuesPassword, actions: any) => {
    const { statusCode } = await patchHeader(`/users/update/${id}`, {
      body: { password: values.password },
    });

    if (statusCode === 200) {
      notify();
      actions.resetForm();
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

  const formik = useFormik<IFormValuesPassword>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: newPasswordSchema,
    onSubmit,
  });
  return (
    <>
      <section>
        <div className="mb-20">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-4">
            {t("Password")}
          </Title>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-3">
                {InputListPassword?.map((input, index) => (
                  <Input
                    className="p-3 w-full "
                    value={
                      formik.values[input.name as keyof IFormValuesPassword]
                    }
                    onChange={(e) => {
                      formik.handleChange(e);
                      setShowErrors(false);
                    }}
                    id={input.name}
                    key={index}
                    placeholder={t(input.placeholder)}
                    type={input.type}
                    errorMessage={
                      formik.errors[input.name as keyof IFormValuesPassword]
                    }
                    isShowError={
                      showErrors && Object.keys(formik.errors).length > 0
                    }
                  />
                ))}
              </div>

              <Button
                type="submit"
                className="btn-red  w-fit mt-3"
                onClick={handleButtonClick}
              >
                {t("Update")}
              </Button>
            </form>
          </div>
        </div>
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

export default Password;
