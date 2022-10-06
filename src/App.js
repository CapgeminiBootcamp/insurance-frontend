import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from "./components/register";
import ViewInsurance from "./components/insurance/viewInsurance";
import ViewCustomer from './components/viewCustomers';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <div className='box'>
          <Routes>
              <Route exact path ='/' element = {<ViewCustomer/>}></Route>
              <Route exact path ='/viewCustomer' element = {<ViewCustomer/>}></Route>
              <Route exact path ="/Register" element = {<Register/>}></Route>             
              <Route exact path ="/viewInsurance" element = {<ViewInsurance/>}></Route>
          </Routes>
        </div>
      </Router>
      {/* <Header></Header>
      <div className="container"><ViewCustomer></ViewCustomer></div>
      <Register></Register> */}
    </div>
  );
}

export default App;