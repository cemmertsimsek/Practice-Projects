import React from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
const AdvancedForm = () => {

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    // bir api requestini taklit ettikten sonra inputların içini temizliyoruz.
    await new Promise((resolve) => setTimeout(resolve,1000))
    actions.resetForm()
  };

  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          {/* --- 1 - html input yerine formik Field kullandık. --- */}
          {/*
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
            /> */}
          {/* <Field type="text" name="name" placeholder="Name" /> */}
          {/* --- 2 - Self closing tag ile Field kullanılacaksa içerisine propertyler yazılabilir, as ile type gönderilebilir --- */}
          {/* <Field as="select" name="color">
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field> */}
          {/* --- 3 - prop rendering yapmamak için customInput componenti yaptım. Bence daha basit ve anlaşılır. */}
          {/* --- 4 - customInput componenti sadece Html. Bu yüzden formik form veya formik statelerine veya herhangi bir formik helper'ına ulaşamıyor. Bunun için useField() hookunu kullanacağız.  */}
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckBox type="checkbox" name="acceptedTos" />
          <button disabled={props.isSubmitting} type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
