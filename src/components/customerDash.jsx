import React from 'react';
import customerService from '../services/customerService';
import insuranceService from '../services/insuranceService';
class CustomerDash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            customer: {}


        };

    }
    //Abhi ye component nahi chalega pehle getCustomerById ki api backend pe banani padegi 
    componentDidMount() {
        customerService.getCustomerById(this.state.id).then(res => {
            this.setState({ customer: res.data });

        });

    }

    viewCustomerDetails(id) {
        this.props.history.push(`/ViewCustomerDetails/${id}`);
        window.location.reload();
    }

    render() {
        return (

            <div>hello</div>
            // <div className="maincontainer">
            //     <div className='customerWizard'>
            //         {/* <h2>Hello, <span></span></h2> */}
            //         <div className="jumbotron">
            //             <h1 className="display-4">Hello, {this.state.customer.cutomerName}!</h1>
            //             <p className="lead">A Comprehensive Protection At an Affordable Price To Protect Yourself and Your Loved Ones.</p>
            //             <hr className="my-4" />
            //             <p>Please find an appropriate insurance which suits and fullfills all your needs</p>
            //             <button onClick={() => this.viewCustomerDetails(this.state.customer.customerId)} className="btn btn-outline-info btn-lg" >Your Details</button>

            //             {/* <a className="btn btn-outline-info btn-lg" href="#" role="button">Your Details</a> */}
            //         </div>
            //     </div>
            //     <h2 className="text-center display-4">Available Insurances</h2>

            //     {/* {this.state.customer.insurances[0].insuranceId} */}

            //     <table className="table table-striped " id="table">
            //         <thead>
            //             <tr>
            //                 <td>Insurance Name</td>
            //                 <td>Sum Assurance</td>
            //                 <td>Premium</td>
            //                 <td>Tenure </td>


            //             </tr>
            //         </thead>
            //         <tbody>
            //             {
            //                 this.state.customer[insurances].map(
            //                     insurance =>
            //                         <tr key={insurance.insuranceId}>
            //                             <td> {insurance.insuranceName}</td>
            //                             <td> {insurance.sumAssurance}</td>
            //                             <td> {insurance.preminiumAmount}</td>
            //                             <td> {insurance.tenture}</td>


            //                             <td>

            //                                 {/* <button onClick={() => this.viewInsuranceDetails(insurance.insuranceId)} className="btn btn-outline-info" style={{marginLeft: "8px"}} >Details</button> */}
            //                             </td>
            //                         </tr>
            //                 )
            //             }
            //         </tbody>
            //     </table>

            // </div>
            //  </div>
        )
    }

}
export default CustomerDash
