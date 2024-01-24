import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../context/userContext';

export default function Dashboard() {
    const { user, isLoggedIn } = useContext(userContext);
    const navigate = useNavigate();

    // Redirect to login if not logged in
    if (!isLoggedIn) {
        navigate('/login'); // Replace '/login' with the actual login route
        return null; // You can also render a loading spinner or any other component while redirecting
    }
    return (
    <div className='welcome-container'>
      <h1>Dashboard</h1>
      {!!user && (<p>Welcome back, {user.userName}!</p>)}
    </div>
  )
}
