import React from 'react';
import './App.css';

const onClickReaction = massage => alert('Button was clicked!');

function App() {
  return (
    <div className="main">
      <button
        onClick={() => onClickReaction()}
        type="button"
        className="btn"
      >
        Click me
      </button>
    </div>
  );
}

export default App;
