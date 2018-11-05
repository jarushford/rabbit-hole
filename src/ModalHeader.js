import React from 'react';

export default function ModalHeader(props) {
  return (
    <div className={props.class}>
      <i className={props.icon} onClick={props.functionality}></i>
    </div>
  )
}