"use client";
import React, { useState } from "react";
import Title from "../../UI/title";
import { IFormSettings, ISettings } from "@/app/types/profile/IProfile";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { profileSchema } from "@/app/schema/profileSettings";
import { InputListsettings } from "@/app/constants/profile/profile";
import Input from "../../UI/input";
import Button from "../../UI/button";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import cookie from "js-cookie";
import { patchHeader } from "@/app/service/httpService";

const Settings: React.FC<ISettings> = ({
  address,
  email,
  fullname,
  id,
  job,
  phoneNumber,
  setState,
}) => {
  const t = useTranslations("Account");
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const handleButtonClick = (): void => {
    setShowErrors(true);
  };

  const onSubmit = async (values: IFormSettings) => {
    const { data, statusCode } = await patchHeader(`/users/update/${id}`, {
      body: { fullname: values.fullName, ...values },
    });

    if (statusCode === 200) {
      setState(data || null);
      notify();
    }
  };

  const notify = () =>
    toast.success(t("successfully"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const formik = useFormik<IFormSettings>({
    initialValues: {
      fullName: fullname || "",
      phoneNumber: phoneNumber || "",
      email: email || "",
      job: job || "",
      address: address || "",
    },
    validationSchema: profileSchema,
    onSubmit,
  });

  return (
    <>
      <section>
        <div className="mb-20">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-4">
            {t("Account Settings")}
          </Title>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                {InputListsettings?.map((input, index) => (
                  <Input
                    className="p-3 w-full "
                    value={formik.values[input.name as keyof IFormSettings]}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setShowErrors(false);
                    }}
                    id={input.name}
                    key={index}
                    placeholder={t(input.placeholder)}
                    type={input.type}
                    errorMessage={
                      formik.errors[input.name as keyof IFormSettings]
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

export default Settings;
