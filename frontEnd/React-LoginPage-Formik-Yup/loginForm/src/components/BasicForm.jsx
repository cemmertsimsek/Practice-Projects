import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const BasicForm = () => {
  // useFormik(), formik statelerini ve helperları return eden bir custom hook. react context ile birlikte kullanılmaması gerekiyor.

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    // bir api requestini taklit ettikten sonra inputların içini temizliyoruz.
    await new Promise((resolve) => setTimeout(resolve,1000))
    actions.resetForm()
  };

  // form inputlarının başlangıç değerlerini içerisine bir obje olarak gönderiyoruz. useState'in initialValue'su ile aynı mantık.

  //values değerleri,
  //errors error mesajlarını tutuyor.
  // touched'ı error validasyonlarını kullanıcı input alanıyla etkileşime girdikten sonra göstermesi için kullanıyoruz.
  // isSubmitting form submit edilirken true olur ve buna göre Loading feedbackleri verebiliriz.
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    // yup ile yarattığımız validation şemasını buraya ekliyoruz. errors içerisinde valide olmayan adımları görebiliriz.
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    // form submit edildiğinde useFormik içinden destruct ettiğimiz handleSubmit fonksiyonunu çalıştıracak o da bizim yarattığımız onSubmit fonksiyonunu çağıracak
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm your password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
      />
      {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
