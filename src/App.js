import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import SongFilters from './components/SongFilters';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <SongFilters />
          <Results />
        </Container>
      </div>
    );
  }
}

export default App;
