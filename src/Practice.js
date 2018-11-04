import React, { Component } from 'react';
import CodeMirror from './../node_modules/react-codemirror/lib/Codemirror';
import './../node_modules/codemirror/theme/ambiance.css';
import './../node_modules/codemirror/mode/javascript/javascript';
import './styles/Main.scss';

export default class Practice extends Component {
  constructor() {
    super();
    this.practiceFunction = 
    `  const arr = [1, 8, 6, 3, 5];
  practiceFunction(arr);

  function practiceFunction(arr) {
    // Your solution goes here
  }`
  }

  toggleSolution(e) {
    if (e.target.classList.contains('solution-editor')) {
      if (!e.target.classList.contains('reveal-answer')) {
        e.target.classList.add('reveal-answer');
        e.target.classList.remove('hide-answer');
      } else {
        e.target.classList.add('hide-answer');
        e.target.classList.remove('reveal-answer');
      }
    }
  }


  render() {
    return (
      <div className="practice-page" onClick={this.toggleSolution}>
        <button className="home-button" onClick={() => {
          this.props.goToPage('landing');
          document.querySelector('html').classList.remove('gradient');
          }}><i className="fas fa-home"></i></button>
          <CodeMirror options={{
              mode: 'javascript',
              theme: 'ambiance',
              lineNumbers: true
            }}
            value={this.practiceFunction}
            className="practice-editor"/>
          <CodeMirror options={{
              mode: 'javascript',
              theme: 'ambiance',
              lineNumbers: true,
              readOnly: true
            }}
            value={this.practiceFunction}
            className="solution-editor"/>
      </div>
    )
  }
}