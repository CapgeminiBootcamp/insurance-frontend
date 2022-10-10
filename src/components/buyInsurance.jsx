import React from 'react'
import customerService from '../services/customerService'
import insuranceService from '../services/insuranceService';
import './buyInsurance.css';
class BuyInsurance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            customer: {},
            insurances: []

        };

    }
    //Abhi ye component nahi chalega pehle getCustomerById ki api backend pe banani padegi 
    componentDidMount() {
        customerService.getCustomerById(this.state.id).then(res => {
            this.setState({ customer: res.data });

        });
        insuranceService.getInsurance().then((response) => {
            this.setState({ insurances: response.data })
        });
    }
    buyInsurance(customerId, insuranceId) {

        insuranceService.buyInsurance(customerId, insuranceId).then(res => {
            // this.setState({insurances: this.state.insurances.filter(insurance => insurance.insuranceId !== id)});
        });

        this.props.history.push(`/payment/${customerId}`);
    }
    viewCustomerDetails(id) {
        this.props.history.push(`/ViewCustomerDetails/${id}`);
        window.location.reload();
    }
    updateCustomer(id) {
        this.props.history.push(`/updateCustomer/${id}`);
        window.location.reload();
    }

    render() {
        return (

            <div className="maincontainer">
                <div className='customerWizard'>
                    {/* <h2>Hello, <span></span></h2> */}
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, {this.state.customer.cutomerName}!</h1>
                        <p className="lead">A Comprehensive Protection At an Affordable Price To Protect Yourself and Your Loved Ones.</p>
                        <hr className="my-4" />
                        <p>Please find an appropriate insurance which suits and fullfills all your needs</p>
                        <button onClick={() => this.viewCustomerDetails(this.state.customer.customerId)} className="btn btn-outline-info btn-lg button" ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg> Your Details</button>
                        <button onClick={() => this.updateCustomer(this.state.customer.customerId)} className="btn btn-outline-primary btn-lg" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg> Update Details</button>
                    </div>
                </div>
                <h2 className="text-center display-4">Available Insurances</h2>

                <table className="table table-striped " id="table">
                    <thead>
                        <tr>
                            <td>Insurance Name</td>
                            <td>Sum Assurance</td>
                            <td>Premium</td>
                            <td>Tenure </td>
                            <td>Action</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.insurances.map(
                                insurance =>
                                    <tr key={insurance.insuranceId}>
                                        <td> {insurance.insuranceName}</td>
                                        <td> {insurance.sumAssurance}</td>
                                        <td> {insurance.preminiumAmount}</td>
                                        <td> {insurance.tenture}</td>


                                        <td>
                                            <button onClick={() => this.buyInsurance(this.state.customer.customerId, insurance.insuranceId)} className="btn btn-outline-success" style={{ marginLeft: "8px" }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                            </svg> Buy Now</button>

                                            {/* <button onClick={() => this.viewInsuranceDetails(insurance.insuranceId)} className="btn btn-outline-info" style={{marginLeft: "8px"}} >Details</button> */}
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
export default BuyInsurance