import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import AddServices from '../AddServices/AddServices';
import './AdminDashboard.css';
import Logo from '../../../images/nephron.png'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OrderList from '../OrderList/OrderList';
import AddAdmin from '../AddAdmin/AddAdmin';






const UserDashBoard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('data submit', data)
        fetch('http://localhost:4500/addUser',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                alert('Successfully')
            }
            else{
              console.log(success)  
            }
        })

    }
    
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
                    <div className="row  ">
                        <div  className="col-md-2 mb-2 userSidebar">
                            <AdminSidebar/>
                        </div>
                        <div  className="col-md-10 text-white userContent ">
                           <AddServices />
                           <AddAdmin />
                            <OrderList />
                        </div>
                    </div>
                </div>             
            </main>
        </>
    );
};

export default UserDashBoard;