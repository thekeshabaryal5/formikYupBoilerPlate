import { Field } from "formik";
import React from "react";

const FormikRadio = ({
  name,
  label,
  required,
  onChange,
  options,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        return (
          <div>
            <label htmlFor={name}>
              {label || name} {required ? <span>*</span> : null}
            </label>
            {options.map((item, i) => {
              return (
                <div key={i}>
                  <label htmlFor={item.label}>{item.label}</label>
                  <input
                    {...field}
                    {...props}
                    type="radio"
                    name={name}
                    id={item.label}
                    value={item.value}
                    checked={field.value === item.value}
                  />
                </div>
              );
            })}
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

export default FormikRadio;
