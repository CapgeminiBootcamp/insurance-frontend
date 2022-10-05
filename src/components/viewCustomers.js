import React from "react";
import customerService from "../services/customerService";

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
    render() {
        return (
            <div>
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
                            <td> Family Members</td>
                            <td> Email</td>
                            <td> Password</td>
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
                                        <td> {customer.customerFamilyMembers}</td>
                                        <td> {customer.email}</td>
                                        <td> {customer.password}</td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ViewCustomer