import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);
  
    useEffect(() => {
      console.log(`Ini adalah useEffect function, current count adalah ${count}`)
  
      return () => {
        console.log(`Saya bertugas me-remove semua setup di atas! Last count adalah ${count}`)
      }
    })
  
    return (
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
  
        <h1>{count}</h1>
      </div>
    )
}

function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                Show / HIde Counter
            </button>

            { visible && <Counter /> }
        </div>
    )
}

export default App;
