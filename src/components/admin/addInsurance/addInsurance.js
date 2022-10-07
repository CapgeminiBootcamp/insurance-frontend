import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./addInsurance.css"
import axios from "axios";

function AddInsurance() {


  const addInsuranceSchema = Yup.object().shape({
    name: Yup.string().required("Insurance Name cannot be empty"),
    sum: Yup.number()
      .required("Sum cannot be Empty")
      .min(50000, "cannot be less than 500000"),
    premium_amount: Yup.string().required("premium amount cannot be empty"),
    tenure: Yup.number()
      .min(1, "tenure cannot be less than 1 year")
      .required("Tenure cannot be empty"),
  });

  let handleSubmit = (values) => {
    
      console.log(values, values.premium_amount)
      // values.premium_amount
    axios({
      method: "put",
      url: "http://localhost:2024/api/v1/insurance",
      data: {
        insuranceName: values.name,
        sumAssurance: values.sum,
        preminiumAmount: values.premium_amount,
        tenture: values.tenure,
      },
    })
      .then((res) => {
        // console.log(res)
        alert("Login Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <br></br>
      <h1 className="text-center">Add Insurance</h1>
      <br></br>
      <Formik
        initialValues={{
          id: "",
          name: "",
          sum: "",
          premium_amount: "",
          tenure: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validationSchema={addInsuranceSchema}
      >
        {(props) => (
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <div className="card-body">
                  <Form className="">
                    <div className="form-group">
                      <label>Insurance Name</label>
                      <Field
                        type="text"
                        name="name"
                        className="form-control mb-4"
                      />
                      <ErrorMessage name="name" />
                    </div>
                    <div>
                      <label>Sum Assured</label>
                      <Field
                        type="number"
                        name="sum"
                        className="form-control mb-4"
                      />
                      <ErrorMessage name="sum" />
                    </div>
                    <div>
                      <label>Premium Amount</label>
                      <Field
                        type="text"
                        name="premium_amount"
                        className="form-control mb-4"
                      />
                      <ErrorMessage name="premium_amount" />
                    </div>
                    <div>
                      <label>Tenure</label>
                      <Field
                        type="number1"
                        name="tenure"
                        className="form-control mb-4"
                      />
                      <ErrorMessage name="tenure" />
                    </div>

                    <button className="btn-btn primary" type="submit">
                      Add Insurance
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default AddInsurance;
