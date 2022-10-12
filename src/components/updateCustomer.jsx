import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { Component } from 'react'
import customerService from '../services/customerService';
export default class UpdateCustomer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cutomerName: "",
            customeraddress: "",
            customerAge: "",
            customerSalary: "",
            customerContact: "",
            customerGender: "",
            customerFamilyMembers: "",
            email: "",
            password: ""
        }
        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
        this.changeCutomerNameHandler = this.changeCutomerNameHandler.bind(this);
        this.changeCustomeraddressHandler = this.changeCustomeraddressHandler.bind(this);
        this.changeCustomerAgeHandler = this.changeCustomerAgeHandler.bind(this);
        this.changeCustomerSalaryHandler = this.changeCustomerSalaryHandler.bind(this);
        this.changeCustomerContactHandler = this.changeCustomerContactHandler.bind(this);
        this.changeCustomerGenderHandler = this.changeCustomerGenderHandler.bind(this);
        this.changeCustomerFamilyMembersHandler = this.changeCustomerFamilyMembersHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);


        this.updateCustomer = this.updateCustomer.bind(this);
    }
    componentDidMount() {
        customerService.getCustomerById(this.state.id).then((res) => {
            let customer = res.data;
            this.setState({
                customerId: customer.customerId,
                cutomerName: customer.cutomerName,
                customeraddress: customer.customeraddress,
                customerAge: customer.customerAge,
                customerSalary: customer.customerSalary,
                customerContact: customer.customerContact,
                customerGender: customer.customerGender,
                customerFamilyMembers: customer.customerFamilyMembers,
                email: customer.email,
                password: customer.password
            });
        });
    }

    updateCustomer = (e) => {
        e.preventDefault();
        console.log("save pressed")
        let customer = { 
            customerId: this.state.customerId,
            cutomerName: this.state.cutomerName, 
            customeraddress: this.state.customeraddress, 
            customerAge: this.state.customerAge,
            customerSalary: this.state.customerSalary,
            customerContact: this.state.customerContact,
            customerGender: this.state.customerGender, 
            customerFamilyMembers: this.state.customerFamilyMembers,
            email: this.state.email,
            password: this.state.password};

        customerService.updateCustomer(customer).then(res => {
            this.props.history.push('/buyInsurance/'+ this.state.customerId);
        });
    }
    changeCustomerIdHandler = (event) => {
        this.setState({ customerId: event.target.value });
    }

    changeCutomerNameHandler = (event) => {
        this.setState({ cutomerName: event.target.value });
    }

    changeCustomeraddressHandler = (event) => {
        this.setState({ customeraddress: event.target.value });
    }

    changeCustomerAgeHandler = (event) => {
        this.setState({ customerAge: event.target.value });
    }
    changeCustomerSalaryHandler = (event) => {
        this.setState({ customerSalary: event.target.value });
    }
    changeCustomerContactHandler = (event) => {
        this.setState({ customerContact: event.target.value });
    }
    changeCustomerGenderHandler = (event) => {
        this.setState({ customerGender: event.target.value });
    }
    changeCustomerFamilyMembersHandler = (event) => {
        this.setState({ customerFamilyMembers: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    cancel() {
        this.props.history.push('/buyInsurance/'+ this.state.customerId);
    }
    back() {
        this.props.history.goBack();
        // window.location.reload();
    }

    render() {
        return (

            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Customer</h3>
                            <div className="card-body">
                                <form>
                                 
                                {/* <div className="form-group">
                                        <label> Customer Id: </label>
                                        <input name="Id" className="form-control"
                                            value={this.state.customerId} onChange={this.changeCustomerIdHandler} />
                                    </div> */}
                                    <div className="form-group">
                                        <label> Customer Name: </label>
                                        <input name="title" className="form-control"
                                            value={this.state.cutomerName} onChange={this.changeCutomerNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address: </label>
                                        <input  name="address" className="form-control"
                                            value={this.state.customeraddress} onChange={this.changeCustomeraddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Age: </label>
                                        <input  name="age" className="form-control"
                                            value={this.state.customerAge} onChange={this.changeCustomerAgeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Salary: </label>
                                        <input  name="Salary" className="form-control"
                                            value={this.state.customerSalary} onChange={this.changeCustomerSalaryHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Contact: </label>
                                        <input  name="Contact" className="form-control"
                                            value={this.state.customerContact} onChange={this.changeCustomerContactHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Gender: </label>
                                        <input  name="gender" className="form-control"
                                            value={this.state.customerGender} onChange={this.changeCustomerGenderHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Family Members: </label>
                                        <input  name="family" className="form-control"
                                            value={this.state.customerFamilyMembers} onChange={this.changeCustomerFamilyMembersHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input  name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input  name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>

                                    <button className="btn btn-outline-success btn" onClick={this.updateCustomer}>Save</button>
                                    <button className="btn btn-outline-danger btn" onClick={this.cancel.bind(this)} style={{ margin: "1em" }}>Cancel</button>
                                    <button onClick={() => this.back()} className="btn btn-outline-danger" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg> Go Back</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


























// import { ErrorMessage, Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import React, { Component } from 'react'
// import customerService from '../services/customerService';
// export default class UpdateCustomer extends Component {


//      updateSchema = Yup.object().shape({
//         customerName: Yup.string().required("This Field cannot be empty"),
//         customeraddress: Yup.string().required("This Field cannot be empty"),
//         customerAge: Yup.number()
//           .positive("Age cannot be zero")
//           .required("This Field cannot be empty")
//           .integer("Age cannot be a floating number"),
//         customerSalary: Yup.number()
//           .required("This Field cannot be empty")
//           .positive("Salary cannot be negative"),
//         customerContact: Yup.string()
//           .length(10)
//           .required("This Field cannot be empty")
//           .matches(/^$|[6-9][0-9]{9}/, "Phone number is not valid"),
    
//         customerFamilyMembers: Yup.number()
//           .required("This Field cannot be empty")
//           .min(0, "Family members cannot be less than 0"),
//         email: Yup.string().email().required("This Field cannot be empty"),
//         password: Yup.string()
//           .min(8, "password should be 8 characters long")
//           .required("This Field cannot be empty"),
//         customerGender: Yup.string().required("This Field cannot be empty"),
//       });

//     constructor(props) {

    

//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             cutomerName: "",
//             customeraddress: "",
//             customerAge: "",
//             customerSalary: "",
//             customerContact: "",
//             customerGender: "",
//             customerFamilyMembers: "",
//             email: "",
//             password: ""
//         }
//         this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
//         this.changeCutomerNameHandler = this.changeCutomerNameHandler.bind(this);
//         this.changeCustomeraddressHandler = this.changeCustomeraddressHandler.bind(this);
//         this.changeCustomerAgeHandler = this.changeCustomerAgeHandler.bind(this);
//         this.changeCustomerSalaryHandler = this.changeCustomerSalaryHandler.bind(this);
//         this.changeCustomerContactHandler = this.changeCustomerContactHandler.bind(this);
//         this.changeCustomerGenderHandler = this.changeCustomerGenderHandler.bind(this);
//         this.changeCustomerFamilyMembersHandler = this.changeCustomerFamilyMembersHandler.bind(this);
//         this.changeEmailHandler = this.changeEmailHandler.bind(this);
//         this.changePasswordHandler = this.changePasswordHandler.bind(this);


//         this.updateCustomer = this.updateCustomer.bind(this);
//     }
//     componentDidMount() {
//         customerService.getCustomerById(this.state.id).then((res) => {
//             let customer = res.data;
//             this.setState({
//                 customerId: customer.customerId,
//                 cutomerName: customer.cutomerName,
//                 customeraddress: customer.customeraddress,
//                 customerAge: customer.customerAge,
//                 customerSalary: customer.customerSalary,
//                 customerContact: customer.customerContact,
//                 customerGender: customer.customerGender,
//                 customerFamilyMembers: customer.customerFamilyMembers,
//                 email: customer.email,
//                 password: customer.password
//             });
//         });
//     }

//     updateCustomer = (values) => {
//         // e.preventDefault();
//         console.log("save pressed")
//         let customer = { 
//             customerId: this.state.customerId,
//             cutomerName: values.customerName, 
//             customeraddress:  values.customeraddress, 
//             customerAge: values.customerAge,
//             customerSalary:  values.customerSalary,
//             customerContact: values.customerContact,
//             customerGender: values.customerGender, 
//             customerFamilyMembers: values.customerFamilyMembers,
//             email: values.email,
//             password: values.password};

//         customerService.updateCustomer(customer).then(res => {
//             this.props.history.push('/buyInsurance/'+ this.state.customerId);
//         });
//     }
//     changeCustomerIdHandler = (event) => {
//         this.setState({ customerId: event.target.value });
//     }

//     changeCutomerNameHandler = (event) => {
//         this.setState({ cutomerName: event.target.value });
//     }

//     changeCustomeraddressHandler = (event) => {
//         this.setState({ customeraddress: event.target.value });
//     }

//     changeCustomerAgeHandler = (event) => {
//         this.setState({ customerAge: event.target.value });
//     }
//     changeCustomerSalaryHandler = (event) => {
//         this.setState({ customerSalary: event.target.value });
//     }
//     changeCustomerContactHandler = (event) => {
//         this.setState({ customerContact: event.target.value });
//     }
//     changeCustomerGenderHandler = (event) => {
//         this.setState({ customerGender: event.target.value });
//     }
//     changeCustomerFamilyMembersHandler = (event) => {
//         this.setState({ customerFamilyMembers: event.target.value });
//     }
//     changeEmailHandler = (event) => {
//         this.setState({ email: event.target.value });
//     }
//     changePasswordHandler = (event) => {
//         this.setState({ password: event.target.value });
//     }

//     cancel() {
//         this.props.history.push('/buyInsurance/'+ this.state.customerId);
//     }

//     render() {
//         return (

//             <div>
//                 <br></br>
//                 <div className="container">
//                     <div className="row">
//                         <div className="card col-md-6 offset-md-3 offset-md-3">
//                             <h3 className="text-center">Update Customer</h3>
//                             <div className="card-body">
//                                 <Formik
//                                     initialValues={{
//                                          customerId: this.state.customerId,
//                                          cutomerName: this.state.cutomerName, 
//                                          customeraddress: this.state.customeraddress, 
//                                          customerAge: this.state.customerAge,
//                                          customerSalary: this.state.customerSalary,
//                                          customerContact: this.state.customerContact,
//                                          customerGender: this.state.customerGender, 
//                                          customerFamilyMembers: this.state.customerFamilyMembers,
//                                          email: this.state.email,
//                                          password: this.state.password
                             
//                                     }}

//                                     onSubmit={(e) => updateCustomer(e)}
//                                     validationSchema = {updateSchema}
//                                     >
//                                 {/* <div className="form-group">
//                                         <label> Customer Id: </label>
//                                         <input name="Id" className="form-control"
//                                             value={this.state.customerId} onChange={this.changeCustomerIdHandler} />
//                                     </div> */}
//                                     {(props) => (
//                                         <Form>
//                                     <div className="form-group">
//                                         <label> Customer Name: </label>
//                                         <Field name="customerName" className="form-control" type="text" id="customerName" />
//                                         <ErrorMessage name ="customerName" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Address: </label>
//                                         <Field name="customeraddress" className="form-control" type="text" id="customeraddress" />
//                                         <ErrorMessage name ="customeraddress" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Age: </label>
//                                         <Field name="customerAge" className="form-control" type="number" id="customerAge" />
//                                         <ErrorMessage name ="customerAge" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Salary: </label>
//                                         <Field name="customerSalary" className="form-control" type="number" id="customerSalary" />
//                                         <ErrorMessage name ="customerSalary" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Contact: </label>
//                                         <Field name="customerContact" className="form-control" type="text" id="customerContact" />
//                                         <ErrorMessage name ="customerContact" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Gender: </label>
//                                         <Field name="customerGender" className="form-control" type="text" id="customerGender" />
//                                         <ErrorMessage name ="customerGender" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Family Members: </label>
//                                         <Field name="customerFamilyMembers" className="form-control" type="number" id="customerFamilyMembers" />
//                                         <ErrorMessage name ="customerFamilyMembers" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Email: </label>
//                                         <Field name="email" className="form-control" type="email" id="email" />
//                                         <ErrorMessage name ="email" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Password: </label>
//                                         <Field name="password" className="form-control" type="text" id="password" />
//                                         <ErrorMessage name ="password" />
//                                     </div>

//                                     <button className="btn btn-outline-success" type="submit">Save</button>
//                                     <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{ margin: "1em" }}>Cancel</button>
//                                         </Form>
//                                     )}
                               
//                                 </Formik>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

