import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png';
import '../stylesheets/NavBar.css'

console.log(logo)

const NavBar = () =>
  <div className="NavBarContainer">
     <ul className="NavBar">
        <li className="NavBar"><NavLink to="/logout" >Logout</NavLink></li>
        <li className="NavBar"><NavLink to="/about" >About</NavLink></li>
        <li className="NavBar"><NavLink to='/trips/inspiration'>Inspiration</NavLink></li>
        <li className="NavBar"><NavLink to='/trips/new'>Add An Adventure</NavLink></li>
        <li className="NavBar"><NavLink to='/trips/mytrips' >My Adventures</NavLink></li>
        <li className="NavBar"><NavLink to='/trips'>Adventures</NavLink></li>
        <li className="NavBarLogo"><NavLink to='/trips'><img src={logo} alt="Logo" /></NavLink></li>
    </ul>
  </div>

export default NavBar;
