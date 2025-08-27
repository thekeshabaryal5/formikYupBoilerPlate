import { Field, Form, Formik } from "formik";
import * as yup from "yup";

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
              <Field name="firstName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" {...field} />
                      {meta.touched && meta.error ? (
                        <p style={{ color: "red" }}>{meta.error}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                }}
              </Field>
              {/* first name ends here  */}

              {/* last name starts here  */}
              <Field name="lastName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="lastName">Last Name</label>
                      <input {...field} type="text" id="lastName" />
                      {meta.touched && meta.error ? (
                        <p style={{ color: "red" }}>{meta.error}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                }}
              </Field>
              {/* last name ends here  */}

              {/* description starts here  */}
              <Field name="description">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="description">Description</label>
                      <input type="text" id="description" {...field} />
                      {meta.touched && meta.error ? (
                        <p style={{ color: "red" }}>{meta.error}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                }}
              </Field>
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
