import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Start";
import GamePage from "./Game";
import RankingPage from "./Ranking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/ranking" element={<RankingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
