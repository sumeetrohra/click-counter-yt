import React from 'react';

const Counter = (props) => {
  const { count } = props;
  return (
    <h2
      style={{
        fontSize: '200px',
        margin: 0,
        color: '#222',
      }}
    >
      {count}
    </h2>
  );
};

export default Counter;
