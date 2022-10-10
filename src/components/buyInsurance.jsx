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
                        <button onClick={() => this.viewCustomerDetails(this.state.customer.customerId)} className="btn btn-outline-info btn-lg button" >Your Details</button>
                        <button onClick={() => this.updateCustomer(this.state.customer.customerId)} className="btn btn-outline-primary btn-lg" >Update Details</button>
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
                                            <button onClick={() => this.buyInsurance(this.state.customer.customerId, insurance.insuranceId)} className="btn btn-outline-success" style={{ marginLeft: "8px" }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
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