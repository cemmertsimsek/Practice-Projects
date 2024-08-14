import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  // useField hookunu custom input componentini Formik ile bağlamak için kullanıyoruz.
  const [field, meta, helpers] = useField(props);
  // field'ın içinde name value onblur onchange var
  console.log("field", field);
  // metanın içinden error touch'a erişebiliyoruz.
  console.log("meta", meta);
  // console.log("helpers", helpers);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
