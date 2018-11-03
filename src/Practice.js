import React, { Component } from 'react';
import './styles/Main.scss';

export default class Practice extends Component {


  render() {
    return (
      <div className="practice-page">
        <button className="home-button" onClick={() => {
          this.props.goToPage('landing');
          document.querySelector('html').classList.remove('gradient');
          }}></button>
      </div>
    )
  }
}