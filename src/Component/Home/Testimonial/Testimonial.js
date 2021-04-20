import React from 'react';
import TestimonialReview from '../TestimonialReview/TestimonialReview';

const Testimonial = () => {
    const testimonialData =[{
        id: "40-323-3966",
        images: "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/83975344_2242586742709691_2976569450326654976_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=2yMANxjqaJcAX_tGycz&_nc_ht=scontent.fdac24-1.fna&oh=0fae6168925c2b4986356e6755579797&oe=60A1A98E",
        title: "Habitasse Platea",
        designation: "Brand Ambassador",
        blog: "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate"
      }, {
        id: "01-801-8432",
        images: "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/72642222_2391164944480794_6616974242833498112_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PKBHhTFrHLwAX8aTVia&_nc_ht=scontent.fdac24-1.fna&oh=e63d04e7c0583f4daeb26e9b21ca7ba3&oe=60A270ED",
        title: "তৌফিক হাসান",
        designation: "Asistant Accounted",
        blog: "morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam"
      }, {
        id: "75-977-8303",
        images: "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/158223390_103357881829535_6113594777445686739_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Jm9BCq1Xkr4AX8298Z5&_nc_ht=scontent.fdac24-1.fna&oh=e54b23ed93b102b9a26cc5eae280ace0&oe=60A14798",
        title: "Sadia Afroj Mim",
        designation: "Account Officer",
        blog: "quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris"
      }, {
        id: "50-737-8049",
        images: "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/118086436_982434192219533_4262404520045043182_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JYmuFHSCiNsAX_5o6Vm&_nc_ht=scontent.fdac24-1.fna&oh=83052e165320d60e81343e0a8f12babc&oe=60A37301",
        title: "Neque Vestibulum ",
        designation: "HR Head",
        blog: "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
      },]
    return (
        <section  id="testimonial" style={{height: "620px"}} className="conatainer-fluid">
            <div className="container">
            <div className="title text-center pb-5">
            <h6 className="text-center brand-color text-uppercase">Testimonial</h6>
            <h2 className="text-capitalize brand-color pb-5">Customar Review About Of Our Service </h2>
            </div>
                <div className="row">
                    {
                        testimonialData.map(review => <TestimonialReview review={review}></TestimonialReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;