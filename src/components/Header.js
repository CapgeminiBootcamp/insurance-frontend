import React from 'react'
import './Header.css';
import logo1 from './images/logo1.png'

function Header(){
    return (

        <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#44475a" }}>
            
                <a className="navbar-brand" href="#">
                    <img src={logo1} alt="" width="60" height="35" class="d-inline-block align-text-top"/>
                        
                </a>
            
            <a className="navbar-brand" href="#">Online Term Insurance</a>
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
                        <a className="nav-link" href='/register'>Register/SignUP</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}
export default Header;