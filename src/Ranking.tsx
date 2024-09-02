import React from "react";
import { useNavigate } from "react-router-dom";

function RankingPage() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  return (
    <>
      <h1>등수</h1>
    </>
  );
}

export default RankingPage;
