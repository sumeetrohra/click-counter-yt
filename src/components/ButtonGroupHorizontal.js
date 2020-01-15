import React from 'react';

const ButtonGroupHorizontal = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {props.children}
    </div>
  );
}

export default ButtonGroupHorizontal;
