import React from 'react';

export default function Button(props) {
  if (props.class === 'home-button') {
    return (
      <button className={props.class} onClick={() => {
        props.goToPage(props.page);
        if (props.page === 'landing') {
          document.querySelector('html').classList.remove('gradient');
        }}}>
        {props.icon}
      </button>
    )
  } else {
    if (props.text === 'Back' || props.text === 'Previous') {
      return (
        <button className={props.class} onClick={() => props.functionality(props.direction)}>
          {props.icon}
          {props.text}
        </button>
      )
    } else {
      return (
        <button className={props.class} onClick={() => props.functionality(props.direction)}>
          {props.text}
          {props.icon}
        </button>
      )
    }
  }
}