import React from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate } from 'react-router-dom';

const Header = () => {
    // let navigate = useNavigate();
    // const handleLogout = () => {
    //     localStorage.removeItem('token')
    //     navigate('/login');
    // }
    return (
        <header className="navbar">
            <Link to="/" style={{ textDecoration: 'none', paddingLeft: '20px'}}>
                <h1>ROMO Kit</h1>
            </Link>

            <ul className="nav nav-tabs tabs">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">File Name 
                        <CloseIcon/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/newpage"><AddIcon /></Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/menu2">Menu 2</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/menu3">Menu 3</Link>
                </li> */}
            </ul>

            {!localStorage.getItem('token') ? (
                <div className="d-flex">
                    <Link to="/login" style={{ textDecoration: 'none' }} className="login btn btn-light text-dark">Login</Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }} className="signup mx-2 btn btn-light text-dark">Sign Up</Link>
                </div>
            ) : (
                <button className="mx-5 btn btn-light text-dark">Logout</button>
            )}
        </header>
    );
}

export default Header;
