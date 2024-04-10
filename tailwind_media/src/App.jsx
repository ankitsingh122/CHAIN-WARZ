import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PageError from "./pages/PageError";
import LandingPage from "./pages/LandingPage";

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
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/" element={<Works />} />
          <Route path="/" element={<Startbattle />} />
          <Route path="/" element={<Statistic />} />
          <Route path="/" element={<Prizepool />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Team />} />
          <Route path="/" element={<Subscribe />} />
          <Route path="/" element={<Faq />} />
          <Route path="/" element={<Audit />} />
          <Route path="/" element={<Join />} /> */}
          <Route path="*" element={<PageError />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
