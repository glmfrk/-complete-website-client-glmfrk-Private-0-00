import React from 'react';
import Diploma from '../../../images/diploma.png';
import Nurse from '../../../images/nurse.png';
import Graduated from '../../../images/graduated.png';

const BookingList = () => {
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-4">
                  <div className="card">
                      <div className="card-body">
                          <div className="row pb-1">
                              <div className="col-md-6">
                                  <img className="img-fluid" src={Diploma} alt="Diploma" />
                              </div>
                              <div className="col-md-6">
                                  <button className="btn btn-warning ml-5">Pending</button>
                              </div>
                          </div>
                          <h5 className="card-title py-2">Diploma Nursing</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptate porro dignissimos?</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card">
                      <div className="card-body">
                          <div className="row pb-1">
                              <div className="col-md-6">
                                    <img className="img-fluid" src={Nurse} alt="Diploma" />
                              </div>
                              <div className="col-md-6">
                                  <button className="btn btn-danger ml-5">Pending</button>
                              </div>
                          </div>
                          <h5 className="card-title py-2">Nursing Midwifery</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptate porro dignissimos?</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card">
                      <div className="card-body">
                          <div className="row pb-1">
                              <div className="col-md-6">
                                    <img className="img-fluid" src={Graduated} alt="Diploma" />
                              </div>
                              <div className="col-md-6">
                                  <button className="btn btn-success ml-5">Done</button>
                              </div>
                          </div>
                          <h5 className="card-title py-2">Nursing Graduated</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptate porro dignissimos?</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default BookingList;