import React, { Component } from 'react';
import Button from './Button';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import practiceFunctions from './util/practiceFunctions';
import practiceSolutions from './util/practiceSolutions';
import './../node_modules/codemirror/theme/ambiance.css';
import './../node_modules/codemirror/mode/javascript/javascript';
import './styles/Main.scss';
const classNames = require('classnames');

export default class Practice extends Component {
  constructor() {
    super();
    this.state = {
      currentProblem: 0,
      hideAnswer: true,
      revealAnswer: false
    }
  }

  toggleSolution = (e) => {
    if (e.target.classList.contains('solution-editor')) {
      this.setState({
        hideAnswer: !this.state.hideAnswer,
        revealAnswer: !this.state.revealAnswer
      })
    }
  }

  changeProblem = (direction) => {
    if (this.state.currentProblem === 2 && direction === 1) {
      this.setState({
        currentProblem: 0,
        hideAnswer: true,
        revealAnswer: false
      })
    } else if (this.state.currentProblem === 0 && direction === -1) {
      this.setState({
        currentProblem: 2,
        hideAnswer: true,
        revealAnswer: false
      })
    } else {
      this.setState({
        currentProblem: this.state.currentProblem + direction,
        hideAnswer: true,
        revealAnswer: false
      })
    }
  }

  render() {
    const editorClass = classNames({
      'solution-editor': true,
      'hide-answer': this.state.hideAnswer,
      'reveal-answer': this.state.revealAnswer
    })
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
          className={editorClass}/>
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