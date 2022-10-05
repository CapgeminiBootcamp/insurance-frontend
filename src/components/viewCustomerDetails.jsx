import React from 'react'
import customerService from '../services/customerService'

class ViewCustomerDetails extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            customer : {}
        }
    }
//Abhi ye component nahi chalega pehle getCustomerById ki api backend pe banani padegi 
    componentDidMount() {
        customerService.getCustomerById(this.state.id).then(res => {
            this.setState({ customer: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h1 className="text-center"> Customer Details</h1>
                    <div className="card-body fs-4">
                        <div className="row">

                            <div> <label className='fw-bold'> Customer Name: </label> {this.state.customer.cutomerName}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Customer Address: </label> {this.state.customer.customeraddress}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Customer Age Date: </label> {this.state.customer.customerAge}</div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        )
    }

}
export default ViewCustomerDetails