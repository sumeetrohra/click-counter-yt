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
        <Button handleClick={incrementCount} text="Increment" />
        <Button handleClick={decrementCount} text="Decrement" />
      </ButtonGroupHorizontal>
      <Button text="Reset" handleClick={resetCounter} />
    </Container>
  );
}

export default App;
