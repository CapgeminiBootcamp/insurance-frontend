import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import logIcon from "../Assets/user128.png";




function Login() {
  const[email , setEmail] = useState('')
  const[password , setPassword] = useState('')

  axios({
    method: 'post',
    url: 'http://localhost:2024/api/v1/login',
    data: { email: email , password: password }
  })
  .then(res =>{
    // console.log(res)
    alert('Login Success');
  })
  .catch(err => {
    console.log(err)
  })

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("invalid email")
      .required("email cannot be empty"),
    password: Yup.string()
      .required("password cannot be empty")
      .min(8, "passwsord week")
      .max(16, "password too long"),
  });

  let handleSubmit = (values) => {
    console.log(values);
  };
  return (

    <div className="log">
      <img src= {logIcon} alt="Login Icon" />
      <h1>Login</h1>
      
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validationSchema={LoginSchema}>
        {(props) => (
          <Form>
            <div>
              <Field className="inp-1" type="email" name="email" placeholder="Enter your Email..." id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <ErrorMessage name="email" />
            </div>

            <div>
              <Field className="inp-2" type="password" name="password" placeholder="Enter your Password..." id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <ErrorMessage name="password"/>
            </div>
            <button className="login-btn" type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;