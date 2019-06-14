import React, { useState } from 'react';

function App() {
  const [kota, setKota] = useState('');
  const [kodePos, setKodePos] = useState('');

  function handleKotaChange(event) {
    setKota(event.target.value)
  }

  function handleKodePosChange(event) {
    setKodePos(event.target.value)
  }

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="nama kota"
          value={kota}
          onChange={handleKotaChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="kode pos"
          value={kodePos}
          onChange={handleKodePosChange}
        />
      </div>
      <br />
      <div>
        Anda tinggal di {`kota ${kota}, kode pos ${kodePos}`}
      </div>
    </form>
  )
}

export default App;
