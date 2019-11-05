import React from 'react';
import UserPanel from './components/userPanel/';
import './scss/App.scss';


function App() {
  return (
    <div className="App">
      <UserPanel />
      <div className="App-header">
        Bootstrap Framework! (w/ React Strap)
      </div>
    </div>
  );
}

export default App;
