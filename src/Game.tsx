import { useState, useEffect } from "react";
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

  function addGuess() {
    setCount(count + 1);
    setGuessHistory([...guessHistory, ,]);
  }

  return (
    <>
      <h1>숫자야구</h1>
      <div className="App">
        <input
          type="text"
          value={guess}
          onChange={handleChange}
          placeholder="숫자 세개를 입력하세요"
        />
        <button onClick={addGuess}>submit</button>
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
