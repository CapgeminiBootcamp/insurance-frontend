import {BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Header from './components/Header';
import Register from "./components/register";
import Dashboard from "./components/Dashboard/dashboard";
import Footer from "./components/footer";
import ViewInsurance from "./components/insurance/viewInsurance";
import ViewCustomer from './components/viewCustomers';
import Login from './components/Login/login';
import ViewCustomerDetails from './components/viewCustomerDetails';
import BuyInsurance from './components/buyInsurance';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <div className='box'>
          {/* <Routes>
              <Route exact path ='/' element = {<ViewCustomer/>}></Route>
              <Route exact path ='/viewCustomer' element = {<ViewCustomer/>}></Route>
              <Route exact path ="/Register" element = {<Register/>}></Route>             
              <Route exact path ="/viewInsurance" element = {<ViewInsurance/>}></Route>
              <Route exact path ="/login" element = {<Login/>}></Route>
              <Route exact path ="/viewcustomerdetails/:id" element = {<ViewCustomerDetails/>}></Route>
          </Routes> */}
          <Switch>
              <Route exact path ='/' component = {ViewCustomer}></Route>
              <Route exact path ='/viewCustomer' component = {ViewCustomer}></Route>
              <Route exact path ="/Register" component = {Register}></Route>             
              <Route exact path ="/viewInsurance" component = {ViewInsurance}></Route>
              <Route exact path ="/login" component = {Login}></Route>
              <Route exact path ="/viewcustomerdetails/:id" component = {ViewCustomerDetails}></Route>
              <Route exact path ="/buyInsurance/:id" component = {BuyInsurance}></Route>
          </Switch>
        </div>
        <br/><br/>
        <Footer></Footer>
      </Router>

      {/* <Header></Header>
      <div className="container"><ViewCustomer></ViewCustomer></div>
      <Register></Register> */}
    </div>
  );
}

export default App;