import React from 'react'
import NavBar from '../components/NavBar';
import sunset from '../images/sunset.png';

import '../stylesheets/About.css'

console.log(sunset);

const About = () => {
        return (
            <div>
                <NavBar />
                <div className="AboutContainer">
                    <img className="AboutImage" src={sunset} alt="Sunset" /><br />
                    <h1>ABOUT EPIC ADVENTURES</h1>
                    <p>A community-driven platform for epic adventure discovery. We want to share the joy of travel and adventure, by inspiring people to discover explore, and share their own adventures.</p>
                </div>
            </div>
        )
    }

export default About;
