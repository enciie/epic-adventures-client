import React, { Component } from 'react';
import './App.css';
import Trips from './Trips';

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
  render() {
    return (
      <div className="App">
        <h1>Welcome to Epic Adventures</h1>
        < Trips trips={trips} />
      </div>
    );
  }
}

export default App;
