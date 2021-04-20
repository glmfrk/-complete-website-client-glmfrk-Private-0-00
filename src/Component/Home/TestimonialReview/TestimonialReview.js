import React from 'react';
import'./TestimonialReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialReview = ({review}) => {
    const handleReview = () =>{
        console.log('clicked for review')
    }
    return (
        <div className="col-md-3 mb-4 review-wraper">
        <div onClick={handleReview} className=" review shadow cursor background">
            <div className="review-body"></div>
            <div className="content">
               <p className="p-2  font-weight-bold">{review.blog}</p>
            </div>
            <div className="imgBox">
                <img className="img-fluid" src={review.images} alt="Card image cap" />
            </div>
            <div className="review-info p-2">
                <h5 className=" font-weight-bold">{review.title}</h5>
                <small className="brand-color font-weight-bold">Designation:{review.designation}</small>
                <br/><br/>
               <ul className="row  justify-content-center nav d-flex">
                   <li className="nav-item "><FontAwesomeIcon className=" text-warning ml-2 my-2 " icon={faStar} /></li>
                   <li className="nav-item "><FontAwesomeIcon className=" text-warning ml-2 my-2 " icon={faStar} /></li>
                   <li className="nav-item "><FontAwesomeIcon className=" text-warning ml-2 my-2 " icon={faStar} /></li>
                   <li className="nav-item "><FontAwesomeIcon className=" text-warning ml-2 my-2 " icon={faStar} /></li>
                   <li className="nav-item "><FontAwesomeIcon className=" text-warning ml-2 my-2 " icon={faStar} /></li>
               </ul>
            </div>

        </div>
    </div>
    );
};

export default TestimonialReview;