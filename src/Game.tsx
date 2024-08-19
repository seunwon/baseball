import { useState, useEffect } from "react";
import { GenerateNumbers } from "./Answer";

class GuessInfo {
  private _id?: number;
  private _guess?: string;
  private _ball?: number;
  private _strike?: number;

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get guess(): string | undefined {
    return this._guess;
  }

  set guess(value: string | undefined) {
    this._guess = value;
  }

  get ball(): number | undefined {
    return this._ball;
  }

  set ball(value: number | undefined) {
    this._ball = value;
  }

  get strike(): number | undefined {
    return this._strike;
  }

  set strike(value: number | undefined) {
    this._strike = value;
  }
}
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
