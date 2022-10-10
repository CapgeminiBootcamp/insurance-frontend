import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../adminLogin/adminLogin.css";
import axios from "axios";
import { useState } from "react";
// import logIcon from "../Assets/user1.png";




function AdminLogin() {
  const[email , setEmail] = useState('')
  const[password , setPassword] = useState('')

  

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

    axios({
      method: 'post',
      url: 'http://localhost:2024/api/v1/admin/login',
      data: { email: values.email , password: values.password }
    })
    .then(res =>{
      // console.log(res)
      alert('Login Success');
    })
    .catch(err => {
      console.log(err)
    })

  };
  return (
    <center>
    <div className="log">
      {/* <img src= {logIcon} className="newicn" alt="Login Icon" /> */}
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
              <Field className="inp-1" type="email" name="email" placeholder="Enter your Email..."/>
              <ErrorMessage name="email" />
            </div>

            <div>
              <Field className="inp-2" type="password" name="password" placeholder="Enter your Password..."/>
              <ErrorMessage name="password"/>
            </div>
            <button className="login-btn" type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
    </center>
  );
}

export default AdminLogin;