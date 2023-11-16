import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./LoginSignup.css";
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
            {action === "Login" ? (
              <></>
            ) : (
              <div className="form-col">
              <div className="form-input">
                {/* <label htmlFor="fullname">Fullname</label> */}
                <i className="fa-regular fa-user"></i>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Fullname"
                  value={formValues.fullname}
                  onChange={handleChange}
                />
              </div>
              {formErrors.fullname && <span className="error">{formErrors.fullname}</span>}
              </div>
            )}
             <div className="form-col">
            <div className="form-input">
              {/* <label htmlFor="email">Email</label> */}
              <i className="fa-regular fa-envelope"></i>
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            <div className="form-col">
            <div className="form-input">
              <i className="fa-solid fa-lock"></i>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="text"
                name="password"
                id="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <i className="fa-regular fa-eye"></i>
            </div>
            {formErrors.password && <span className="error" >{formErrors.password}</span>}
            </div>
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
