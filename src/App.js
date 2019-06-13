import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);
  // const handleReset = () => setCount(0);
  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrese}>Decrease Count</button>
      <button onClick={handleReset}>Reset Count</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App;
