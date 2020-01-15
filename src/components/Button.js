import React from 'react';

const Button = (props) => {
  const { text, handleClick } = props;
  return (
    <button
      style={{
        outline: 'none',
        boxShadow: '0 6px #555',
        fontSize: '20px',
        border: 'none',
        backgroundColor: '#222',
        color: '#fff',
        borderRadius: '10px',
        margin: '1.5vh',
        fontFamily: 'inherit',
        padding: '8px 20px',
        fontWeight: '500',
        letterSpacing: '1.2px',
        textTransform: 'uppercase'
      }}
      onClick={() => {
        window.navigator.vibrate(50);
        handleClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;