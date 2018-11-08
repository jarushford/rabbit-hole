import React from 'react';
import CodeMirror from './../node_modules/react-codemirror/lib/Codemirror';
import Button from './Button';
import quickSortEx from './util/quickSortEx';
import './../node_modules/codemirror/theme/ambiance.css';
import './../node_modules/codemirror/mode/javascript/javascript';

export default function DemoControls(props) {
    return (
      <div>
        <div className={props.highlighterClass}></div>
        <CodeMirror options={{
            mode: 'javascript',
            theme: 'ambiance',
            lineNumbers: true,
            readOnly: true
          }}
          value={quickSortEx}/>
        <div className="button-div">
          <Button functionality={() => props.changeAnimationFrame(-1)}
            class={'direction-button back-button'}
            content={<span><i className="fas fa-long-arrow-alt-left"></i>Back</span>} />
          <Button functionality={() => props.changeAnimationFrame(1)}
            class={'direction-button forward-button'}
            content={<span>Next<i className="fas fa-long-arrow-alt-right"></i></span>} />
        </div>
      </div>
    )
}