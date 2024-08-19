import React, { useState, useEffect } from "react";
import { GenerateNumbers } from "./Answer";
import { GuessInfo } from "./GuessInfo";

function StartPage() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState<[number, number, number] | null>(null);
  const [homeRun, setHomeRun] = useState("");
  const [guessHistory, setGuessHistory] = useState<GuessInfo[]>([]);

  useEffect(() => {
    const x = GenerateNumbers();
    setAnswer(x);
    console.log(x);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGuess(e.target.value);
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
      <h1>숫자야구</h1>
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
      </div>
    </>
  );
}

export default StartPage;
