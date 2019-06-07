import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prevCount) => {
    return prevCount + 1;
  });


  return (
    <div>
      <button onClick={handleClick}>Increase Count</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App;
