import React from 'react';
const classNames = require('classnames');

export default function ModalHeader(props) {
  const modalClass = classNames({
    [props.class]: true,
    'hide-modal': props.hideModal,
    'hide-description-modal': props.hideDescriptionModal
  })
  return (
    <div className={modalClass}>
      <i className={props.icon} onClick={props.functionality}></i>
    </div>
  )
}