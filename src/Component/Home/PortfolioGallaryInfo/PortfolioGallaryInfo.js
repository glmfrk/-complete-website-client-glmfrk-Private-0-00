import React from 'react';
import './photoGallary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PortfolioGallaryInfo = ({pdCrd}) => {
    return (
    <div className=" col-md-4  portfolio">
        <div className="card gallary mb-4">
            <div className=" card-body p-0 gallary-img">
                <div className="card-img-top">
                    <img className="img-fluid" src={pdCrd.images} alt="Card image cap" />
                </div>
                <div className="gallary-info p-2">
                    <h5>{pdCrd.title}</h5>
                    <p>{pdCrd.blog}</p>
                </div>
                <FontAwesomeIcon className="gallaryIcon" icon={faSearch} />
            </div>
        </div>
    </div>
    );
};

export default PortfolioGallaryInfo;