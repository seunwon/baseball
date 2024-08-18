import { useState, useEffect } from "react";
import { GenerateNumbers } from "./Answer";

function StartPage() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [finalGuess, setfinalGuess] = useState("");
  const [answer, setAnswer] = useState<[number, number, number] | null>(null);
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

  useEffect(() => {
    const x = GenerateNumbers();
    setAnswer(x);
    console.log(x);
  }, []);

  function handleChange(e) {
    setGuess(e.target.value);
  }

  function addGuess() {
    setCount(count + 1);
    setfinalGuess(finalGuess);
    hitNumber(guess);
  }

  function hitNumber(currentGuess) {
    if (!answer) return;

    const numbers = currentGuess.split("").map(Number);
    let s = 0;
    let b = 0;
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
    setBall(b);
    setStrike(s);
    console.log(b);
    console.log(s);
  }

  return (
    <>
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
      </div>
    </>
  );
}

export default StartPage;
