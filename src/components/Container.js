import React from 'react';

const Container = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Raleway',
        transform: 'translateY(-8vh)',
      }}
    >
      {children}
    </div>
  );
};

export default Container;