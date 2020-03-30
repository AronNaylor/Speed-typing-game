import React from "react";
import useWordGame from "../hooks/useWordGame";
import "./styles.css";

export default function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame();

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time remaning: {timeRemaining} </h4>
      <button type="button" onClick={startGame} disabled={isTimeRunning}>
        Start Game
      </button>
      <h1>Word Count: {wordCount} </h1>
    </div>
  );
}
