import React, { Component } from 'react';
import './styles/Main.scss';

export default class Animation extends Component {
  constructor() {
    super();
    this.frames = {
      0:  <div className="animation-window frame0">
            <div className="bugs"></div>
          </div>,
      1:  <div className="animation-window frame1">
            <p>1</p>
          </div>,
      2:  <div className="animation-window frame2">
            <p>2</p>
          </div>,
      3:  <div className="animation-window frame3">
            <p>3</p>
          </div>,
      4:  <div className="animation-window frame4">
            <p>4</p>
          </div>,
      5:  <div className="animation-window frame5">
            <p>5</p>
          </div>,
    }
  }
  render() {
    return (
      this.frames[this.props.animationFrame]
    )
  }
}