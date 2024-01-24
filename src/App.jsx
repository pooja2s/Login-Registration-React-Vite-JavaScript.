import './App.css'
import { Routes,  Route } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import  { UserContextProvider } from '../context/userContext';
//Component Import
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Dashboard from '../src/pages/Dashboard';

//Defind base URL for global use
axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Toaster position="top-right" toastOptions={{ duration : 3000, theme : "colored", className : "toast"}}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
