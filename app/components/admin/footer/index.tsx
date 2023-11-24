import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import { useFormik } from "formik";
import { footerSchema } from "@/app/schema/adminProfile";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../UI/button";
import { adminInputs } from "@/app/constants/admin/profile";
import Input from "../../UI/input";
import { useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";
import { IAdminFooterForm } from "@/app/types/admin/IAdminFooter";
import { get, patchHeader } from "@/app/service/httpService";
import { IResponse } from "../../../types/share/IResponse";

const AdminFooter = () => {
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const t = useTranslations("AdminFooter");
  const handleButtonClick = (): void => {
    setShowErrors(true);
  };

  const onSubmit = async (values: IAdminFooterForm) => {
    const response: IResponse = await patchHeader("/footers/update/1", {
      body: {
        openingDay: values.day,
        openingHour: values.time,
        description: values.description,
        email: values.email,
        location: values.location,
        phoneNumber: values.phoneNumber,
      },
    });
    if (response.statusCode == 200) {
      formik.setValues({
        day: response.data?.openingDay || "",
        time: response.data?.openingHour || "",
        description: response.data?.description || "",
        email: response.data?.email || "",
        location: response.data?.location || "",
        phoneNumber: response.data?.phoneNumber || "",
      });
      notify();
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

  const formik = useFormik<IAdminFooterForm>({
    initialValues: {
      location: "",
      email: "",
      phoneNumber: "",
      description: "",
      day: "",
      time: "",
    },
    validationSchema: footerSchema,
    onSubmit,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, statusCode } = await get("/footers/get/1");
      if (statusCode === 200) {
        formik.setValues({
          location: data?.location || "",
          email: data?.email || "",
          phoneNumber: data?.phoneNumber || "",
          description: data?.description || "",
          day: data?.openingDay || "",
          time: data?.openingHour || "",
        });
      }
    };

    fetchData();
  }, [formik.setValues]);

  return (
    <>
      <section>
        <div className="mb-5">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-4">
            {t("Footer Settings")}
          </Title>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-3">
              {adminInputs?.map((input, index) => (
                <Input
                  className="p-3 w-full "
                  value={formik.values[input.name as keyof IAdminFooterForm]}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setShowErrors(false);
                  }}
                  id={input.name}
                  key={index}
                  placeholder={t(input.placeholder)}
                  type={input.type}
                  errorMessage={
                    formik.errors[input.name as keyof IAdminFooterForm]
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

export default AdminFooter;
