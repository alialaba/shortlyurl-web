import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import "./LoginSignup.css";
//components
import Input from "../../components/Input/Input";
import Button from "../../components/Button";
//validation file
import {
  signupSchema,
  loginSchema,
} from "../../validations/loginSignup.validation";

export default function loginSignup() {
  // control login/signup state changes
  const [action, setAction] = useState("Login");

  // const initialValues = { fullname: "", email: "", password: "" };
  const [loginDetails, setLoginDetails] = useState([]);

  // Formik logic and validations for Signup
  const signupFormik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      // Handle login logic
      setLoginDetails([...loginDetails, values])

      // Implement your Signup logic here
    },
  });

  // Formik logic and validations for Login

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // Handle login logic
      console.log("Login", values);

      // Implement your login logic here
    },
  });

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

          {action === "Login" ? (
            <form
              className="credential__form"
              onSubmit={loginFormik.handleSubmit}
              noValidate
            >
              
              <Input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={loginFormik.values.email}
                onChange={loginFormik.handleChange}
                error={loginFormik.errors.email}
              />
              <Input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={loginFormik.values.password}
                onChange={loginFormik.handleChange}
                error={loginFormik.errors.password}
              />
              <Button
                type="submit"
                className="credential__btn credential__submit"
                text="Login"
              />
            </form>
          ) : (
            <form
              className="credential__form"
              onSubmit={signupFormik.handleSubmit}
              noValidate
            >
              <Input
                type="text"
                placeholder="Fullname"
                id="fullname"
                name="fullname"
                value={signupFormik.values.fullname}
                onChange={signupFormik.handleChange}
                error={signupFormik.errors.fullname}
              />

              <Input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={signupFormik.values.email}
                onChange={signupFormik.handleChange}
                error={signupFormik.errors.email}
              />
              <Input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={signupFormik.values.password}
                onChange={signupFormik.handleChange}
                error={signupFormik.errors.password}
              />
              <Button
                type="submit"
                className="credential__btn credential__submit"
                text="Signup"
              />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
