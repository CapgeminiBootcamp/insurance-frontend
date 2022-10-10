import React from 'react'
import customerService from '../../services/customerService';
import insuranceService from '../../services/insuranceService';
import './paymentPage.css';
class PaymentPage extends React.Component {
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

    goHome() {
        this.props.history.push(`/`);
        // window.location.reload();
    }

    render() {
        return (
            <div class="container" id='box'>
                <div class="row">
                    <div class="col-md-6 mx-auto mt-5">
                        <div class="payment">
                            <div class="payment_header">
                                <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
                            </div>
                            <div class="content">
                                <h1>Payment Success !</h1>
                                <p>Thank you, {this.state.customer.cutomerName} for putting your trust in Pure Insurance Pvt.Ltd we have processed your request and it will reflect on your dashboard shortly  </p>
                                <button onClick={() => this.goHome()}type="button" className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                </svg> Home</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default PaymentPage