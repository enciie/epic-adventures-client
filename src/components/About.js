import React from 'react'
import sunset from '../images/sunset.png';

import '../stylesheets/About.css'
import '../stylesheets/index.css';

console.log(sunset);

const About = () => {
  return (
    <div>

      <div className="bg"></div>
      <div className="AboutContainer">
        <h1>ABOUT EPIC ADVENTURES</h1>
          <p>A community-driven platform for epic adventure discovery.
            We want to share the joy of travel and adventure,
            by inspiring people to discover explore, and share their own adventures.
          </p>
      </div>
    </div>
  )
}

export default About;
