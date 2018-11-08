import React, { Component } from 'react';
import Demo from './Demo';
import Practice from './Practice';
import Button from './Button';
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
    if (page === 'landing') {
      document.querySelector('html').classList.remove('gradient');
    } else {
      document.querySelector('html').classList.add('gradient');
    }
  }

  renderCurrentPage() {
    const pages = {
      landing: 
        <div className="landing-page">
          <h1>Rabbit Hole</h1>
          <h2>navigating recursion</h2>
          <div className="buttons">
            <Button functionality={() => this.goToPage('demo')}
              content={<span>What Is Recursion?</span>} />
            <Button functionality={() => this.goToPage('practice')}
              content={<span>Practice</span>} />
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
