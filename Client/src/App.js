import "./Styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import VehicalModelPage from "./components/VehicalModelPage";
import OurTeam from "./components/Our Team";
import About from "./components/About";
import TestimonialPage from "./components/TestimonialPage";
import Signup from "./components/Authpages/Signup";
import Signin from "./components/Authpages/Singin";
import MainState from "./context/MainState";
import Verification from "./components/Verification/Verification";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [scroll, setscroll] = useState("");
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setscroll(scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const HandleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <MainState
          elements={
            <Router>
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>

                <Route
                  path="/VehicleModels"
                  element={<VehicalModelPage></VehicalModelPage>}
                ></Route>
                <Route path="/Our Team" element={<OurTeam></OurTeam>}></Route>
                <Route path="/About" element={<About></About>}></Route>
                <Route
                  path="/Testimonial"
                  element={<TestimonialPage></TestimonialPage>}
                ></Route>
                <Route path="/signin" element={<Signin></Signin>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route
                  path="/verifyotp"
                  element={<Verification></Verification>}
                ></Route>
              </Routes>
              {scroll > 800 ? (
                <button id="top" onClick={HandleClick}>
                  <i
                    id="Totop"
                    className="fa-solid fa-caret-up"
                    onClick={HandleClick}
                  ></i>
                </button>
              ) : null}
            </Router>
          }
        ></MainState>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
