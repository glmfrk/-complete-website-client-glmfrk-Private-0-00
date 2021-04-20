import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import happiness from '../../../images/happiness.jpeg'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    return (
        <>
        <section id="portfolio" style={{height:"600px"}} className=" features-service container-fluid brand-bg ">
        <div className="container mb-5">
            <h6 className="text-center brand-color text-uppercase pb-5">Portfolio</h6>
            <div className="row mb-5">
                <div className=" col col-md-5 rounded featureImgBox">
                    <img className="img-fluid" src={happiness} alt=""/>
                </div>
                <div className="  col col-md-7 align-self-center">
                    <h1 className=" brand-color"> Exceptional Care,<br/> Discover the latest Happiness</h1>
                    <p className="text-secondary my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium!...
                    </p>
                    <div className="row ml-5 d-flex">
                        <div  className="col">
                            <h1 className="brand-color">300 <FontAwesomeIcon  icon={faPlus} /></h1><br/>
                            <b>Students Happiness</b>
                        </div>
                        <div  className="col">
                            <h1 className="brand-color">4 <FontAwesomeIcon  icon={faPlus} /></h1><br/>
                            <b>Total Batch</b>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </section>
        <section></section>
        </>
    );
};

export default Portfolio;