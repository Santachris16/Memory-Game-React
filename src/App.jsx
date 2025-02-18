import React, { useState, useEffect } from "react"; 
import GameBoard from "./assets/GameBoard";
import Controls from "./assets/Controls";
import "./App.css";


const symbols = ["★", "♦", "♣", "♥", "☀", "☁", "☂", "☃"];

function App() {
  const [difficulty, setDifficulty] = useState("4x4");
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  const resetGame = () => {
    const size = difficulty === "4x4" ? 16 : difficulty === "6x6" ? 36 : 64;
    const selectedSymbols = symbols.slice(0, size / 2);
    const shuffledCards = [...selectedSymbols, ...selectedSymbols].sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prevMoves) => prevMoves + 1);
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="game-container">
      <h1>Memory Game</h1>
      <Controls difficulty={difficulty} setDifficulty={setDifficulty} resetGame={resetGame} moves={moves} />
      <GameBoard cards={cards} flippedCards={flippedCards} matchedCards={matchedCards} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
