import React from 'react'
import './Header.css';
import './Assets/pinko.css';
import './customerDash.css'
import logo1 from './images/logo1.png'

function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#2D2D2D" }}>

            <a className="navbar-brand" href="#">
                <img src={logo1} alt="" width="60" height="35" className="d-inline-block align-text-top" />

            </a>

            <a className="navbar-brand" href="#">Pure Insurance</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/viewCustomer">View Customers</a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href='/viewInsurance'>View Insurances</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/addInsurance'>Add Insurances</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/login'>Log Out</a>
                    </li>
                </ul>

            </div>
        </nav>

    )
}
export default Header;


