import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";

function RankingPage() {
  const [player, setPlayer] = useState<string | null>("");
  const [score, setScore] = useState<string | null>("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("playerName");
    setPlayer(name);
    const number = localStorage.getItem("score");
    setScore(number);
  }, []);

  function handleFirstPage() {
    navigate("/");
  }

  return (
    <>
      <h2>점수</h2>
      <h3 id="pixel">
        {player}, {score}
      </h3>
      <button id="pixel" onClick={handleFirstPage}>
        처음으로
      </button>
    </>
  );
}

export default RankingPage;
