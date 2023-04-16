import React from 'react'
import { Outlet, NavLink, Link } from "react-router-dom";
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa';
import './Layout.css'
import { Message } from "@material-ui/icons";
import aimg1 from './Logo.png'

const Layout = () => {
  const navRef=useRef();
  const showNavbar=()=>{
    navRef.current.classList.toggle('responsive_nav');
  }
  const closeNavbar=()=>{
    navRef.current.classList.remove('responsive_nav');
  }
  const navigate = useNavigate();
  const Logout = event => {
      event.preventDefault();
      // 👇️ redirect to LoginPage
      navigate('/Loginpage');
    }
        
  return (
    <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      <header>
        <nav align="center" ref={navRef} >
        <NavLink to="/Layout/Profile" onClick={showNavbar} exact activeClassName="active">Profile</NavLink>
        <NavLink to="/Layout/Dashboard" onClick={showNavbar} on exact activeClassName="active">Dashboard</NavLink>
          <NavLink to="/Layout/Help" onClick={showNavbar} exact activeClassName="active">Help</NavLink>
          <NavLink to="/Layout/About" onClick={showNavbar} exact activeClassName="active">About</NavLink>
          <Link onClick={Logout}>Log Out</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <img alt="img1" id="hlogo" src={aimg1}/>
        <span className='hAn'>DLMS</span>
        <button className='nav-btn' id="mb"onClick={showNavbar}>
          <FaBars />
        </button>
        <div id="nb">
          <Link to="/Layout/Messages" onClick={closeNavbar} class="micon">
            <Message/>
          </Link>
        </div>
        </header>
        <div onClick={closeNavbar} >
        <Outlet/>
        </div>
          </div>
  )
};

export default Layout;