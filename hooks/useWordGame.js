import { useState, useEffect, useRef } from "react";

function useWordGame() {
  const STARTING_TIME = 5;

  const [text, updateText] = useState("");
  const [timeRemaining, setTime] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(event) {
    const { value } = event.target;
    updateText(value);
  }

  function startGame() {
    setIsTimeRunning(true);
    setTime(STARTING_TIME);
    updateText("");
    setWordCount(0);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter(word => word !== "");
    return filteredWords.length;
  }

  function endGame() {
    setIsTimeRunning(false);
    const numWords = countWords(text);
    setWordCount(numWords);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  };
}

export default useWordGame;
