import React from 'react';
import { Tooltip } from "./components/Tooltip";
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: "180px" }}>
      <Tooltip>
        Testing the tooltip
        </Tooltip>
    </div>
  );
}

export default App;
