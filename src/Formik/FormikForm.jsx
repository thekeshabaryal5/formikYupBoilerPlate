import { Form, Formik } from "formik";
import React from "react";

const FormikForm = () => {
  return (
    <div>
      <Formik>
        {(formik) => {
          return <Form></Form>;
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
