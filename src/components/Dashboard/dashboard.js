import React from 'react'
import insurance1 from '../Assets/insurance1.png'
import insurance2 from '../Assets/insurance2.jfif'
import '../Dashboard/dashboard.css'
import carou1 from '../Assets/carou1.jpg'
import carou2 from '../Assets/carou2.jpg'
import carou3 from '../Assets/carou3.jpg'
function Dashboard() {
  return (
    <div>  
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={carou1} alt="First slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={carou2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={carou3} alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>

               <section>
                <div className="container">
                    <br></br><br></br>
                    <p className = "ptag-main">
                        We have <span className="color-3">Top class Insurances</span> and material thats's enough to provide you
                        the best Life Safety solution since 1980s with proud.
                    </p>    
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-12 col-sm-12">
                            <img src= {insurance1} alt="Insurance1" />
                            <br></br><br></br>
                            <h6 className="color-3">Term Insurances</h6>
                            <h5>Max Cover Insurances</h5>
                            <p className="color-grey-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nisl a leo tincidunt, consequat congue odio suscipit.   
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-4 col-12 col-sm-12">
                            <img src= {insurance2} alt="insurance2" />
                            <br></br><br></br>
                            <h6 className="color-3">Half Yearly Insurances</h6>
                            <h5>Short Cover Insurances</h5>
                            <p className="color-grey-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nisl a leo tincidunt, consequat congue odio suscipit.
                                
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-4 col-12 col-sm-12">
                            <img src={insurance1} alt="insurance1" />
                            <br></br><br></br>
                            <h6 className="color-3">Quater Insurances</h6>
                            <h5>Monthly Cover Insurances</h5>
                            <p className="color-grey-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra nisl a leo tincidunt, consequat congue odio suscipit.   
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <br></br><br></br>
            <section>
                <div className = "backside mainbottom-div">
                    <div className="container ptag-bottom">
                        <p className="color-6" >
                            We have <span className="color-3">Top class Insurances</span> and material that's enough to 
                            provide you the best Life Safety solution since 1980s with proud
                        </p>
                    </div>
                </div>
            </section>
            <br></br><br></br>
            <section>
                <div className="container" >
                    <h3 className="text-center">
                        Latest News
                    </h3>
                    <br></br>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-12 col-sm-12">
                            <img src={insurance1} />
                            <br></br><br></br>
                            <p className = "ptag-bottom">
                                Provide quality Safety from Certified Companies.
                            </p>
                            <p className="color-grey-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-4 col-12 col-sm-12">
                            <img src= {insurance2} />
                            <br></br><br></br>
                            <p className = "ptag-bottom">
                                Provide Maximum Coverage as per your needs.
                            </p>
                            <p className="color-grey-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-4 col-12 col-sm-12">
                            <img src={insurance1}/>
                            <br></br><br></br>
                            <p className = "ptag-bottom">
                                Provide multiple options for your better choices.
                            </p>
                            <p className="color-grey-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Dashboard