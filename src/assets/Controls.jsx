import React from "react";

const Controls = ({ difficulty, setDifficulty, resetGame, moves }) => {
  return (
    <div className="controls">
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="4x4">Easy (4x4)</option>
        <option value="6x6">Medium (6x6)</option>
        <option value="8x8">Hard (8x8)</option>
      </select>
      <button onClick={resetGame}>New Game</button>
      <p>Moves: {moves}</p>
    </div>
  );
};

export default Controls;
