import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div id="contact" className="container-fluid p-5 brand-bg contact-wrapper">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-6">
                        <h3 className=" brand-color p-3 mb-3">Discuss our services or ​request a cleaning estimate today</h3>
                        <small  className=" text-color p-3 mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Donec 
                        </small>
                      <div className="row d-flex mt-4">
                          <div className="col-md-4  mb-2 p-3 shadowCard shadow text-center">
                          <FontAwesomeIcon className=" btnIcon" icon={faMobile} />
                          <p className="text-capitalize font-weight-bold  p-2">phone</p>
                          <b>+880 156 694 2563</b>
                          </div>

                          <div className="col-md-4  mb-2 p-3 shadowCard shadow  text-center">
                          <FontAwesomeIcon className=" btnIcon" icon={faEnvelope} />
                          <p className="text-capitalize font-weight-bold  p-2">email</p>
                          <b>example@email.com</b>
                          </div>

                          <div className="col-md-4 p-3  shadowCard text-center">
                          <FontAwesomeIcon className=" btnIcon" icon={faCalendar} />
                          <p className="text-capitalize font-weight-bold  p-2">Opening Hours</p>
                          <b>9.am – 5.pm</b>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                    <h3 className="font-weight-bold mb-5 brand-color">Get In Touch...</h3>
                        <div className="row mb-3">
                            
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Full name" aria-label="First name" />
                       
                            </div>
                           
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Nick name" aria-label="Last name" />
                            </div>
                        </div>
                        <input type="email" className="form-control mb-3" placeholder="example@emall.com" aria-label="example@emall.com" />

                        <input type="text" className="form-control mb-5" placeholder="Subject" aria-label="Subject" />

                        <textarea placeholder="Enter text here..." rows="4" cols="50"className="form-control mb-3" name="comment"         form="usrform">
                            
                        </textarea>
                        <input type="button"className=" form-control brand-color btn btn-success" value="Send"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;