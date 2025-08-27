import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";

const FormikForm = () => {
  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
  };
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
