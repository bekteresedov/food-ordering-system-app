import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import { IAdminFormValues } from "@/app/types/admin/IAdminProfile";
import { useFormik } from "formik";
import { footerSchema } from "@/app/schema/adminProfile";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../UI/button";
import { adminInputs } from "@/app/constants/admin/profile";
import Input from "../../UI/input";
import { useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import cookie from "js-cookie";
import { IAdminFooter } from "@/app/types/admin/IAdminFooter";

const AdminFooter = () => {
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const t = useTranslations("AdminFooter");
  const handleButtonClick = (): void => {
    setShowErrors(true);
  };

  const onSubmit = async (values: IAdminFormValues, actions: any) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/footers/update/${1}`,
        { openingDay: values.day, openingHour: values.time, ...values },
        {
          headers: {
            Authorization: cookie.get("token"),
          },
        }
      );

      if (response.status === 200) {
        formik.setValues({ ...response.data.data });
        notify();
      }
    } catch (error) {
      console.error("Error updating data:", error);
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

  const formik = useFormik<IAdminFormValues>({
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
      try {
        const response = await axios.get(
          `http://localhost:5000/api/footers/get/${1}`,
          {
            headers: {
              Authorization: cookie.get("token"),
            },
          }
        );
        formik.setValues({
          location: response.data.data.location,
          email: response.data.data.email,
          phoneNumber: response.data.data.phoneNumber,
          description: response.data.data.description,
          day: response.data.data.openingDay,
          time: response.data.data.openingHour,
        });
      } catch (error: any) {
        console.error("Error fetching data:", error);
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
                  value={formik.values[input.name as keyof IAdminFormValues]}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setShowErrors(false);
                  }}
                  id={input.name}
                  key={index}
                  placeholder={t(input.placeholder)}
                  type={input.type}
                  errorMessage={
                    formik.errors[input.name as keyof IAdminFormValues]
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
