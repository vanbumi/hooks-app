import React, { useState } from 'react';

function App() {

  const [activated, setActivated] = (useState(false));

  // cek status dari activated dengan menggunakan button
  const buttonText = activated ? 'Active' : 'Inactive';

  function onClick() {
    setActivated(!activated);
  }

  //const onClick = () => setActivated(!activated);

  return (
    <button onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default App;
