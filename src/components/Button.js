import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { 
      handleClick, 
      text, 
      isSelected } = this.props

    return (
      <>
        <button 
          className={`
            btn m-3
            ${isSelected ? "bg-primary" : "btn-outline-primary"}
          `}
          onClick={() => handleClick(text)}
        >
          {text}
        </button>
      </>
    );
  }
}

export default Button;