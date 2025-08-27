import { Field } from "formik";
import React from "react";

const FormikCheckBox = ({ name, label, required, onChange, ...props }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div>
          <input
            {...field}
            {...props}
            type="checkbox"
            id={name}
            onChange={onChange ? onChange : field.onChange}
            checked={field.value || false}
          />
          <label htmlFor={name}>
            {label}
            {required ? <span>*</span> : null}
          </label>

          {/* Show error if exists */}
          {meta.touched && meta.error ? (
            <div style={{ color: "red" }}>{meta.error}</div>
          ) : null}
        </div>
      )}
    </Field>
  );
};

export default FormikCheckBox;
