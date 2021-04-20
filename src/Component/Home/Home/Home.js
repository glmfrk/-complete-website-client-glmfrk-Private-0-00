import React from 'react';
import Header from '../Header/Header'
import Footer from '../../Shared/Footer/Footer'
import Contact from '../Contact/Contact'
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import PortfolioGallary from '../PortfolioGallary/PortfolioGallary';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    
    return (
        <div className="">
            <Header></Header>
            <div className="background">
            <Services />
            <PortfolioGallary />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;