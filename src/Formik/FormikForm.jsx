import { Field, Form, Formik } from "formik";
import React from "react";

const FormikForm = () => {
  return (
    <div>
      <Formik>
        {(formik) => {
          return (
            <Form>
              <Field>
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value=""
                        onChange=""
                      />
                    </div>
                  );
                }}
              </Field>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
