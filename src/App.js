import React, { useState } from 'react';

import Button from './components/Button';
import Container from './components/Container';
import Counter from './components/Counter';
import ButtonGroupHorizontal from './components/ButtonGroupHorizontal';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  const decrementCount = () => setCount(count - 1);

  const resetCounter = () => setCount(0);

  return (
    <Container>
      <h1
        style={{
          fontSize: '8vh',
          fontWeight: '700',
          margin: 0,
          color: '#222',
        }}
      >Click Counter</h1>
      <Counter count={count} />
      <ButtonGroupHorizontal>
        <Button handleClick={incrementCount} text="+" bold />
        <Button handleClick={decrementCount} text="-" bold />
      </ButtonGroupHorizontal>
      <Button text="Reset" handleClick={resetCounter} />
      <p
        style={{
          position: 'absolute',
          zIndex: -1,
          top: '100vh'
        }}
      >
        Made with <span role="img" aria-label="black heart emoji">🖤</span> by <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => window.open('https://sumeetrohra.com')}>Sumeet Rohra</span>
      </p>
    </Container>
  );
}

export default App;
