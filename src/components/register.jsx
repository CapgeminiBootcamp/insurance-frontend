import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./register.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
function Register() {
  const url = "http://localhost:2024/api/v1/add-Customer";

  const registerSchema = Yup.object().shape({
    customerName: Yup.string().required("This Field cannot be empty"),
    customeraddress: Yup.string().required("This Field cannot be empty"),
    customerAge: Yup.number()
      .positive("Age cannot be zero")
      .required("This Field cannot be empty")
      .integer("Age cannot be a floating number"),
    customerSalary: Yup.number()
      .required("This Field cannot be empty")
      .positive("Salary cannot be negative"),
    customerContact: Yup.string()
      .length(10)
      .required("This Field cannot be empty")
      .matches(/^$|[6-9][0-9]{9}/, "Phone number is not valid"),

    customerFamilyMembers: Yup.number()
      .required("This Field cannot be empty")
      .min(0, "Family members cannot be less than 0"),
    email: Yup.string().email().required("This Field cannot be empty"),
    password: Yup.string()
      .min(8, "password should be 8 characters long")
      .required("This Field cannot be empty"),
    customerGender: Yup.string().required("This Field cannot be empty"),
  });

  function submit(values) {
    // e.preventDefault();
    Axios.post(url, {
      //   customerId: values.customerId,
      cutomerName: values.customerName,
      customeraddress: values.customeraddress,
      customerAge: values.customerAge,
      customerSalary: values.customerSalary,
      customerContact: values.customerContact,
      customerFamilyMembers: values.customerFamilyMembers,
      email: values.email,
      password: values.password,
      customerGender: values.customerGender,
    }).then((res) => {
      alert("Registration Success");
      window.location.href = 'http://localhost:3000/'
    });
  }
  

  return (
    <div className="maincontainer">
      <div className="mainBox">
        <div className="title">Registration</div>
        <Formik
          initialValues={{
            customerId: "",
            cutomerName: "",
            customeraddress: "",
            customerAge: "",
            customerSalary: "",
            customerContact: "",
            customerFamilyMembers: "",
            email: "",
            password: "",
            customerGender: ""
          }}
          onSubmit={(e) => submit(e)}
          validationSchema={registerSchema}
        >
          {(props) => (
            <div className="content">
              <Form>
                <div className="user-details">
                  {/* <div className="input-box">
                                <span className="details">Customer ID(TEMP)</span>
                                <Field onChange={(e) => handle(e)} type="number" id="customerId" value={data.customerId}
                                    placeholder="ID(temp)" /><ErrorMessage name="" />
                            </div> */}
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <Field
                      name="customerName"
                      type="text"
                      id="cutomerName"
                      placeholder="Name"
                    />
                    <ErrorMessage name="customerName" />
                  </div>
                  <div className="input-box">
                    <span className="details">Address</span>
                    <Field
                      name="customeraddress"
                      type="text"
                      id="customeraddress"
                      placeholder="Address"
                    />
                    <ErrorMessage name="customerAddress" />
                  </div>
                  <div className="input-box">
                    <span className="details">Age</span>
                    <Field
                      name="customerAge"
                      type="number"
                      id="customerAge"
                      placeholder="Age"
                    />
                    <ErrorMessage name="customerAge" />
                  </div>
                  <div className="input-box">
                    <span className="details">Salary</span>
                    <Field
                      name="customerSalary"
                      type="number"
                      id="customerSalary"
                      placeholder="Salary"
                    />
                    <ErrorMessage name="customerSalary" />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <Field
                      name="customerContact"
                      type="text"
                      id="customerContact"
                      placeholder="Contact"
                    />
                    <ErrorMessage name="customerContact" />
                  </div>
                </div>
                <div className="input-box">
                  <span className="details">Family members</span>
                  <Field
                    name="customerFamilyMembers"
                    type="text"
                    className="form-2"
                    id="customerFamilyMembers"
                    placeholder="Members"
                  />
                  <ErrorMessage name="customerFamilyMembers" />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <Field
                    name="email"
                    type="email "
                    className="form-2"
                    id="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <Field
                    name="password"
                    type="password"
                    className="form-2"
                    id="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" />
                </div>
                <div className="input-box">
                  <span className="details">Gender</span>
                  <Field
                    name="customerGender"
                    type="text"
                    className="form-2"
                    id="customerGender"
                    placeholder="gender"
                  />
                  <ErrorMessage name="customerGender" />
                </div>

                <div className="button">
                  <input type="submit" value="Register" />
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Register;
