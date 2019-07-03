import React, { useState } from 'react';

function App() {
  const [kota, setKota] = useState('');
  const [kodePos, setKodePos] = useState('');

  const handleKotaChange = (event) => setKota(event.target.value)
  const handleKodePosChange = (event) => setKodePos(event.target.value)

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
      <div>
        <p>
          Anda tinggal di {`kota: ${kota}, kode pos ${kodePos}`}
        </p>
      </div>

    </form>
  )
}

export default App;
