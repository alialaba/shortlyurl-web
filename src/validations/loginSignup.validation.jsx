import {object, string} from "yup";

export const signupSchema = object({
    fullname: string()
    .matches(/^[a-zA-Z ]*$/, "Must be a string")
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter two names")
    .min(4)
    .required("Please enter your full name"),
    email: string().email().required(),
    password: string().min(7).max(15).required()

})

export const loginSchema = object({
    
    email: string().email().required(),
    password: string().min(7).max(15).required()

})