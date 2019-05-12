import React from 'react';

function Box(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

function App() {
  return (
    <Box
      text="Ini adalah stateless functional component Dengan Props."
      subtitle="Aku suka dan cinta dengan React!"
    />
  );
}

export default App;
