import React from 'react';
import './App.css';
import { TextField } from './components/text-field';


const App : React.FC = () => {
  return (
    <div className="App">
      <TextField text="Hello" />
    </div>
  );
}

export default App;
