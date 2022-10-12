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
      .min(18,"Age has to be greater than 18")
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
        // customerId: values.customerId,
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
            // customerId: "",
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
                      name="customerName "
                      type="text"
                      id="cutomerName"
                      placeholder="Name"
                    />
                    <div className="error">
                    <ErrorMessage name="customerName" />
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="details">Address</span>
                    <Field
                      name="customeraddress"
                      type="text"
                      id="customeraddress"
                      placeholder="Address"
                    />
                    <div className="error">
                    <ErrorMessage name="customerAddress" />
                            </div>
                  </div>
                  <div className="input-box">
                    <span className="details">Age</span>
                    <Field
                      name="customerAge"
                      type="number"
                      id="customerAge"
                      placeholder="Age"
                    />
                    <div className="error">
                    <ErrorMessage name="customerAge" />
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="details">Salary</span>
                    <Field
                      name="customerSalary"
                      type="number"
                      id="customerSalary"
                      placeholder="Salary"
                    />
                    <div className="error">
                    <ErrorMessage name="customerSalary" />
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <Field
                      name="customerContact"
                      type="text"
                      id="customerContact"
                      placeholder="Contact"
                    />
                    <div className="error">
                    <ErrorMessage name="customerContact" />
                    </div>
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
                  <div className="error">
                  <ErrorMessage name="customerFamilyMembers" />
                  </div>
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
                  <div className="error">
                  <ErrorMessage name="email" />
                  </div>
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
                  <div className="error">
                  <ErrorMessage name="password" />
                  </div>
                </div>


                {/* ............. */}
                <div className="input-box">
                  <span className="details">Gender</span>
                  {/* <div className="form-check"></div>
                  <Field
                    name="customerGender"
                    type="radio"
                    className="form-check-input btn btn-outline-success"
                    id="customerGender"
                    placeholder="gender"
                    value = "Male"
                  />
                  <label className="form-check-label btn-btn outline success">Male</label>
                  <ErrorMessage name="customerGender" /> */}

                  <label className="m-2 btn" style ={{borderColor:"#9b59b6"}}>
                    <Field type="radio" name="customerGender" value="Male" />
                    Male
                  </label>

                  {/* <br></br> */}
                  <label className="m-2 btn" style ={{ borderColor:"#9b59b6" }}>
                    <Field type="radio" name="customerGender" value="Female" className="" />
                    Female
                  </label>

                  <label className="m-2 btn" style ={{borderColor:"#9b59b6"}}>
                    <Field type="radio" name="customerGender" value="Others" />
                    Others
                  </label>
                  <div className="error">
                  <ErrorMessage name="customerGender" />
                  </div>
                  {/* <div className="form-check"></div>
                  <Field
                    name="customerGender"
                    type="radio"
                    className="form-2"
                    id="customerGender"
                    placeholder="gender"
                  />
                  <label className="form-check-label btn-btn outline success">Female</label>
                <ErrorMessage name="customerGender" /> */}
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
