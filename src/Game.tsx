import { useState } from "react";

function StartPage() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");

  function handleChange(e) {
    setGuess(e.target.value);
  }

  return (
    <>
      <h1>숫자야구</h1>

      <div className="App">
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
        <input
          type="text"
          onChange={handleChange}
          placeholder="숫자 세개를 입력하세요"
        ></input>
        <p>You typed: {guess}</p>
      </div>
    </>
  );
}

export default StartPage;
