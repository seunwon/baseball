import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";

function RankingPage() {
  interface Ranking {
    name: string | null;
    score: string | null;
  }

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

  let userRanking = [{ name: "은원", score: "3" }];

  function addArray() {
    userRanking.push({ name: player, score: score });
    console.log(userRanking);
  }

  return (
    <>
      <h2>점수</h2>
      <h3 id="pixel">
        {player}, {score}
      </h3>
      <button id="pixel" onClick={addArray}>
        점수 등록하기
      </button>
      <ul>
        {userRanking.map((ranking, index) => (
          <li key={index}>
            {index + 1}. {ranking.name}: {ranking.score}
          </li>
        ))}
      </ul>
      <p></p>
      <button id="pixel" onClick={handleFirstPage}>
        처음으로
      </button>
    </>
  );
}

export default RankingPage;
