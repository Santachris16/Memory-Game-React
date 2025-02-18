import React from "react";
import Card from "./Card";

const GameBoard = ({ cards, flippedCards, matchedCards, handleCardClick, difficulty }) => {
  // Apply the correct grid size
  const gridClass = difficulty === "4x4" ? "grid-4x4" : difficulty === "6x6" ? "grid-6x6" : "grid-8x8";

  return (
    <div className="game-board-container">
      <div className={`game-board ${gridClass}`}>
        {cards.map((symbol, index) => (
          <Card 
            key={index} 
            index={index} 
            symbol={symbol} 
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)} 
            handleCardClick={handleCardClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
