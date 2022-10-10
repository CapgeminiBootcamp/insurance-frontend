import React, { Component } from 'react'
import insuranceService from '../../services/insuranceService'
export default class UpdateInsurance extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            insuranceName: "",
            sumAssurance: "",
            preminiumAmount: "",
            tenture: ""
        }
        this.changeInsuranceIdHandler = this.changeInsuranceIdHandler.bind(this);
        this.changeInsuranceNameHandler = this.changeInsuranceNameHandler.bind(this);
        this.changeSumAssuranceHandler = this.changeSumAssuranceHandler.bind(this);
        this.changePreminiumAmountHandler = this.changePreminiumAmountHandler.bind(this);
        this.changeTentureHandler = this.changeTentureHandler.bind(this);
        


        this.updateInsurance = this.updateInsurance.bind(this);
    }
    componentDidMount() {
        insuranceService.getInsuranceById(this.state.id).then((res) => {
            let insurance = res.data;
            this.setState({
                insuranceId: insurance.insuranceId,
                insuranceName: insurance.insuranceName,
                sumAssurance: insurance.sumAssurance,
                preminiumAmount: insurance.preminiumAmount,
                tenture: insurance.tenture
            });
        });
    }

    updateInsurance = (e) => {
        e.preventDefault();
        console.log("save pressed")
        let insurance = { 
            insuranceId: this.state.insuranceId,
            insuranceName: this.state.insuranceName, 
            sumAssurance: this.state.sumAssurance, 
            preminiumAmount: this.state.preminiumAmount,
            tenture: this.state.tenture};

        insuranceService.updateInsurance(insurance).then(res => {
            this.props.history.push('/viewInsurance');
        });
    }
    changeInsuranceIdHandler = (event) => {
        this.setState({ insuranceId: event.target.value });
    }

    changeInsuranceNameHandler = (event) => {
        this.setState({ insuranceName: event.target.value });
    }

    changeSumAssuranceHandler = (event) => {
        this.setState({ sumAssurance: event.target.value });
    }

    changePreminiumAmountHandler = (event) => {
        this.setState({ preminiumAmount: event.target.value });
    }
    changeTentureHandler = (event) => {
        this.setState({ tenture: event.target.value });
    }
    

    cancel() {
        this.props.history.push('/viewInsurance');
    }

    render() {
        return (

            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Insurance</h3>
                            <div className="card-body">
                                <form>
                                {/* <div className="form-group">
                                        <label> Customer Id: </label>
                                        <input name="Id" className="form-control"
                                            value={this.state.customerId} onChange={this.changeCustomerIdHandler} />
                                    </div> */}
                                    <div className="form-group">
                                        <label> Insurance Name: </label>
                                        <input name="Name" className="form-control"
                                            value={this.state.insuranceName} onChange={this.changeInsuranceNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Sum Assurance: </label>
                                        <input  name="sumAssurane" className="form-control"
                                            value={this.state.sumAssurance} onChange={this.changeSumAssuranceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Premium Amount: </label>
                                        <input  name="preminiumAmount" className="form-control"
                                            value={this.state.preminiumAmount} onChange={this.changePreminiumAmountHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Tenure: </label>
                                        <input  name="Tenure" className="form-control"
                                            value={this.state.tenture} onChange={this.changeTentureHandler} />
                                    </div>
                                   

                                    <button className="btn btn-outline-success" onClick={this.updateInsurance}>Save</button>
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

