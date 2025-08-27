import { Field } from "formik";
import React from "react";

const FormikTextArea = ({ name, required, label, onChange, ...props }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        return (
          <div>
            <label htmlFor={name}>
              {label || name} {required ? <span>*</span> : null}
            </label>
            <textarea
              {...props}
              {...field}
              name={name}
              id={name}
              onChange={onChange || field.onChange}
            ></textarea>
            {meta.touched && meta.error ? (
              <p style={{ color: "red" }}>{meta.error}</p>
            ) : (
              ""
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default FormikTextArea;
