import React from 'react';

const Button = (props) => {
  const { text, handleClick, bold } = props;
  return (
    <button
      style={{
        outline: 'none',
        boxShadow: '0 6px #555',
        fontSize: bold ? '40px' : '20px',
        border: 'none',
        backgroundColor: '#222',
        color: '#fff',
        borderRadius: '10px',
        margin: '1.5vh',
        fontFamily: 'inherit',
        padding: '8px 20px',
        fontWeight: '700',
        letterSpacing: '1.2px',
        textTransform: 'uppercase'
      }}
      onClick={() => {
        window.navigator.vibrate(25);
        handleClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;