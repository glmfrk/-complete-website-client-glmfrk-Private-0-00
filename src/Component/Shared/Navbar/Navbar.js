import React from 'react';
import { a, Link } from 'react-router-dom';
import Logo from '../../../images/nephron.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPhoneAlt, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
      <header className="container-fluid background">
        
      <div className="container-fluid background">
        <div className=" container py-3 d-flex">
            <div className=" row col d-flex">
            <div className="contact-info  col-md-4 col-lg-4    d-flex">
                <ul className=" navbar-nav">
                <li className="phone font-weight-bold mr-2"><FontAwesomeIcon className=" btnIcon " icon={faPhoneAlt} /> +880 156 694 2563</li>
                <li className="email font-weight-bold mr-2"><FontAwesomeIcon className=" btnIcon " icon={faEnvelope} />example@email.com</li>
                </ul>
            </div>
            <div className="d-flex col-md-6 mb-4  col-lg-4 mt-3">
                <input class="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn brand-brn" type="submit">Search</button>
            </div>
            <div className="social-link d-flex col-md-4 pt-3  col-lg-4 ">
                <FontAwesomeIcon className="social-facebook social-icon" icon={faFacebook} />
                <FontAwesomeIcon className="social-twitter social-icon" icon={faTwitter} />
                <FontAwesomeIcon className="social-linkedin social-icon" icon={faLinkedinIn} />
                <FontAwesomeIcon className="social-youtube social-icon" icon={faYoutube} />
            </div>
            </div>
          </div>
        </div>
        <section>
          <nav className="navbar shadow mb-3 navbar-expand-lg navbar-light">
            <div className="container fw-bolder">
            
              <Link className="navbar-brand" to="/home">
              <img src={Logo}  height="30"
              alt=""
              loading="lazy" /> Nephron Coaching
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse  justify-content-end navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item mx-4">
                    <a className="nav-a active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item mx-4">
                      <a className="nav-a active" aria-current="page" href="#services">Services</a>
                      </li>
                    <li className="nav-item mx-4">
                    <a className="nav-a" href="#portfolio">Portfolio </a>
                    </li>
                    <li className="nav-item mx-4">
                    <a className="nav-a" href="#gallary">Gallary </a>
                    </li>
                    <li className="nav-item mx-4">
                    <a className="nav-a" href="#testimonial">Testimonial </a>
                    </li>
                    <li className="nav-item mx-4">
                    <a className="nav-a " href="#contact">Contact</a>
                    </li>
                    <li className="nav-item mx-4">
                   
                    <Link className="nav-a " to="/login"><button className="btn btn-success">Login </button></Link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>

       
      </header>


    );
};

export default Navbar;