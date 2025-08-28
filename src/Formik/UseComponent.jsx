import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikRadio from "./FormikRadio";
import FormikCheckBox from "./FormikCheckBox";
import FormikSelect from "./FormikSelect";
import FormikTextArea from "./FormikTextArea";
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
    fullName: yup
      .string()
      .required("Full Name  is required")
      .min(10, "Full Name must be minimum 10 Characters long")
      .max(20, "Full Name can be at most 20 characters")
      .matches(
        /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
        "Only alphabet and space is allowed"
      ),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),

    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^(98|97)[0-9]{8}$/, "Invalid Nepali phone number"),
    age: yup
      .number()
      .required("Age is required")
      .min(18, "Age must be at least 18 years"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase, one lowercase, one number, and one special character"
      ),
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
              <FormikCheckBox
                label="Is Married"
                name="isMarried"
              ></FormikCheckBox>
              {/* isMarried ends here */}

              {/* country starts here */}
              <FormikSelect
                name="country"
                label="Country"
                required={true}
                options={countryOptions}
              ></FormikSelect>
              {/* country ends here */}

              {/* description starts here */}
              <FormikTextArea
                name="description"
                label="Description"
              ></FormikTextArea>
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
