import { Link } from "react-router-dom";
import "./Start.css";

function StartPage() {
  return (
    <>
      <h1>숫자야구</h1>
      <div className="App">
        <Link to="/game">start</Link>
      </div>
    </>
  );
}

export default StartPage;
