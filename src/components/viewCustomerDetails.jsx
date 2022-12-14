import React from 'react'
import customerService from '../services/customerService'
import Header from './Header';

class ViewCustomerDetails extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            customer : {},
            
        };
    }
    componentDidMount() {
        customerService.getCustomerById(this.state.id).then(res => {
            this.setState({ customer: res.data });
        })
    }
    back() {
        this.props.history.goBack();
        // window.location.reload();
    }
   

    render() {
        return (
            <div className='maincontainer'>
                {/* <Header></Header> */}
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h1 className="text-center"> Customer Details</h1>
                    <div className="card-body fs-4">
                        <div className="row">

                            <div> <label className='fw-bold'> Name: </label> {this.state.customer.cutomerName}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Address: </label> {this.state.customer.customeraddress}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Age : </label> {this.state.customer.customerAge}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Salary : </label> {this.state.customer.customerSalary}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Contact : </label> {this.state.customer.customerContact}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Gender : </label> {this.state.customer.customerGender}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Family Members : </label> {this.state.customer.customerFamilyMembers}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> email : </label> {this.state.customer.email}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Password : </label> {this.state.customer.password}</div>
                        </div>
                        
                    </div>

                    <button onClick={() => this.back()} className="btn btn-outline-primary" >Go back</button>
                </div>
            </div>
        )
    }

}
export default ViewCustomerDetails