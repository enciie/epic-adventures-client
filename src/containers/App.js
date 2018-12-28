import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Trips from './Trips';
import './App.css';


const trips = [
  {
    name: "Lucerne",
    description: "winter village", 
    location: "Switzerland",
    img_url: "https://i.imgur.com/0Y2H3Ox.jpg",
    user_id: 1
  },
  {
    name: "Interlaken",
    description: "Jungfrau mountains to explore",
    location: "Switzerland",
    img_url: "https://i.imgur.com/AxN7nwO.jpg",
    user_id: 4
  },
  {
    name: "Zermatt",
    description: "Matterhorn views and ski slopes galore",
    location: "Switzerland",
    img_url: "https://i.imgur.com/2fJ4udv.jpg",
    user_id: 4
  }
]

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      trips: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Epic Adventures</h1>
          <div>
            <nav>
              <Link to="/trips">Adventures</Link>
            </nav>

          </div>
      </div>
    );
  }
}

export default App;
