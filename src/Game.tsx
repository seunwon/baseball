import { useState } from "react";

function StartPage() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [finalGuess, setfinalGuess] = useState("");

  function handleChange(e) {
    setGuess(e.target.value);
    console.log(e.target.value);
  }

  function addGuess() {
    setCount(count + 1);
    setfinalGuess(guess);
    console.log(finalGuess);
  }

  return (
    <>
      <div className="App">
        <input
          type="text"
          onChange={handleChange}
          placeholder="숫자 세개를 입력하세요"
        ></input>
        <button onClick={addGuess}>submit</button>
        <p>You typed: {finalGuess}</p>
      </div>
    </>
  );
}

export default StartPage;
