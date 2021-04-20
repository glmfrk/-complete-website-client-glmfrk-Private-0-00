import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faCartPlus, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faReact, faReadme, faRedhat } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar  d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/user/book" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/user/book_list" className="text-white">
                        <FontAwesomeIcon icon={faBookmark} /> <span>Book List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/user/review" className="text-white">
                        <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div className="mb-5">
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;