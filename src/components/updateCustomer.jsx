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

                                    <button className="btn btn-outline-success" onClick={this.updateCustomer}>Save</button>
                                    <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{ margin: "1em" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

