import React, { Component } from 'react';
import Animation from './Animation';
import CodeMirror from './../node_modules/react-codemirror/lib/Codemirror';
import './../node_modules/codemirror/theme/ambiance.css';
import './../node_modules/codemirror/mode/javascript/javascript';
import './styles/Main.scss';


export default class Demo extends Component {
  constructor() {
    super()
    this.state = {
      animationFrame: 0,
      highlighterClass: "highlighter0"
    }
    this.codeExample = 
  `  const arr = [1, 8, 6, 3, 5];
  quickSort(arr);

  function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivot = arr.pop();
    const lT = [];
    const gT = [];

    arr.forEach(num => {
      num <= pivot ? lT.push(num) : gT.push(num);
    });
    return quickSort(lT).concat(pivot, quickSort(gT));
  }`
  }

  componentDidUpdate() {
    if (this.state.animationFrame === 0) {
      document.querySelector('.back-button').classList.add('disabled-button');
    } else {
      document.querySelector('.back-button').classList.remove('disabled-button');
    }
  }

  changeAnimationFrame(direction) {
    if (this.state.animationFrame === 13 && direction === 1) {
      this.setState({
        animationFrame: 0,
        highlighterClass: `highlighter0`
      })
    } else if (this.state.animationFrame > 0 && direction === -1 ||
     direction === 1) {
      this.setState({
        animationFrame: this.state.animationFrame + direction,
        highlighterClass: `highlighter${this.state.animationFrame + direction}`
      })
    }
  }

  toggleModal() {
    document.querySelector('.modal').classList.toggle('hide-modal');
  }

  render() {
    return (
      <div className="demo-page">
        <button className="home-button" onClick={() => {
          this.props.goToPage('landing');
          document.querySelector('html').classList.remove('gradient');
          }}><i className="fas fa-home"></i></button>
        <div className="modal"><i className="fas fa-chevron-circle-right" onClick={this.toggleModal}></i></div>
        <div className="modal-dropdown"><p><span>Recursion</span> is a programming pattern by which we are able to complete a repeptitive action by calling a function within its own body until a base case is met and we exit the function.</p></div>
        <div>
          <div className={this.state.highlighterClass}></div>
          <CodeMirror options={{
              mode: 'javascript',
              theme: 'ambiance',
              lineNumbers: true,
              readOnly: true
            }}
            value={this.codeExample}/>
          <div className="button-div">
            <button className="direction-button back-button disabled-button" onClick={() => this.changeAnimationFrame(-1)}><i className="fas fa-long-arrow-alt-left"></i>Back</button>
            <button className="direction-button" onClick={() => this.changeAnimationFrame(1)}>Next<i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>
        <Animation animationFrame={this.state.animationFrame}/>
      </div>
    )
  }
}