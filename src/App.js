import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SongFilters from './components/SongFilters';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SongFilters />
        <Results />
      </div>
    );
  }
}

export default App;
