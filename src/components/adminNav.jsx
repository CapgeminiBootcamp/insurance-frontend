import React from React;
import { Link } from "react-router-dom";

function AdminNav(){
    return (
        <div>
        <nav className='navbar m-3'>
          <div className='btn-group'>

            <Link to="/viewCustomers/">
              <button className='btn btn-primary'>
                View customers
              </button>
            </Link>

            <Link to="addInsurance">
              <button className='btn btn-primary'>
                Add Insurances
              </button>
            </Link>

            <Link to="editInsurance">
              <button className='btn btn-primary'>
                Edit Insurances
              </button>
            </Link>

            <Link to="view-all-projects">
              <button className='btn btn-primary'>
                Project List
              </button>
            </Link>
          </div>
        </nav>
      </div>
    )
}

export default AdminNav;