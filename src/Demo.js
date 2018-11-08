import React, { Component } from 'react';
import Animation from './Animation';
import Button from './Button';
import ModalHeader from './ModalHeader';
import ModalDropdown from './ModalDropdown';
import DemoControls from './DemoControls';
import captions from './util/captions';
import './styles/Main.scss';

export default class Demo extends Component {
  constructor() {
    super()
    this.state = {
      animationFrame: 0,
      highlighterClass: "highlighter0",
      hideModal: false,
      hideDescriptionModal: true
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
    this.setState({
      hideModal: !this.state.hideModal
    })
  }

  toggleDescriptionModal = () => {
    this.setState({
      hideDescriptionModal: !this.state.hideDescriptionModal
    })
  }

  render() {
    return (
      <div className="demo-page">
        <Button functionality={() => this.props.goToPage('landing')}
          class={'home-button'}
          content={<i className="fas fa-home"></i>} />
        <ModalHeader class={'modal'}
          icon={'fas fa-chevron-circle-right'}
          functionality={this.toggleModal}
          hideModal={this.state.hideModal} />
        <ModalDropdown class={'modal-dropdown'}
          content={<p><span>Recursion</span> is a programming pattern by which we are able to complete a repeptitive action by calling a function within its own body until a base case is met and we exit the function. Hit the <span className="span2">info slider</span> in the top left and click through the demo for a more in-depth explanation.</p>} />
        <DemoControls highlighterClass={this.state.highlighterClass}
          changeAnimationFrame={this.changeAnimationFrame}/>
        <ModalHeader class={'description-modal'}
          icon={'fas fa-info-circle'}
          functionality={this.toggleDescriptionModal}
          hideDescriptionModal={this.state.hideDescriptionModal} />
        <ModalDropdown class={'description-modal-dropdown'}
          content={<p>{captions[this.state.animationFrame]}</p>} />
        <Animation animationFrame={this.state.animationFrame}
          toggleButtons={this.toggleButtons} />
      </div>
    )
  }
}