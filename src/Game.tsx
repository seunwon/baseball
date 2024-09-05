import React, { useState, useEffect } from "react";
import { GenerateNumbers } from "./Answer";
import { useNavigate } from "react-router-dom";
import { GuessInfo } from "./GuessInfo";
import "./Game.css";

function GamePage() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState<[number, number, number] | null>(null);
  const [homeRun, setHomeRun] = useState("");
  const [guessHistory, setGuessHistory] = useState<GuessInfo[]>([]);
  const [player, setPlayer] = useState<string | null>("");
  const navigate = useNavigate();

  useEffect(() => {
    const x = GenerateNumbers();
    setAnswer(x);
    console.log(x);
    const name = localStorage.getItem("playerName");
    setPlayer(name);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGuess(e.target.value);
  }

  function handleNextPage() {
    navigate("/ranking");
  }

  function addGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!answer) {
      return;
    }
    setCount(count + 1);
    const newGuess = new GuessInfo(count, guess, answer);
    setGuessHistory((prevGuessHistory) => [...prevGuessHistory, newGuess]);
    console.log(newGuess);
    if (newGuess.strike === 3) {
      setHomeRun("홈런입니다");
    }
  }

  return (
    <>
      <h2>숫자야구</h2>
      <p>{player} 님의 플레이</p>
      <div className="App">
        <form onSubmit={addGuess}>
          <input
            type="text"
            value={guess}
            onChange={handleChange}
            placeholder="숫자 세개를 입력하세요"
          />
          <button onClick={addGuess}>submit</button>
        </form>
        <ul>
          {guessHistory.map((g) => (
            <li key={g.id}>
              guess: {g.guess}, ball: {g.ball} strike: {g.strike}
            </li>
          ))}
        </ul>
        <p>{homeRun}</p>
        {homeRun === "홈런입니다" && (
          <button onClick={handleNextPage}>다음 페이지로</button>
        )}
      </div>
    </>
  );
}

export default GamePage;
