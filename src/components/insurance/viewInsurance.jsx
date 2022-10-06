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
    viewInsuranceDetails(id){
        this.props.history.push(`/ViewInsuranceDetails/${id}`);
        window.location.reload();
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
                                         <button onClick={() => this.viewInsuranceDetails(insurance.insuranceId)} className="btn btn-outline-danger" style={{marginLeft: "8px"}} >Details</button>
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