import React, { useState } from "react";
import "../Dashboard/dashboard.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Calculator(values) {
  var EstimateValue = 0;
  const [annualIncome, setAnnualIncome] = useState("");
  const [age, setAge] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");
  
  
  function calculate(values) {
    if (values.annualIncome >= 100000 && values.annualIncome <= 500000)
      EstimateValue = values.annualIncome * 15;

    else if (values.annualIncome > 500000 && values.annualIncome <= 1000000)
      EstimateValue = values.annualIncome * 18;
      
    else if (values.annualIncome > 1000000) EstimateValue = values.annualIncome * 20;
    if (EstimateValue == 1) alert("You are not eligible");

    document.getElementById("newId").innerHTML =
      "Your final Estimated Value is" + " " + EstimateValue;

      console.log("button clicked")
  }

  const calculatorSchema = Yup.object().shape({
    age: Yup.number()
      .required("Age is required")
      .min(18, "Age should be 18 years "),
    annualIncome: Yup.number()
      .required("Salary is required")
      .min(100000, "Salary should be atleast 100000"),
    familyMembers: Yup.number()
      .required("Family Members is a requied filed")
      .min(0, "Family Members has to be atleast 0"),
    gender: Yup.string().required("This is a required Field"),
  });

  return (
    <div className="main">
      <div className="container">
        <center>
          <div className="title">Term Calculator</div>
        </center>
        <Formik
          initialValues={{
            age: "",
            annualIncome: "",
            familyMembers: "",
            gender: "",
          }}
          onSubmit={(e) => calculate(e)}
          validationSchema={calculatorSchema}
        >
          {(props) => (
            <div className="content">
              <Form className="was-validated">
                <div className="user-details">
                  <div className="input-box">
                    <label className="form-label">Age</label>
                    <Field
                      type="number"
                      placeholder="Age"
                      name="age"
                      id="age"
                    />
                    <ErrorMessage name="age" />
                    {/* <div className="invalid-feedback" id='ageInvalid'></div> */}
                    {/* <div className="invalid-feedback"  id='ageInvalid'>Please fill out this field.</div> */}
                  </div>
                  <div className="input-box">
                    <label className="form-label">Annual Income</label>
                    <Field
                      type="number"
                      placeholder="Annual Income"
                      name="annualIncome"
                      id="annualIncome"
                    />

                    {/* <div className="invalid-feedback" id='incomeInvalid' >Please fill out this field.</div> */}
                    <ErrorMessage name="annualIncome" />
                  </div>
                </div>
                <div className="input-box">
                  <label className="form-label">Family Members</label>
                  <br></br>
                  <Field
                    type="text"
                    className="form-2"
                    placeholder="Members"
                    name="familyMembers"
                    id="familyMembers"
                  />

                  {/* <div className="invalid-feedback">Please fill out this field.</div> */}
                  <ErrorMessage name="familyMembers" />
                </div>

                {/* ---------------------------------these are radio buttons------------------------------ */}
                <label className="form-;abel" style={{marginTop:"10px"}}>Gender</label>

                <div>
                <label className="m-2 btn" style ={{borderColor:"#9b59b6"}}>
                    <Field type="radio" name="gender" value="Male" />
                    Male
                  </label>
                  <label className="m-2 btn" style ={{borderColor:"#9b59b6"}}>
                    <Field type="radio" name="gender" value="Male" />
                    Female
                  </label>                  
                  <label className="m-2 btn" style ={{borderColor:"#9b59b6"}}>
                    <Field type="radio" name="gender" value="Male" />
                    Others
                  </label>                  
                  <ErrorMessage name="gender" />
                </div>

                <div className="button">
                  <input
                    className="calculate-btn"
                    type="submit"
                    value="Calculate"
                    // onClick={calculate}
                  />
                </div>
              </Form>
              <div className="new-one">
                <p id="newId"></p>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Calculator;
