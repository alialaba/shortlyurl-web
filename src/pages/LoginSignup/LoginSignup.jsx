import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./LoginSignup.css";
import Input from "../../components/Input/Input";
export default function SignUp() {
  // let navigate = useNavigate();
  // control login/signup state changes
  const [action, setAction] = useState("Login");

  const initialValues = { fullname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);
  const submitForm = () => {
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


     if(!values.fullname){
      errors.fullname ="Input cannot be blank";
     }

    if (!values.email) {
      errors.email = "Input cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Input cannot be blank";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 5 characters";
    }

    return errors;
  };

  return (
    <section>
      <div className="container">
        <div className="credential stack">
          <div className="credential__header">
            <Button
              text="Login"
              onClick={() => setAction("Login")}
              className={` ${
                action === "Login" ? "credential__btn" : "credential__btn gray"
              }`}
            />

            <Button
              text="Sign Up"
              onClick={() => setAction("Sign Up")}
              className={`${
                action === "Sign Up"
                  ? "credential__btn"
                  : "credential__btn gray"
              }`}
            />
          </div>

          <form className="credential__form" onSubmit={handleSubmit} noValidate>
            {action === "Login" ? ( <></> ) : ( <Input/> )}
            <Input/>
            <Input/>
            <Button
              className="credential__btn credential__submit"
              text={`${action === "Login" ? "Login" : "Sign Up"}`}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
