import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikRadio from "./FormikRadio";


const UseComponent = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    age: 0,
    password: "",
    gender: "male",
    isMarried: false,
    country: "nepal",
    description: "",
  };
  let countryOptions = [
    { label: "Nepal", value: "nepal" },
    { label: "India", value: "india" },
    { label: "Pakistan", value: "pakistan" },
  ];
  let genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  const handleSubmit = (value, other) => {
    console.log(value);
  };
  const validationSchema = yup.object({
    fullName: yup.string().required("Full Name  is required"),
    email: yup.string().required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    age: yup.number().required("Age is required"),
    password: yup.string().required("Password is required"),
    gender: yup.string().required("Gender is required"),
    isMarried: yup.boolean(),
    country: yup.string().required("Country is required"),
    description: yup.string(),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              {/* fullname starts here */}
              <FormikInput
                name="fullName"
                label="Full Name"
                type="text"
                required={true}
              ></FormikInput>
              {/* fullname ends here */}

              {/* email starts here */}
              <FormikInput
                name="email"
                label="Email"
                type="email"
                required={true}
              ></FormikInput>
              {/* email ends here */}

              {/* phone number starts here */}
              <FormikInput
                name="phoneNumber"
                label="Phone Number"
                type="mob"
                required={true}
              ></FormikInput>
              {/* phone number ends here */}

              {/* age starts here */}
              <FormikInput
                name="age"
                label="Age"
                type="number"
                required={true}
              ></FormikInput>
              {/* age ends here */}

              {/* password starts here  */}
              <FormikInput
                name="password"
                label="Password"
                type="password"
                required={true}
              ></FormikInput>
              {/* password ends here  */}

              {/* gender starts here */}
              <FormikRadio
                name="gender"
                label="Gender"
                required={true}
                options={genderOptions}
              ></FormikRadio>
              {/* gender ends here */}

              {/* isMarried starts here */}
              <FormikCheckBox></FormikCheckBox>
              {/* isMarried ends here */}

              {/* country starts here */}
              {/* country ends here */}

              {/* description starts here */}
              {/* description ends here */}

              {/* submit button */}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UseComponent;

/* 
form
email       required   ----> input:email
password    required    ----> input:p/w
fullName    required    ----> input:text
isMarried               ---> checkbox
country     required    ----> select
gender      required    ----> radio
description             ----> textarea
phoneNumber required -----> number
age         required   -----> number
*/
