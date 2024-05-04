import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const loginSchema = yup.object().shape({
    // email:yup.string().email("Please enter valid email address").required("Please enter you email"),
    // password: yup.string().min(5).matches(passwordRules,{message:"Please Create a Stronger Password"}).required("Please enter your password"),
    // confirmPassword:yup.string().oneOf([yup.ref('password'),null],"Password doesn't matches").required("Required")

})

export const registerSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid Email").required("Please enter your email address"),
    password:yup.string().min(6).matches(passwordRules,{message:"Please create a strong password"}).required("Please enter your password"),
    name:yup.string().min(6).required("Pleae enter your name!")
})