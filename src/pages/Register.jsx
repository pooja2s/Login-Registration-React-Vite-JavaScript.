import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",

  })

  const registerUser = async (e) => {
    e.preventDefault();
    const { email, userName, password, phone, firstName, lastName, address, city, state, country, zipcode } = data
    try {
      const { data } = await axios.post('/auth/register', {
        email, userName, password, phone, firstName, lastName, address, city, state, country, zipcode
      });
      if (data.status) {
        setData({});
        localStorage.setItem("token", data.token)
        toast.success(data.message)
        navigate('/login')
      }
      else {
        toast.error(data.error)
      }
    }
    catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  }

  return (
    <div className="register-container">
      <h2 className="heading">Registration</h2>
      <form onSubmit={registerUser}>
        <div class="form-container">
          <div class="form-section">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

            <label htmlFor="userName">Username:</label>
            <input type="text" id="userName" value={data.userName} onChange={(e) => setData({ ...data, userName: e.target.value })} />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            </div>
          <div class="form-section">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
          
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} />
            </div>
          <div class="form-section">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })} />
         
            <label htmlFor="state">State:</label>
            <input type="text" id="state" value={data.state} onChange={(e) => setData({ ...data, state: e.target.value })} />
            </div>
          <div class="form-section">
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" value={data.country} onChange={(e) => setData({ ...data, country: e.target.value })} />

            <label htmlFor="zipcode">Zipcode:</label>
            <input type="text" id="zipcode" value={data.zipcode} onChange={(e) => setData({ ...data, zipcode: e.target.value })} />

          </div>
        </div>
        <button className="submitBtn mt-3" type="submit">Register</button>
      </form>
    </div>
  )
}
