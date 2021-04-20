import React, { useEffect, useState } from 'react';
import './Services.css';
import Diploma from '../../../images/diploma.png';
import Nurse from '../../../images/nurse.png';
import Graduated from '../../../images/graduated.png';
import ServicesCard from '../ServicesCard/ServicesCard';



    const servicesData = [{
        id:1,
        image:Diploma,
        names:'Diploma Nursing',
        GPA: ' GPA 2.50 ',
        price: 6000,
        length: '4 months',
        desCription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam quod fugiat?'
    },
    {   id:2,
        image:Nurse,
        names:'Midwifery Nursing',
        GPA: ' GPA 3.00',
        price: 5000,
        length: '4 months',
        desCription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam quod fugiat?'
    },
    {   id:3,
        image:Graduated,
        names:'B.S.C Nursing',
        GPA: ' GPA 4.50 ',
        price: 8000,
        length: '4 months',
        desCription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam quod fugiat?'
    }
]

const Services = () => {
    return (
        <>
        <section id="services" style={{height:'570px', marginTop: '151px'}} className="container-fluid pt-5 mt-5">
            <div >
                <div className="text-center">
                    <h5 style={{color:'#1CC7C1'}} className="text-uppercase">Our Services  </h5>
                    <h2  style={{color:'#3A4256'}}>Nephron Nursing Admission </h2>
                
                </div>
                <div className="d-flex justify-content-center ">
                    <div className="w-75 row mt-5 pt-5">
                    {
                        servicesData.map(service => <ServicesCard service={service}></ServicesCard>)
                    }
                
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Services;