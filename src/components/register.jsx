import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import './register.css';
function Register() {
    const url = "http://localhost:2024/api/v1/add-Customer"
    const [data, setData] = useState({
        customerId: "",
        cutomerName: "",
        customeraddress: "",
        customerAge: "",
        customerSalary: "",
        customerContact: "",
        customerGender: "",
        customerFamilyMembers: "",
        email: "",
        password: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            customerId: data.customerId,
            cutomerName: data.cutomerName,
            customeraddress: data.customeraddress,
            customerAge: data.customerAge,
            customerSalary: data.customerSalary,
            customerContact: data.customerContact,
            customerGender: data.customerGender,
            customerFamilyMembers: data.customerFamilyMembers,
            email: data.email,
            password: data.password
        })
            .then(res => {
                alert('Registration Success');

            })
    }
    // const history = useHistory();

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);

    }

    return (
        <div className='main'>
            <div className="mainBox">
                <div className="title">Registration</div>
                <div className="content">
                    <form onSubmit={(e) => submit(e)} >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Customer ID(TEMP)</span>
                                <input onChange={(e) => handle(e)} type="number" id="customerId" value={data.customerId}
                                    placeholder="ID(temp)" />
                            </div>
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input onChange={(e) => handle(e)} type="text" id="cutomerName" value={data.cutomerName}
                                    placeholder="Name" />
                            </div>
                            <div className="input-box">
                                <span className="details">Address</span>
                                <input onChange={(e) => handle(e)} type="text" id="customeraddress" value={data.customeraddress}
                                    placeholder="Address" />
                            </div>
                            <div className="input-box">
                                <span className="details">Age</span>
                                <input onChange={(e) => handle(e)} type="number" id="customerAge" value={data.customerAge}
                                    placeholder="Age" />
                            </div>
                            <div className="input-box">
                                <span className="details">Salary</span>
                                <input onChange={(e) => handle(e)} type="number" id="customerSalary" value={data.customerSalary}
                                    placeholder="Salary" />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input onChange={(e) => handle(e)} type="number" id="customerContact" value={data.customerContact}
                                    placeholder="Contact" />
                            </div>
                        </div>
                        <div className="input-box">
                            <span className="details" >Family members</span>
                            <input onChange={(e) => handle(e)} type="text" className='form-2' id="customerFamilyMembers" value={data.customerFamilyMembers} placeholder="Members" />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input onChange={(e) => handle(e)} type="text" className='form-2' id="email" value={data.email} placeholder="Email" />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input onChange={(e) => handle(e)} type="text" className='form-2' id="password" value={data.password} placeholder="Password" />
                        </div>
                        <div className="input-box">
                            <span className="details">Gender</span>
                            <input onChange={(e) => handle(e)} type="text" className='form-2' id="customerGender" value={data.customerGender} placeholder="gender" />
                        </div>
                        

                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );

}
export default Register;
        // <div>
        //     <br></br>
        //     <h3 className="text-center"> Register / SignUp</h3>
        //     <div className="container">
        //         <div className="row">
        //             <div className="card col-md-6 offset-md-3 offset-md-3">

        //                 <div className="card-body">
        //                 <form onSubmit={(e) => submit(e)}  >
        //                         <div className="form-group">
        //                             <label> Customer ID: </label>
        //                             <input onChange={(e) => handle(e)} type="number" id="customerId" value={data.customerId} className="form-control mb-4" placeholder="ID(temp)" />
        //                         </div>
        //                         <div className="form-group">
        //                             <label> Name: </label>
        //                             <input onChange={(e) => handle(e)} type="text" id="cutomerName" value={data.cutomerName} className="form-control mb-4" placeholder="Name" />
        //                         </div>
        //                         <div className="form-group">
        //                             <label> Address: </label>
        //                             <input onChange={(e) => handle(e)} type="text" id="customeraddress" value={data.customeraddress} className="form-control mb-4" placeholder="Address" />
        //                         </div>

        //                         <div className="form-group">
        //                             <label> Age: </label>
        //                             <input onChange={(e) => handle(e)} type="number" id="customerAge" value={data.customerAge} className="form-control mb-4" placeholder="Age" />
        //                         </div>

        //                         <div className="form-group">
        //                             <label> Salary: </label>
        //                             <input onChange={(e) => handle(e)} type="number" id="customerSalary" value={data.customerSalary} className="form-control mb-4" placeholder="Salary" />
        //                         </div>

        //                         <div className="form-group">
        //                             <label> Contact Number: </label>
        //                             <input onChange={(e) => handle(e)} type="number" id="customerContact" value={data.customerContact} className="form-control mb-4" placeholder="Contact" />
        //                         </div>

        //                         <div className="form-group">
        //                             <label> Gender: </label>
        //                             <input onChange={(e) => handle(e)} type="text" id="customerGender" value={data.customerGender} className="form-control mb-4" placeholder="Gender" />
        //                         </div>

        //                         <div className="form-group">
        //                             <label> Family Members: </label>
        //                             <input onChange={(e) => handle(e)} type="text" id="customerFamilyMembers" value={data.customerFamilyMembers} className="form-control mb-4" placeholder="Members" />
        //                         </div>

        //                         <div className="form-group">
        //                             <label> Email: </label>
        //                             <input onChange={(e) => handle(e)} type="text" id="email" value={data.email} className="form-control mb-4" placeholder="Email" />
        //                         </div>

        //                         <div className="form-group">
        //                             <label> Password: </label>
        //                             <input onChange={(e) => handle(e)} type="text" id="password" value={data.password} className="form-control mb-4" placeholder="Password" />
        //                         </div>


        //                         <button className="btn btn-info btn-block my-4" type="submit" >Register / SignUp</button>
        //                         {/* <button className="btn btn-danger btn-block my-4" onClick={goBack} style={{marginLeft: "2em"}}>Go Back</button> */}

        //                     </form>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>