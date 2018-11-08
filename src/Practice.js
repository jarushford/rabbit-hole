import React, { Component } from 'react';
import Button from './Button';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import practiceFunctions from './util/practiceFunctions';
import practiceSolutions from './util/practiceSolutions';
import './../node_modules/codemirror/theme/ambiance.css';
import './../node_modules/codemirror/mode/javascript/javascript';
import './styles/Main.scss';

export default class Practice extends Component {
  constructor() {
    super();
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
        document.querySelector('.solution-editor').classList.add('hide-answer');
        document.querySelector('.solution-editor').classList.remove('reveal-answer');
      }
    }
  }

  changeProblem = (direction) => {
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
    document.querySelector('.solution-editor').classList.add('hide-answer');
    document.querySelector('.solution-editor').classList.remove('reveal-answer');
  }

  render() {
    return (
      <div className="practice-page" onClick={this.toggleSolution}>
        <Button functionality={() => this.props.goToPage('landing')}
          class={'home-button'}
          content={<i className="fas fa-home"></i>} />
        <CodeMirror options={{
            mode: 'javascript',
            theme: 'ambiance',
            lineNumbers: true
          }}
          value={practiceFunctions[this.state.currentProblem]}
          className="practice-editor"/>
        <CodeMirror options={{
            mode: 'javascript',
            theme: 'ambiance',
            lineNumbers: true,
            readOnly: true
          }}
          value={practiceSolutions[this.state.currentProblem]}
          className="solution-editor"/>
        <Button functionality={() => this.changeProblem(-1)}
            class={'direction-button previous-button'}
            content={<span><i className="fas fa-long-arrow-alt-left"></i>Previous</span>} />
        <Button functionality={() => this.changeProblem(1)}
            class={'direction-button next-button'}
            content={<span>Next<i className="fas fa-long-arrow-alt-right"></i></span>} />
      </div>
    )
  }
}