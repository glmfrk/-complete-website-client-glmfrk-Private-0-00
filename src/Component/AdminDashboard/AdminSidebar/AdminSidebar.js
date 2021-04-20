import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faCartPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const AdminSidebar = () => {
    return (
        <div>
            <div className="userSidebar shadow d-flex flex-column justify-content-between col-md-2 py-5 px-4">
                <ul className="list-unstyled font-weight-bold">
                    <li>
                        <Link to="/admin/order_list" className="text-white">
                            <FontAwesomeIcon icon={faCartPlus} />  <span>Order List</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/add_service" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/make_admin" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/manage_service" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Service</span>
                        </Link>
                    </li>
                </ul>
                <div className="mb-5">
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;