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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name) {
      localStorage.setItem("playerName", name);
      console.log(name);
    }
  }

  return (
    <>
      <h1 id="font">숫 자 야 구 ⚾️</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={handleChange}
          id="pixel"
        />
        <div className="App">
          <Link to="/game" onClick={handleStart}>
            <button id="pixel">start</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default StartPage;
