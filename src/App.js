import React, { useEffect } from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "./App.css";
import { Home ,User,Navbar,Hero, Chart, End} from "./pages/link";
import Lottie from "lottie-react";
import animation from "./animation/looding.json";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const SCROLL_TOP = document.querySelector(".scrollY_Top");
      SCROLL_TOP.classList.toggle("S_TOP_ACTIVE", window.scrollY > 700);
      const scrollY = window.scrollY;
    })
    
    const looding = document.querySelector(".looding");
    setTimeout(() => {
      looding.remove();
      document.body.style.overflow = "auto"
    },3200)
  })
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Home />
                  <Chart />
                </>
              }
            ></Route>
            <Route path="/user/:id" element={<User />}></Route>
            <Route path="/Table" element={<Home />}></Route>
            <Route path="/chart" element={<Chart />}></Route>
          </Routes>
          <End />
        </Router>
      </div>
      <div className="looding">
        <Lottie animationData={animation} />
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: "0", behavior: "smooth" });
        }}
        className="scrollY_Top"
      >
        <i class="fa-solid fa-chevron-up"></i>
      </button>
    </>
  );
};

export default App;
