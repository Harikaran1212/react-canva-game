import React, { useState } from 'react';
import GameCanvas from './components/GameCanvas';
import Controls from './components/Controls';
const App = () => {
  const [scene, setScene] = useState('Scene1');
  const [isPaused, setIsPaused] = useState(false);
  const changeScene = (newScene) => setScene(newScene);
  const togglePause = () => setIsPaused((prev) => !prev);
  return (
    <div className="app">
      <h1>React Canvas Game</h1>
      <GameCanvas scene={scene} isPaused={isPaused} />
      <Controls 
        changeScene={changeScene} 
        togglePause={togglePause} 
        isPaused={isPaused} 
      />
    </div>
  );
};
export default App;
