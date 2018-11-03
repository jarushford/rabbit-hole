import React, { Component } from 'react';
import './styles/Main.scss';

export default class Animation extends Component {
  constructor() {
    super();
    this.frames = {
      0:  <div className="animation-window frame0">
            <ul>
              <li className="brackets">[</li>
              <li>1</li>
              <li>6</li>
              <li>8</li>
              <li>3</li>
              <li>5</li>
              <li className="brackets">]</li>
            </ul>
          </div>,
      1:  <div className="animation-window frame1">
            <ul>
              <li className="brackets">[</li>
              <li>1</li>
              <li>6</li>
              <li>8</li>
              <li>3</li>
              <li>5</li>
              <li className="brackets">]</li>
            </ul>
            <div className="bugs">qS</div>
          </div>,
      2:  <div className="animation-window frame2">
            <ul>
              <li className="brackets">[</li>
              <li>1</li>
              <li>6</li>
              <li>8</li>
              <li>3</li>
              <li>5</li>
              <li className="brackets">]</li>
            </ul>
            <h3>Length is 5</h3>
            <div className="bugs">qS</div>
          </div>,
      3:  <div className="animation-window frame3">
            <ul>
              <li className="pivot-arrays">[</li>
              <li className="pivot-arrays">]</li>
              <li></li>
              <li className="pivot-arrays">[</li>
              <li className="pivot-arrays">]</li>
            </ul>
            <ul>
              <li className="brackets">[</li>
              <li>1</li>
              <li>6</li>
              <li>8</li>
              <li>3</li>
              <li className="pivot">5</li>
              <li className="brackets">]</li>
            </ul>
            <div className="bugs">qS</div>
          </div>,
      4:  <div className="animation-window frame4">
            <ul>
              <li className="pivot-arrays">[</li>
              <li className="pivot-arrays">]</li>
              <li className="pivot">5</li>
              <li className="pivot-arrays">[</li>
              <li className="pivot-arrays">]</li>
            </ul>
            <ul>
              <li className="brackets">[</li>
              <li className="one">1</li>
              <li className="six">6</li>
              <li className="eight">8</li>
              <li className="three">3</li>
              <li className="brackets">]</li>
            </ul>
            <div className="bugs">qS</div>
          </div>,
      5:  <div className="animation-window frame5">
            <div className="function-container">
              <p>5</p>
              <div className="bugs">qS</div>
            </div>
            <div className="function-split-container">
              <div className="function-container new-function">
                <ul>
                  <li className="pivot-arrays">[</li>
                  <li className="pivot-arrays">1</li>
                  <li className="pivot-arrays">3</li>
                  <li className="pivot-arrays">]</li>
                </ul>
                <div className="bugs2">qS(2)</div>
              </div>
              <div className="function-container new-function">
                <ul>
                  <li className="pivot-arrays">[</li>
                  <li className="pivot-arrays">6</li>
                  <li className="pivot-arrays">8</li>
                  <li className="pivot-arrays">]</li>
                </ul>
                <div className="bugs3">qS(3)</div>
              </div>
            </div>
          </div>,
      6:  <div className="animation-window frame6">
            <div className="function-container">
              <p>5</p>
              <div className="bugs">qS</div>
            </div>
            <div className="function-split-container">
              <div className="function-container new-function">
                <ul>
                  <li className="pivot-arrays">[</li>
                  <li className="pivot-arrays">1</li>
                  <li className="pivot-arrays">3</li>
                  <li className="pivot-arrays">]</li>
                </ul>
                <h3>Length is 2</h3>
                <div className="bugs2">qS(2)</div>
              </div>
              <div className="function-container new-function">
                <ul>
                  <li className="pivot-arrays">[</li>
                  <li className="pivot-arrays">6</li>
                  <li className="pivot-arrays">8</li>
                  <li className="pivot-arrays">]</li>
                </ul>
                <h3>Length is 2</h3>
                <div className="bugs3">qS(3)</div>
              </div>
            </div>
          </div>,
      7:  <div className="animation-window frame5">
            <p>5</p>
          </div>,
      8:  <div className="animation-window frame5">
            <p>5</p>
          </div>,
      9:  <div className="animation-window frame5">
            <p>5</p>
          </div>,
      10:  <div className="animation-window frame5">
            <p>5</p>
          </div>,
      11:  <div className="animation-window frame5">
            <p>5</p>
          </div>,
      12:  <div className="animation-window frame5">
            <p>5</p>
          </div>,
      13:  <div className="animation-window frame5">
            <p>5</p>
          </div>,
      14:  <div className="animation-window frame5">
            <p>5</p>
          </div>
    }
  }
  render() {
    return (
      this.frames[this.props.animationFrame]
    )
  }
}