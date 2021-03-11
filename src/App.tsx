import React from 'react';

import './App.css';
import PersonInput from './components/PersonInput';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
    
      <div>
        <PersonList/>
        <PersonInput/>
      </div>
    </div>
  );
}

export default App;
