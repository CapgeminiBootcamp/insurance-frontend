import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import "./LoginAdmin.css";
import axios from "axios";
import { useState } from "react";
import logIcon from "../Assets/user128.png";
import logo from "../images/logo.png"

function LoginAdmin() {
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
    // console.log(values);

    axios({
      method: 'post',
      url: 'http://localhost:2024/api/v1/login',
      data: { email: values.email , password: values.password }
    })
    .then(res =>{
      console.log(res.data.customerId)
      window.location.href = 'http://localhost:3000/viewCustomer'
      alert('Login Success');
    })
    .catch(err => {
      console.log(err)
      alert('Invalid Login Credentials');
    })

  };
  return (
    <section className="vh-100" id="bg" >
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://www.zubapay.com/assets/images/auth-img-7.png"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(e) => handleSubmit(e)}

         validationSchema={LoginSchema}>
        
        {(props) => (
        <Form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in to</p>
            <img id="logo" src="https://seeklogo.com/images/P/pure-insurance-logo-938736FC67-seeklogo.com.png"/>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">AS ADMIN</p>
          </div>

          
          <div className="form-outline mb-4">
              <Field className="form-control form-control-lg" type="email" name="email" placeholder="Enter your Email..." id='email'/>
              <ErrorMessage name="email" />
            
          </div>

          
          <div className="form-outline mb-3">
              <Field className="form-control form-control-lg" type="password" name="password" placeholder="Enter your Password..." id='password'/>
              <ErrorMessage name="password"/>
            
          </div>

          <div className="d-flex justify-content-between align-items-center">
            
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-danger btn-lg">Admin Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Are you an Customer? <a href='/login'
                className="link-danger">Login as Customer</a></p>
          </div>

        </Form>
        )}
        </Formik>
      </div>
    </div>
  </div>
  
</section>
    
  );
}

export default LoginAdmin;
