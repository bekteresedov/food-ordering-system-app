"use client";
import React, { useState } from "react";
import Title from "../../UI/title";
import { IFormValuesSettings } from "@/app/types/profile/IProfile";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { profileSchema } from "@/app/schema/profileSettings";
import { InputListsettings } from "@/app/constants/profile/Profile";
import Input from "../../UI/input";
import Button from "../../UI/button";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const t = useTranslations("Reservation");
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const handleButtonClick = (): void => {
    setShowErrors(true);
    // formik.handleSubmit();
  };

  const onSubmit = async (values: FormValues, actions: any) => {
    notify();
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    actions.resetForm();
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

  const formik = useFormik<IFormValuesSettings>({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      job: "",
      address: "",
      bio: "",
    },
    validationSchema: profileSchema,
    onSubmit,
  });
  return (
    <>
      <section>
        <div>
          <Title className="text-3xl font-semibold mt-6 mb-4">
            Account Settings
          </Title>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-3">
                {InputListsettings?.map((input, index) => (
                  <Input
                    className="p-3 w-full "
                    value={
                      formik.values[input.name as keyof IFormValuesSettings]
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
                      formik.errors[input.name as keyof IFormValuesSettings]
                    }
                    isShowError={
                      showErrors && Object.keys(formik.errors).length > 0
                    }
                  />
                ))}
              </div>
              <Button
                type="submit"
                className="btn-red  w-fit mt-2"
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
