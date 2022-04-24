import "./app.scss";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/VideoPlayer" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
