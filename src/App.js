import ViewCustomer from "./components/viewCustomers";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/login";
import Register from "./components/register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
              <Route exact path ='/' element = {<ViewCustomer/>}></Route>
              <Route exact path ='/viewCustomer' element = {<ViewCustomer/>}></Route>
              <Route exact path ="/Register" element = {<Register/>}></Route>
              <Route exact path ="/Login" element = {<Login/>}></Route>
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
