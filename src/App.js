import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Register from "./components/register";
import Dashboard from "./components/Dashboard/dashboard";
import ViewInsurance from "./components/insurance/viewInsurance";
import ViewCustomer from './components/viewCustomers';
import Login from './components/Login/login';
import ViewCustomerDetails from './components/viewCustomerDetails';
import BuyInsurance from './components/buyInsurance';
import AdminLogin from './components/admin/adminLogin/adminLogin';
import EditInsurance from './components/admin/editInsurance/editInsurance'
import AddInsurance from './components/admin/addInsurance/addInsurance'
import PaymentPage from './components/insurance/paymentPage';
import CustomerDash from './components/customerDash';
import UpdateCustomer from './components/updateCustomer';
import UpdateInsurance from './components/insurance/updateInsurance';
import LoginAdmin from './components/Login/LoginAdmin';

function App() {
  return (
    <div className="App">
      <Router>
        
        <div className='box'>
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/viewCustomer' component={ViewCustomer}></Route>
            <Route exact path="/Register" component={Register}></Route>
            <Route exact path="/viewInsurance" component={ViewInsurance}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/adminlogin" component={LoginAdmin}></Route>
            <Route exact path="/viewcustomerdetails/:id" component={ViewCustomerDetails}></Route>
            <Route exact path="/buyInsurance/:id" component={BuyInsurance}></Route>
            <Route exact path="/adminLogin" component={AdminLogin}></Route>
            <Route exact path="/editInsurance/:id" component={EditInsurance}></Route>
            <Route exact path="/addInsurance" component={AddInsurance}></Route>
            <Route exact path="/payment/:id" component={PaymentPage}></Route>
            <Route exact path="/customerDash/:id" component={CustomerDash}></Route>
            <Route exact path="/updateCustomer/:id" component={UpdateCustomer}></Route>
            <Route exact path="/updateInsurance/:id" component={UpdateInsurance}></Route>
          </Switch>
        </div>
        <br /><br />
      </Router>
    </div>
  );
}

export default App;
{/* <Router>
        <Header/>
            <Routes>
              <Route exact path ='/' element = {<ViewCustomer/>}></Route>
              <Route exact path ='/viewCustomer' element = {<ViewCustomer/>}></Route>
              <Route exact path ="/Register" element = {<Register/>}></Route>             
              <Route exact path ="/viewInsurance" element = {<ViewInsurance/>}></Route>
              <Route exact path ="/login" element = {<Login/>}></Route>
              <Route exact path ="/viewcustomerdetails/:id" element = {<ViewCustomerDetails/>}></Route>
            </Routes> 
    <Router/> */
}