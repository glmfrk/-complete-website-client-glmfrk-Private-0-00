import React from 'react';
import waterBanner from '../../../images/water-banner.png';
import waveBanner from '../../../images/wave-bnr.PNG'

const HeaderMain = () => {
    return (
        <main  className="container header_wrapper m-5 d-flex align-items-center">
            <div className="col-md-5 offset-md-1 text-light">
                <h1 >Start  On Admission <br/> <span className="text-warning"> Beyond Your Happiness</span> </h1>
                <p className="text-light py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aspernatur dignissimos magnam illo voluptatem officia voluptatum suscipit quibusdam, quae ipsam!</p>
                <button className="btn btn-success">Apply</button>
            </div>
            <div className="col-md-7 mt-3">
                <img className="img-fluid" src={waterBanner} alt=""/>
            </div>
           
        </main>
    );
};

export default HeaderMain;