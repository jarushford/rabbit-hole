import React, { Component } from 'react';
import Animation from './Animation';
import Button from './Button';
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
    this.captions = ['First we will create an array of numbers to run our quickSort function on.',
    'Then, we will invoke our quickSort function and pass in that array.',
    'On line 5, we check if the length of our array is less than 2. This is our base case: the condition that will eventually kick us out of this function and prevent us from entering an infinite loop.',
    'If our array is still 2 items or longer, we will pop off the last element and store it in a variable called "pivot". We will also create two empty arrays: lT (less than our pivot) and gT (greater than our pivot).',
    'Then, for each number left in our initial array, we will check if it is less than or greater than our pivot and push it into the appropriate array.',
    'We will then concatenate our lT array, our pivot, and our gT array. But, since we don\'t yet know if our lT and gT arrays are fully sorted, we can\'t return yet. We must run quickSort on each of these first.',
    'So, for each array, we move back up to line 5 to check if our array is 2 items or less. It is still 2 items long, so we don\'t return yet.',
    'Just like last time, we pop off the last element to use as our pivot and create lT and gT arrays.',
    'And again, we iterate through our initial array, compare to our pivot, and push any remaining numbers into the correct array.',
    'Even though we can now see that our arrays are less than 2 items, the computer has not yet hit our base case, so it doesn\'t know to stop. So one last time, we run quickSort on our lT and gT arrays (four of them now).',
    'This time, when we check if our array is less than 2 items it is true for all four arrays!',
    'So now we can simply return the array that was passed into quickSort which will complete the concatenation in the upstream quickSort function.',
    'Now the return statement in those quickSorts can occur, passing sorted lT and gT arrays up to our initial quickSort function call.',
    'And finally, our initial quickSort can return a fully sorted array!'];
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

  changeAnimationFrame = (direction) => {
    if (this.state.animationFrame === 13 && direction === 1) {
      this.setState({
        animationFrame: 0,
        highlighterClass: `highlighter0`
      })
    } else if (this.state.animationFrame === 0 && direction === -1) {
      this.setState({
        animationFrame: 13,
        highlighterClass: `highlighter13`
      })
    } else {
      this.setState({
        animationFrame: this.state.animationFrame + direction,
        highlighterClass: `highlighter${this.state.animationFrame + direction}`
      })
    }
  }

  toggleModal() {
    document.querySelector('.modal').classList.toggle('hide-modal');
  }

  toggleDescriptionModal() {
    document.querySelector('.description-modal').classList.toggle('hide-description-modal');
  }

  render() {
    return (
      <div className="demo-page">
        <Button goToPage={this.props.goToPage}
          page={'landing'}
          class={'home-button'}
          icon={<i className="fas fa-home"></i>} />
        <div className="modal">
          <i className="fas fa-chevron-circle-right" onClick={this.toggleModal}></i>
        </div>
        <div className="modal-dropdown"><p><span>Recursion</span> is a programming pattern by which we are able to complete a repeptitive action by calling a function within its own body until a base case is met and we exit the function. Hit the <span className="span2">info slider</span> in the top left and click through the demo for a more in-depth explanation.</p></div>
        <div>
          <div className={this.state.highlighterClass}></div>
          <CodeMirror options={{
              mode: 'javascript',
              theme: 'ambiance',
              lineNumbers: true,
              readOnly: true
            }}
            value={this.codeExample}/>
          <div className="description-modal hide-description-modal">
            <i className="fas fa-info-circle" onClick={this.toggleDescriptionModal}></i>
          </div>
          <div className="description-modal-dropdown">
            <p>{this.captions[this.state.animationFrame]}</p>
          </div>
          <div className="button-div">
            <Button functionality={this.changeAnimationFrame}
              page={null}
              direction={-1}
              text={'Back'}
              class={'direction-button back-button'}
              icon={<i className="fas fa-long-arrow-alt-left"></i>} />
            <Button functionality={this.changeAnimationFrame}
              page={null}
              direction={1}
              text={'Next'}
              class={'direction-button forward-button'}
              icon={<i className="fas fa-long-arrow-alt-right"></i>} />
          </div>
        </div>
        <Animation animationFrame={this.state.animationFrame}
          toggleButtons={this.toggleButtons}/>
      </div>
    )
  }
}