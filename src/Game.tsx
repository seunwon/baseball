import { useState, useEffect } from "react";
import { GenerateNumbers } from "./Answer";

interface GuessInfo {
  id?: number;
  guess?: string;
  ball?: number;
  strike?: number;
}

function StartPage() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState<[number, number, number] | null>(null);
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
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
    const { b, s } = hitNumber(guess);
    setGuessHistory([
      ...guessHistory,
      { id: count, guess: guess, ball: b, strike: s },
    ]);
  }

  function hitNumber(currentGuess: string) {
    let s = 0;
    let b = 0;
    if (!answer) throw new Error();

    const numbers = currentGuess.split("").map(Number);

    for (let i = 0; i < 3; i++) {
      if (numbers[i] === answer[i]) {
        s++;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (answer.includes(numbers[i]) && numbers[i] != answer[i]) {
        b++;
      }
    }

    if (s === 3) {
      setHomeRun("HomeRun!⚾️");
    }
    setBall(b);
    setStrike(s);

    console.log("ball: ", b);
    console.log("strike: ", s);

    return { b, s };
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
        <p>You typed: {guess}</p>
        <p>Strikes: {strike}</p>
        <p>Balls: {ball}</p>

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
