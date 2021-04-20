import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../../../images/nephron.png'
import OrderService from '../OrderService/OrderService';
import UserReview from '../UserReview/UserReview';
import BookingList from '../BookingList/BookingList';


const UserBoard = () => {
    return (
        <>
            <main className="dashBg">
                <div className="container-fluid pt-3">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-md-4">
                                <Link className="navbar-brand" to="/home">
                                    <img className="logoDash" src={Logo}  height="50"
                                    alt=""
                                    loading="lazy" /> 
                                </Link>
                            </div>
                            <div className="col-md-8">
                                <div className="row d-flex">
                    
                                    <div className="col-md-6">
                                        <button className="btn btn-info">Order</button>
                                    </div>
                                    <div className="col-md-6"> 
                                        <button className="btn btn-light">Process</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-5 row userBoardBg">
                    <div className="row">
                        <div className="col-md-2 mb-2 sidebar">
                            <Sidebar/>
                        </div>
                        <div className="col-md-10 sidebar Content">
                            <OrderService />
                            <BookingList />
                            <UserReview/>
                        </div>
                    </div>
                </div>             
            </main>
        </>
    );
};

export default UserBoard;