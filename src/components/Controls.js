import React from 'react';

const Controls = ({ changeScene, togglePause, isPaused }) => {
  return (
    <div className="controls">
      <button onClick={() => changeScene('Scene1')}>Switch to Scene 1</button>
      <button onClick={() => changeScene('Scene2')}>Switch to Scene 2</button>
      <button onClick={togglePause}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default Controls;
