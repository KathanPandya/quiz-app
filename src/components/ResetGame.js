import React from "react";

const ResetGame = ({setButtonState, setUserPoints, questions}) => {
  const resetGame = () => {
    setButtonState(Array(questions.length).fill(null));
    setUserPoints(0);
  };
  return (
    <div>
      <button className="resetBut" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default ResetGame;
