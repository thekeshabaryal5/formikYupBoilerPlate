import { Field } from "formik";
import React from "react";

const FormikSelect = ({
  name,
  label,
  onChange,
  required,
  options,
  ...props
}) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div>
              <label htmlFor={name}>
                {label || name}
                {required ? <span>*</span> : null}
              </label>
              <select {...field} {...props} name={name} id={name}>
                {options.map((item, i) => {
                  return (
                    <option key={i} value={item.value}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
              {meta.touched && meta.error ? <p>{meta.error}</p> : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikSelect;
