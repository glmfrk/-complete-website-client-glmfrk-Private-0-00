import React from 'react';
import './Header.css';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import wavebnr from '../../../images/wave-bnr.PNG'

const Header = () => {
    return (
          
        <>
            <section>
                <Navbar></Navbar>
                <div  className=" header_container shadow container-fluid">
                    <div className="row">
                
                        <HeaderMain />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;