import React from "react";
import customerService from "../services/customerService";
import './viewCustomers.css';
class ViewCustomer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }
    componentDidMount() {
        customerService.getCustomers().then((response) => {
            this.setState({ customers: response.data })
        });
    }
    viewCustomerDetails(id){
        this.props.history.push(`/ViewCustomerDetails/${id}`);
        window.location.reload();
    }
    render() {
        return (
            <div className="maincontainer">
                <h1 className="text-center"> Customer List</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> Name</td>
                            <td> Address</td>
                            <td> Age</td>
                            <td> Salary </td>
                            <td> Contact</td>
                            <td> Gender</td>
                            {/* <td> Family Members</td> */}
                            <td> Email</td>
                            {/* <td> Password</td> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(
                                customer =>
                                    <tr key={customer.customerId}>
                                        <td> {customer.cutomerName}</td>
                                        <td> {customer.customeraddress}</td>
                                        <td> {customer.customerAge}</td>
                                        <td> {customer.customerSalary}</td>
                                        <td> {customer.customerContact}</td>
                                        <td> {customer.customerGender}</td>
                                        {/* <td> {customer.customerFamilyMembers}</td> */}
                                        <td> {customer.email}</td>
                                        <td> {customer.password}</td>
                                        <td> 
                                         <button onClick={() => this.viewCustomerDetails(customer.customerId)} className="btn btn-outline-info" style={{marginLeft: "8px"}} >Details</button>
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
export default ViewCustomer;