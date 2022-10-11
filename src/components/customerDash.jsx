import React from 'react';
import customerService from '../services/customerService';
import insuranceService from '../services/insuranceService';
import './Assets/pinko.css';
import './customerDash.css'
import logo from './images/logo1.png'
import leftImg from './images/left-image.png';
import rightImg from './images/right-image.png';
import testimonial from './images/testimonial-icon.png';
import img1 from './images/featured-item-01.png';
import Calculator from './Insurance Calculator/calculator';
// import img2 from './images/featured-item-01.png';
// import img3 from './images/featured-item-01.png';
class CustomerDash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            customer: {}


        };

    }
    //Abhi ye component nahi chalega pehle getCustomerById ki api backend pe banani padegi 
    componentDidMount() {
        customerService.getCustomerById(this.state.id).then(res => {
            this.setState({ customer: res.data });

        });

    }

    edit(id) {
        this.props.history.push(`/updateCustomer/${id}`);
        // window.location.reload();
    }
    buy(id) {
        this.props.history.push(`/buyInsurance/${id}`);
        // window.location.reload();
    }
    calculate(id) {
        this.props.history.push(`/`);
        // window.location.reload();
    }
    profile(id) {
        this.props.history.push(`/viewCustomerDetails/${id}`);
    }

    render() {
        return (
            <div>
                {/* Header */}
                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">

                                    <a href="#" className="logo">
                                        <img id='logo' src={logo} alt="Softy Pinko" />
                                    </a>

                                    <ul className="nav">
                                        <li><a href="#welcome" className="active">Home</a></li>
                                        <li><a href="#features">About</a></li>
                                        <li><a href="#term">Term Calculator</a></li>
                                        
                                        <li><a href="/">Log Out</a></li>
                                    </ul>
                                    <a className='menu-trigger'>
                                        <span>Menu</span>
                                    </a>

                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="welcome-area" id="welcome">

                    {/* banner */}
                    <div className="header-text">
                        <div className="container">
                            <div className="row">
                                <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                    <h1>Hello, <strong>{this.state.customer.cutomerName}</strong><br />Welcome to <strong>Pure Insurance</strong></h1>
                                    <p>We provide you the best insurance policies so you can ensure the safety of your family for all there future <strong>Endeavours</strong> </p>
                                    <a href="#features" className="main-button-slider">Discover </a>
                                    <button onClick={() => this.profile(this.state.customer.customerId)} id='profile'><a href="#features" className="main-button-slider">Profile </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* cards */}
                <section className="section home-feature">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                        <button onClick={() => this.edit(this.state.customer.customerId)}>
                                            <div className="features-small-item">
                                                <div className="icon">
                                                    <i ><img src={img1} alt="" /></i>
                                                </div>
                                                <h5 className="features-title">Edit Profile</h5>
                                                <p>Customize anything your profile so you can get the best</p>

                                            </div>
                                        </button>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                        <button onClick={() => this.buy(this.state.customer.customerId)}>
                                            <div className="features-small-item">
                                                <div className="icon">
                                                    <i><img src={img1} alt="" /></i>
                                                </div>
                                                <h5 className="features-title">Buy Insurance</h5>
                                                <p>Buy Insurance which suits the needs of your family and goals </p>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                        <a href='#term'>
                                            <div className="features-small-item">
                                                <div className="icon">
                                                    <i><img src={img1} alt="" /></i>
                                                </div>
                                                <h5 className="features-title">Term  Calculator</h5>
                                                <p>Use our state of the class term insurance calculator to find your ideal insurance</p>
                                            </div>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* staticsection */}
                <section className="section padding-top-70 padding-bottom-0" id="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <img src={leftImg} className="rounded img-fluid d-block mx-auto" alt="App" />
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                                <div className="left-heading">
                                    <h2 className="section-title">Let’s discuss about you project</h2>
                                </div>
                                <div className="left-text">
                                    <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hr"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section padding-bottom-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                <div className="left-heading">
                                    <h2 className="section-title">We can help you to grow your business</h2>
                                </div>
                                <div className="left-text">
                                    <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                <img src={rightImg} className="rounded img-fluid d-block mx-auto" alt="App" />
                            </div>
                        </div>
                    </div>
                </section>
                <div id="term" className='container'><Calculator></Calculator></div>
                
                {/* reviews */}
                <section className="section" id="testimonials">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="center-heading">
                                    <h2 className="section-title">What do they say?</h2>
                                </div>
                            </div>
                            <div className="offset-lg-3 col-lg-6">
                                <div className="center-text">
                                    <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="team-item">
                                    <div className="team-content">
                                        <i><img src={testimonial} alt="" /></i>                                        <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                                        <div className="user-image">
                                            <img src="http://placehold.it/60x60" alt="" />
                                        </div>
                                        <div className="team-info">
                                            <h3 className="user-name">Catherine Soft</h3>
                                            <span>Managing Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="team-item">
                                    <div className="team-content">
                                        <i><img src={testimonial} alt="" /></i>                                        <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                                        <div className="user-image">
                                            <img src="http://placehold.it/60x60" alt="" />
                                        </div>
                                        <div className="team-info">
                                            <h3 className="user-name">Kelvin Wood</h3>
                                            <span>Digital Marketer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="team-item">
                                    <div className="team-content">
                                        <i><img src={testimonial} alt="" /></i>
                                        <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                                        <div className="user-image">
                                            <img src="http://placehold.it/60x60" alt="" />
                                        </div>
                                        <div className="team-info">
                                            <h3 className="user-name">David Martin</h3>
                                            <span>Website Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* counts */}
                <section className="counter">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="count-item decoration-bottom">
                                        <strong>126</strong>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="count-item decoration-top">
                                        <strong>63</strong>
                                        <span>Happy Clients</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="count-item decoration-bottom">
                                        <strong>18</strong>
                                        <span>Awards Wins</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="count-item">
                                        <strong>27</strong>
                                        <span>Countries</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>

        )
    }

}
export default CustomerDash

  // <div className="maincontainer">
            //     <div className='customerWizard'>
            //         {/* <h2>Hello, <span></span></h2> */}
            //         <div className="jumbotron">
            //             <h1 className="display-4">Hello, {this.state.customer.cutomerName}!</h1>
            //             <p className="lead">A Comprehensive Protection At an Affordable Price To Protect Yourself and Your Loved Ones.</p>
            //             <hr className="my-4" />
            //             <p>Please find an appropriate insurance which suits and fullfills all your needs</p>
            //             <button onClick={() => this.viewCustomerDetails(this.state.customer.customerId)} className="btn btn-outline-info btn-lg" >Your Details</button>

            //             {/* <a className="btn btn-outline-info btn-lg" href="#" role="button">Your Details</a> */}
            //         </div>
            //     </div>
            //     <h2 className="text-center display-4">Available Insurances</h2>

            //     {/* {this.state.customer.insurances[0].insuranceId} */}

            //     <table className="table table-striped " id="table">
            //         <thead>
            //             <tr>
            //                 <td>Insurance Name</td>
            //                 <td>Sum Assurance</td>
            //                 <td>Premium</td>
            //                 <td>Tenure </td>


            //             </tr>
            //         </thead>
            //         <tbody>
            //             {
            //                 this.state.customer[insurances].map(
            //                     insurance =>
            //                         <tr key={insurance.insuranceId}>
            //                             <td> {insurance.insuranceName}</td>
            //                             <td> {insurance.sumAssurance}</td>
            //                             <td> {insurance.preminiumAmount}</td>
            //                             <td> {insurance.tenture}</td>


            //                             <td>

            //                                 {/* <button onClick={() => this.viewInsuranceDetails(insurance.insuranceId)} className="btn btn-outline-info" style={{marginLeft: "8px"}} >Details</button> */}
            //                             </td>
            //                         </tr>
            //                 )
            //             }
            //         </tbody>
            //     </table>

            //  </div>
