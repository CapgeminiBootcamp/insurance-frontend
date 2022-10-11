import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./register.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
function Register() {
  const url = "http://localhost:2024/api/v1/add-Customer";
  // const [data, setData] = useState({
  //     customerId: "",
  //     cutomerName: "",
  //     customeraddress: "",
  //     customerAge: "",
  //     customerSalary: "",
  //     customerContact: "",
  //     customerGender: "",
  //     customerFamilyMembers: "",
  //     email: "",
  //     password: ""
  // })

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
  // const history = useHistory();

  // function handle(e) {
  //     const newdata = { ...data };
  //     newdata[e.target.id] = e.target.value;
  //     setData(newdata);

  // }

  return (
    <div className="main">
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
// <div>
//     <br></br>
//     <h3 className="text-center"> Register / SignUp</h3>
//     <div className="container">
//         <div className="row">
//             <div className="card col-md-6 offset-md-3 offset-md-3">

//                 <div className="card-body">
//                 <form onSubmit={(e) => submit(e)}  >
//                         <div className="form-group">
//                             <label> Customer ID: </label>
//                             <input onChange={(e) => handle(e)} type="number" id="customerId" value={data.customerId} className="form-control mb-4" placeholder="ID(temp)" />
//                         </div>
//                         <div className="form-group">
//                             <label> Name: </label>
//                             <input onChange={(e) => handle(e)} type="text" id="cutomerName" value={data.cutomerName} className="form-control mb-4" placeholder="Name" />
//                         </div>
//                         <div className="form-group">
//                             <label> Address: </label>
//                             <input onChange={(e) => handle(e)} type="text" id="customeraddress" value={data.customeraddress} className="form-control mb-4" placeholder="Address" />
//                         </div>

//                         <div className="form-group">
//                             <label> Age: </label>
//                             <input onChange={(e) => handle(e)} type="number" id="customerAge" value={data.customerAge} className="form-control mb-4" placeholder="Age" />
//                         </div>

//                         <div className="form-group">
//                             <label> Salary: </label>
//                             <input onChange={(e) => handle(e)} type="number" id="customerSalary" value={data.customerSalary} className="form-control mb-4" placeholder="Salary" />
//                         </div>

//                         <div className="form-group">
//                             <label> Contact Number: </label>
//                             <input onChange={(e) => handle(e)} type="number" id="customerContact" value={data.customerContact} className="form-control mb-4" placeholder="Contact" />
//                         </div>

//                         <div className="form-group">
//                             <label> Gender: </label>
//                             <input onChange={(e) => handle(e)} type="text" id="customerGender" value={data.customerGender} className="form-control mb-4" placeholder="Gender" />
//                         </div>

//                         <div className="form-group">
//                             <label> Family Members: </label>
//                             <input onChange={(e) => handle(e)} type="text" id="customerFamilyMembers" value={data.customerFamilyMembers} className="form-control mb-4" placeholder="Members" />
//                         </div>

//                         <div className="form-group">
//                             <label> Email: </label>
//                             <input onChange={(e) => handle(e)} type="text" id="email" value={data.email} className="form-control mb-4" placeholder="Email" />
//                         </div>

//                         <div className="form-group">
//                             <label> Password: </label>
//                             <input onChange={(e) => handle(e)} type="text" id="password" value={data.password} className="form-control mb-4" placeholder="Password" />
//                         </div>

//                         <button className="btn btn-info btn-block my-4" type="submit" >Register / SignUp</button>
//                         {/* <button className="btn btn-danger btn-block my-4" onClick={goBack} style={{marginLeft: "2em"}}>Go Back</button> */}

//                     </form>
//                 </div>
//             </div>
//         </div>

//     </div>
// </div>
