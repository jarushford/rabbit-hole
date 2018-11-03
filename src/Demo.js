import React, { Component } from 'react';
import CodeMirror from './../node_modules/react-codemirror/lib/Codemirror';
import './../node_modules/codemirror/theme/ambiance.css';
import './../node_modules/codemirror/mode/javascript/javascript';
import './styles/Main.scss';


export default class Demo extends Component {
  constructor() {
    super()
    this.codeExample = 
  `  const arr = [1, 6, 89, 23, 56];
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

  // componentDidMount() {
  //   const readOnlyLines = [0, 1, 2, 3];

  //   CodeMirror.on('beforeChange', function(cm,change) {
  //   if (~readOnlyLines.indexOf(change.from.line) ) {
  //       change.cancel();
  //   }
  // })
  // }



  render() {
    return (
      <div className="demo-page">
        <button className="home-button" onClick={() => {
          this.props.goToPage('landing');
          document.querySelector('html').classList.remove('gradient');
          }}></button>
        <div>
          <CodeMirror options={{
              mode: 'javascript',
              theme: 'ambiance',
              lineNumbers: true
            }}
            value={this.codeExample}/>
          <button>Back</button>
          <button>Next</button>
        </div>
        <div className="animation-display">
          
        </div>
      </div>
    )
  }
}