import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from "./components/register";
<<<<<<< HEAD
import Dashboard from "./components/Dashboard/dashboard";
import Footer from "./components/footer";
=======
import ViewInsurance from "./components/insurance/viewInsurance";
import ViewCustomer from './components/viewCustomers';
>>>>>>> 430b5d18a886c57dc6f5ab5194e211b3e8677f63
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <div className='box'>
          <Routes>
              <Route exact path ='/' element = {<Dashboard/>}></Route>
              <Route exact path ='/viewCustomer' element = {<ViewCustomer/>}></Route>
              <Route exact path ='/viewCustomer' element = {<ViewCustomer/>}></Route>
              <Route exact path ="/Register" element = {<Register/>}></Route>             
              <Route exact path ="/viewInsurance" element = {<ViewInsurance/>}></Route>
          </Routes>
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