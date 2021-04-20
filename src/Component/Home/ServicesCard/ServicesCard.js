import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ServicesCard = ({service}) => {
    console.log('id khuchi', service)
    const history = useHistory();
    const handleService = () =>{
        history.push(`/user/review${service.id}`);
    }
  
    return (
        <div className="col col-md-4 mb-5 cursor shadowCard p-3 text-center">
           <Link to="#"> <img style={{height:'50px'}} src={service.image} alt={service.names} className="img-fluid"/></Link>
           <Link to="#"> <h5  className="mt-3 headingColor ">{service.names}</h5></Link>
           <b  className="headingColor ">length: {service.length} <span>$ {service.price}</span> </b><br/>
           <small className="headingColor font-weight-bold mb-3">qualifiction: {service.GPA}</small>
            <p className="text-secoundary mt-4">{service.desCription}</p>
            <button onClick={handleService} className="btn brand-brn">Admit</button>
        
        </div>
    );
};

export default ServicesCard;