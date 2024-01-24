import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../context/userContext';

export default function Login() {
  const navigate = useNavigate();
  const { handleLoginStatus } = useContext(userContext);


  const [data, setData] = useState({
    email: "",
    password: "",

  })

  const loginUser = async (e) =>{
    e.preventDefault();
    const {email, password } = data
    try{
      const {data} = await axios.post('/auth/login', {
        email, password
      });
      if(data.status){
        setData({});
        toast.success(data.message)
        localStorage.setItem('token', data.data.token);
        handleLoginStatus(true);
        navigate('/dashboard')
      }
      else{
        toast.error(data.error)
      }
    }
    catch (error ){
      toast.error(error.response.data.message)
      console.log(error)
    }
  }
  return (
    <div className="login-container mt-10">
       <h2 className="heading">Login</h2>
      <form onSubmit={loginUser}>
        <label htmlFor="email">Email:</label>
        <input type="text" placeholder="Please Enter Email" id="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
       
        <label htmlFor="password">Password:</label>
        <input type="password"  placeholder="Please Enter Password"  id="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        
        <button className="submitBtn" type="submit">Sign In</button>
      </form>
    </div>
  )
}
