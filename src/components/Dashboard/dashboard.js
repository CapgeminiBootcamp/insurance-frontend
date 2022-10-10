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
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item">
      <img src="https://images.moneycontrol.com/static-mcnews/2021/11/Health-insurance.jpg?impolicy=website&width=770&height=221" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://blog.ipleaders.in/wp-content/uploads/2017/04/BV-Acharya-11.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item active">
      <img src="https://www.outlookindia.com/outlookmoney/public/uploads/article/gallery/38d9affd650492adbb3cb0d29daa771c.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
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