import React, { useRef, useEffect } from 'react';
import Scene1 from './Scene1';
import Scene2 from './Scene2';

const GameCanvas = ({ scene, isPaused }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null); // Reference to the image
  const audioRef = useRef(new Audio(require('./public_assets_ClickSound.mp3'))); // Reference to the sound

  useEffect(() => {
    // Load image from external URL
    imageRef.current = new Image();
    imageRef.current.src = 'https://cdn-icons-png.flaticon.com/256/1344/1344154.png';
    imageRef.current.onload = () => {
      console.log('Image loaded');
    };
  }, []);

  const handleClick = (event) => {
    // Play sound when the canvas is clicked
    audioRef.current.play();

    // Log the click position for debugging
    console.log('Canvas clicked at', event.clientX, event.clientY);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const scenes = {
      Scene1,
      Scene2,
    };

    let animationFrameId;
    const renderScene = () => {
      if (!isPaused) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        scenes[scene](ctx);

        // Draw image on canvas
        if (imageRef.current) {
          ctx.drawImage(imageRef.current, 100, 100, 100, 100);
        }
      }
      animationFrameId = requestAnimationFrame(renderScene);
    };

    renderScene();

    return () => cancelAnimationFrame(animationFrameId);
  }, [scene, isPaused]);

  return <canvas ref={canvasRef} width={500} height={300} onClick={handleClick} />;
};

export default GameCanvas;
