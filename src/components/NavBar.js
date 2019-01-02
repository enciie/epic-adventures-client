import React from 'react';
import { NavLink } from "react-router-dom";

import '../stylesheets/NavBar.css'


const NavBar = () =>
    <div className="NavBarContainer">
         <ul>
            <li><NavLink to='/trips'>Adventures</NavLink></li>
            <li><NavLink to='/trips/new'>Add An Adventure</NavLink></li>
            <li><NavLink to='/trips/mytrips' >My Adventures</NavLink></li>
            <li><NavLink to="/about" >About</NavLink></li>
        </ul>
    </div>

export default NavBar;