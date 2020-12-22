import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
const Navbar = ()=>{
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className='col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <NavLink className="navbar-brand font-weight-bolder" to="/"> 100ms </NavLink>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" exact to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" exact to="/all">All characters</NavLink>
                            </li>
                       </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
};
export default Navbar;