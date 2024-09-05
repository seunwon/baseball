import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Start.css";

function StartPage() {
  const [name, setName] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleStart() {
    if (name) {
      localStorage.setItem("playerName", name);
      console.log(name);
    }
  }

  return (
    <>
      <h1>숫자야구</h1>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleChange}
      />
      <div className="App">
        <Link to="/game" onClick={handleStart}>
          start
        </Link>
      </div>
    </>
  );
}

export default StartPage;
