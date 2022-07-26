import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/catch-pokemon" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
