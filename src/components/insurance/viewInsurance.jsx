import React from "react";
import insuranceService from "../../services/insuranceService";
import './viewInsurance.css';
class ViewInsurance extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            insurances: []
        }
    }
    componentDidMount() {
        insuranceService.getInsurance().then((response) => {
            this.setState({ insurances: response.data })
        });
    }
    viewInsuranceDetails(id) {
        this.props.history.push(`/ViewInsuranceDetails/${id}`);
        window.location.reload();
    }
    deleteInsurance(id) {
        insuranceService.deleteInsurance(id).then(res => {
            this.setState({ insurances: this.state.insurances.filter(insurance => insurance.insuranceId !== id) });
        });
        alert("Insurance Deleted")
    }
    render() {
        return (
            <div className="maincontainer">
                <h1 className="text-center"> Insurance List</h1>

                <table className="table table-striped">
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
                                            <button onClick={() => this.deleteInsurance(insurance.insuranceId)} className="btn btn-outline-danger" style={{ marginLeft: "8px" }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                            </svg></button>

                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ViewInsurance