import React, { Component } from 'react';
import './styles/Main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'landing'
    }
    this.pages = {
      landing: 
        <div className="landing-page">
          <h1>Rabbit Hole</h1>
          <div className="buttons">
            <button>What is Recursion?</button>
            <button>Practice</button>
          </div>
        </div>
    }
  }

  render() {
    return (this.pages[this.state.currentPage]);
  }
}

export default App;
