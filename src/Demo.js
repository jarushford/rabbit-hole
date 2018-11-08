import React, { Component } from 'react';
import Animation from './Animation';
import Button from './Button';
import ModalHeader from './ModalHeader';
import ModalDropdown from './ModalDropdown';
import CodeMirror from './../node_modules/react-codemirror/lib/Codemirror';
import captions from './util/captions';
import quickSortEx from './util/quickSortEx';
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

  toggleModal = () => {
    document.querySelector('.modal').classList.toggle('hide-modal');
  }

  toggleDescriptionModal = () => {
    document.querySelector('.description-modal').classList.toggle('hide-description-modal');
  }

  render() {
    return (
      <div className="demo-page">
        <Button goToPage={this.props.goToPage}
          page={'landing'}
          class={'home-button'}
          icon={<i className="fas fa-home"></i>} />
        <ModalHeader class={'modal'}
          icon={'fas fa-chevron-circle-right'}
          functionality={this.toggleModal} />
        <ModalDropdown class={'modal-dropdown'}
          content={<p><span>Recursion</span> is a programming pattern by which we are able to complete a repeptitive action by calling a function within its own body until a base case is met and we exit the function. Hit the <span className="span2">info slider</span> in the top left and click through the demo for a more in-depth explanation.</p>} />
        <ModalHeader class={'description-modal hide-description-modal'}
          icon={'fas fa-info-circle'}
          functionality={this.toggleDescriptionModal} />
        <ModalDropdown class={'description-modal-dropdown'}
          content={<p>{captions[this.state.animationFrame]}</p>} />
        <div>
          <div className={this.state.highlighterClass}></div>
          <CodeMirror options={{
              mode: 'javascript',
              theme: 'ambiance',
              lineNumbers: true,
              readOnly: true
            }}
            value={quickSortEx}/>
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
          toggleButtons={this.toggleButtons} />
      </div>
    )
  }
}