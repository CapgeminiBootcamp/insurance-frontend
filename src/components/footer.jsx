import React from 'react'
import './Dashboard/dashboard.css'
import logo1 from './images/logo1.png'
import footerarr from './images/arrow2416.png'
function Footer() {
  return (
    <div>
        <div className="row">
            <div className="col-md-12 col-lg-4 col-12 col-sm-12 main-div"  >
                <div className="row next-div" >
                    <div className="col-md-2 col-lg-3 col-0 col-sm-0"></div>
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-4 col-sm-4">
                                <center>
                                <img src={ logo1 }id="width1" alt="factory" />
                                </center>
                            </div>
                            {/* <div className="col-lg-8 col-lg-8 col-8 col-sm-8">
                                <h3><b>Pure</b></h3>
                                <p >PureInsurances</p>
                            </div> */}
                        </div>
                        <br></br>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-8 col-sm-12 col-12 container1" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <h3>Quick Links</h3>
                            <div className="row next2" >
                                <div className="col-md-12 col-lg-12 col-12 col-sm-12 next2" >
                                    <div className = "next3" >
                                    <span><img className="footer_arrow" src={footerarr} /></span><a className="color-41">Home</a>
                                    </div>
                                    <div className = "next3" >
                                    <span><img className="footer_arrow" src={footerarr} /></span><a className="color-41">Features</a>
                                    </div>
                                    <div className = "next3" >
                                    <span><img className="footer_arrow" src={footerarr} /></span><a className="color-41">About Us</a>
                                    </div>
                                    <div className = "next3" >
                                    <span><img className="footer_arrow" src={footerarr} /></span><a className="color-41">Services</a>
                                    </div>
                                    {/* <div className = "next3" >
                                    <span><img className="footer_arrow" src={footerarr} /></span><a className="color-41">Projects</a>
                                    </div>
                                    <div className = "next3" >
                                    <span><img className="footer_arrow" src={footerarr} /></span><a className="color-41">Pricing</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <h3>Latest Updates </h3>
                            <div className="row next3" >
                                <div className="col-lg-12">
                                    <p> Lorem ipsum dolor sit amet <br></br> 
                                    <span className="color-3">24 Aug 2015</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12"></div>
                                <div className=" col-lg-12">
                                    <p> Lorem ipsum dolor sit amet <br></br> 
                                    <span className="color-3">24 Aug 2015</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-3 col-3"></div>
                                <div className=" col-lg-12">
                                    <p> Lorem ipsum dolor sit amet <br></br>
                                    <span className="color-3">24 Aug 2015</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <h3>Our Address</h3>
                            <div className="row next2" >
                                <div className="col-lg-12">
                                    60 Grant, <br></br>Vw. central new 
                                    <br></br>
                                    Road 48732,<br></br>UK (United Kingdom)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer