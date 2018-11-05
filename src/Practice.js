import React, { Component } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import './../node_modules/codemirror/theme/ambiance.css';
import './../node_modules/codemirror/mode/javascript/javascript';
import './styles/Main.scss';

export default class Practice extends Component {
  constructor() {
    super();
    this.practiceFunctions = [
      `  exponent(4, 4);


    function exponent(num, powerOf) {
      // Write a function that takes in a number
      // and the power you want to raise it to
      // and returns the result
    }`,
      `  const arr = [5, 7, 2, 4, 24];
    sum(arr);

    function sum(arr) {
      // Write a function that takes in 
      // an array of numbers and
      // returns the sum of all of the numbers
    }`,
      `  const arr = [9, 6, 8, 4, 1, 5, 3, 2];
    mergeSort(arr);

    function mergeSort(arr) {
      // CHALLENGE!
      // Write a function that takes in an array
      // and performs a merge sort to return
      // an array sorted from least to greatest

      // *Hint* You may want to use a helper
      // function to accomplish this task

      // function merge(firstHalf, secondHalf) {

      // }
    }`];
    this.practiceSolutions = [
      `  exponent(4, 4);
      
      
    function exponent(num, powerOf) {
      if (powerOf === 0) {
        return 1;
      } else {
        return num * exponent(num, powerOf-1);
      }
    }`,
      `  const arr = [5, 7, 2, 4, 24];
    sum(arr);

    function sum(arr) {
      if (arr.length === 1) {
        return arr[0];
      } else {
        return arr.pop() + sum(arr);
      }
    }`,
      `  const arr = [9, 6, 8, 4, 1, 5, 3, 2];
    mergeSort(arr);

    function mergeSort(arr) {
      if (arr.length < 2) { return arr }
      const firstHalf = mergeSort(arr.splice(0, 
        Math.floor(arr.length / 2)));
      const secondHalf = mergeSort(arr);
      return merge(firstHalf, secondHalf);
    }

    function merge(firstHalf, secondHalf) {
      const finalArr = [];
      const count = firstHalf.length + secondHalf.length;
      for (let i = 0; i < count; i++) {
        if (firstHalf[0] < secondHalf[0] ||
          !secondHalf[0]) {
          finalArr.push(firstHalf.shift());
        } else {
          finalArr.push(secondHalf.shift());
        }
      }
      return finalArr;
    }`];
    this.state = {
      currentProblem: 0
    }
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

  changeProblem(direction) {
    if (this.state.currentProblem === 2 && direction === 1) {
      this.setState({
        currentProblem: 0,
      })
    } else if (this.state.currentProblem === 0 && direction === -1) {
      this.setState({
        currentProblem: 2,
      })
    } else {
      this.setState({
        currentProblem: this.state.currentProblem + direction,
      })
    }
  }


  render() {
    return (
      <div className="practice-page" onClick={this.toggleSolution}>
        <button className="home-button" onClick={() => {
          this.props.goToPage('landing');
          document.querySelector('html').classList.remove('gradient');
          }}>
          <i className="fas fa-home"></i>
        </button>
        <CodeMirror options={{
            mode: 'javascript',
            theme: 'ambiance',
            lineNumbers: true,
          }}
          value={this.practiceFunctions[this.state.currentProblem]}
          className="practice-editor"/>
        <CodeMirror options={{
            mode: 'javascript',
            theme: 'ambiance',
            lineNumbers: true
          }}
          value={this.practiceSolutions[this.state.currentProblem]}
          className="solution-editor"/>
        <button className="direction-button previous-button" onClick={() =>     this.changeProblem(-1)}>
          <i className="fas fa-long-arrow-alt-left"></i>
          Previous
        </button>
          <button className="direction-button next-button" onClick={() => this.changeProblem(1)}>
          Next
          <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    )
  }
}