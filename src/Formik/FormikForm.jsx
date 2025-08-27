import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikCheckbox from "./FormikCheckbox";

const FormikForm = () => {
  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
    country: "nepal",
    gender: "male",
    isMarried: false,
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
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    description: yup.string().required("Description is required"),
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
              {/* first name starts here  */}
              <FormikInput
                name={"firstName"}
                label={"First Name"}
                type="text"
                required={true}
                placeholder="e.g: Keshab"
              ></FormikInput>
              {/* first name ends here  */}
              {/* last name starts here  */}
              <FormikInput
                name={"lastName"}
                label={"Last Name"}
                type="text"
                required={true}
                placeholder="e.g Aryal"
              ></FormikInput>
              {/* last name ends here  */}
              {/* description starts here  */}
              <FormikTextArea
                name={"description"}
                label="Description"
                required={true}
              ></FormikTextArea>
              {/* description ends here  */}
              {/* country selection options  */}
              <FormikSelect
                name="country"
                label="Country"
                required={true}
                options={countryOptions}
              ></FormikSelect>
              <FormikRadio
                name="gender"
                label="Gender"
                required={true}
                options={genderOptions}
              ></FormikRadio>

              <FormikCheckbox name="isMarried" label="Is Married?" />
              {/* submit button starts here  */}
              <button type="submit">Submit</button>
              {/* submit button ends here */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
