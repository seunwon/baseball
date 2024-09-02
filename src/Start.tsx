import React from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

function StartPage() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  return (
    <>
      <h1>숫자야구</h1>
      <div className="App">
        <button onClick={startGame}>start</button>
      </div>
    </>
  );
}

export default StartPage;
