import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({
    kota: '',
    kodePos: '',
  })

  function handleKotaChange(event) {
    setState({
      ...state, kota: event.target.value
    })
  }

  function handleKodePosChange(event) {
    setState({
      ...state, kodePos: event.target.value
    })
  }

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="nama kota"
          value={state.kota}
          onChange={handleKotaChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="kode pos"
          value={state.kodePos}
          onChange={handleKodePosChange}
        />
      </div>
      <br />
      <div>
        Anda tinggal di {`kota ${state.kota}, kode pos ${state.kodePos}`}
      </div>
    </form>
  )
}

export default App;
