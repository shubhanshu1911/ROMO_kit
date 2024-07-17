import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header>
            <nav style={{ padding: '2px 50px' }} className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="Images/logo2.svg" alt="Bootstrap" width="60" height="60" className="d-inline-block align-text-center" />
                        <div style={{ marginLeft: '10px', fontSize: '20px' }}>
                            <b>Adankaa Automation Systems Pvt. Ltd.</b>
                            <div style={{ fontSize: '16px', lineHeight: '1.0', marginTop: '4px' }}>
                                <i>(Powered by AI, IoT, and Robotics)</i>
                            </div>
                        </div>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="ms-auto">
                            {!localStorage.getItem('token') ? (
                                <div className="d-flex">
                                    <Link to="/signup" style={{ textDecoration: 'none', backgroundColor: '#FF5C36' }} className="signup mx-2 btn text-white">Sign Up</Link>
                                    <Link to="/login" style={{ textDecoration: 'none', color: '#FF5C36', borderColor: '#FF5C36' }} className="login btn btn-light">Login</Link>
                                </div>
                            ) : (
                                <button onClick={handleLogout} className="mx-5 btn btn-light text-dark">Logout</button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
