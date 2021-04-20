import React, { useEffect, useState } from 'react';
import PortfolioData from '../../../PortfolioData/PortfolioData.json'
import PortfolioGallaryInfo from '../PortfolioGallaryInfo/PortfolioGallaryInfo';

const PortfolioGallary = () => {
    const [photoGallary, setPhotoGallary] = useState([0]);
    const [preLoader, setPreloader] = useState(true) 
    useEffect(() =>{
        setPhotoGallary(PortfolioData)
        setPreloader(false)
    }, [0])
    return (
        <section id="gallary" className="container-fluid background p-5">
            <div className="container">
                {
                    preLoader && <p>loading..</p>
                }
                <div className="text-center">
                    <h5 style={{color:'#1CC7C1'}} className="text-uppercase"> Nephro Gallary </h5>
                    <h2  style={{color:'#3A4256'}}>Nephron Nursing Photo Gallary </h2>
                
                </div>
            <div className="row p-5 d-flex">
                {
                    photoGallary.map(pdCrd => <PortfolioGallaryInfo pdCrd={pdCrd}></PortfolioGallaryInfo>)
                }
            </div>
                </div>
        </section>
    );
};

export default PortfolioGallary;