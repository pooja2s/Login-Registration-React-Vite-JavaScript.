import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../../context/userContext';
import toast from 'react-hot-toast';

export default function Navbar(){
    const { user, isLoggedIn, handleLoginStatus } = useContext(userContext);

    // Function to handle logout
    const logout = () => {
        // Perform any necessary actions to log the user out, e.g., clearing tokens, etc.
        // Update the isLoggedIn status to false
        handleLoginStatus(false);
        localStorage.removeItem('token');        
        toast.success('Logout successfully!')
    };
    return(
        <nav >
            {/* Conditionally render based on isLoggedIn */}
            {!isLoggedIn &&<Link className="navLink" to='/'>Home</Link>}
            {!isLoggedIn && <Link className="navLink" to="/register">Register</Link>}
            {!isLoggedIn && <Link className="navLink" to="/login">Login</Link>}
            {isLoggedIn &&<Link className="navLink" to='/dashboard'>{user.userName}</Link>}
            {isLoggedIn && <button onClick={logout}>Log Out</button>}
        </nav>
    )
}

