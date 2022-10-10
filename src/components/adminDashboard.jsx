import React from "react"
import {Outlet} from 'react-router-dom'
import AdminNav from "./adminNav" 
function AdminDashboard(){
    return(
        <div>
            <section style={{backgroundColor: "#eee", minHeight: "100vh" }}>
               
               <div className = "container py-5">
                <AdminNav />
                <h1>Hello Admin!</h1>
                <hr />
                <Outlet />
               </div>
               
                </section>
        </div>
    )
}

export default AdminDashboard;