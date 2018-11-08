import React, { Component } from 'react';
import Demo from './Demo';
import Practice from './Practice';
import './styles/Main.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'landing'
    } 
  }

  goToPage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  renderCurrentPage() {
    const pages = {
      landing: 
        <div className="landing-page">
          <h1>Rabbit Hole</h1>
          <h2>navigating recursion</h2>
          <div className="buttons">
            <button onClick={() => {
              this.goToPage('demo');
              document.querySelector('html').classList.add('gradient');
              }}>What is Recursion?</button>
            <button onClick={() => {
              this.goToPage('practice')
              document.querySelector('html').classList.add('gradient');
              }}>Practice</button>
          </div>
        </div>,
      demo:
        <Demo goToPage={this.goToPage} />,
      practice:
        <Practice goToPage={this.goToPage} />,
    }
    return pages[this.state.currentPage];
  }

  render() {
    return this.renderCurrentPage();
  }
}
