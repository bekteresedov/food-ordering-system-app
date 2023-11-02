"use client";
import React, { useState } from "react";
import Title from "../UI/title";
import { inputs } from "@/app/constants/reservation/Reservation";
import Input from "../UI/input";
import Button from "../UI/button";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { FormValues } from "@/app/types/reservation/IReservation";
import { reservationSchema } from "../../schema/reservation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Reservation = () => {
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
    toast.success("Successfully completed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    validationSchema: reservationSchema,
    onSubmit,
  });

  return (
    <>
      <section>
        <div className="w-8/12 mx-auto">
          <Title className="font-black text-3xl font-dancing my-10">
            {t("Book A Table")}
          </Title>
          <div className="flex flex-col md:flex-row gap-[30px]">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-3 w-full md:w-6/12"
            >
              {inputs?.map((input, index) => (
                <Input
                  className="p-3"
                  value={formik.values[input.name as keyof FormValues]}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setShowErrors(false);
                  }}
                  id={input.name}
                  key={index}
                  placeholder={t(input.placeholder)}
                  type={input.type}
                  errorMessage={t(
                    formik.errors[input.name as keyof FormValues]
                  )}
                  isShowError={
                    showErrors && Object.keys(formik.errors).length > 0
                  }
                />
              ))}

              <Button
                type="submit"
                className="btn-red  w-fit"
                onClick={handleButtonClick}
              >
                {t("Book Now")}
              </Button>
            </form>
            <div className="w-full md:w-6/12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.66924008447!2d-74.24927437205034!3d40.766603131286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1661853137161!5m2!1str!2str"
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              ></iframe>
            </div>
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

export default Reservation;
