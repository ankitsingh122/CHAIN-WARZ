import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PageError from "./pages/PageError";
import LandingPage from "./pages/LandingPage";
import Leaderboard from "./pages/Leaderboard";
import Winner from './pages/Winner'


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
           <Route path="/Leaderboard" element={<Leaderboard/>}/>
           <Route path="/Winner" element={<Winner/>}/>
          <Route path="*" element={<PageError />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
