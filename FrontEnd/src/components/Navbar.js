import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./img/Png/logo SwiftREntals.png";
import Context from "../context/Context";
import DialogLogout from "./Authpages/dialogLogout";
import ReservationTab from "./ReservationTab";
export default function Navbar() {
  const navigate = useNavigate();
  const context = useContext(Context);
  const {
    authtoken,
    fetchdata,
    userData,
    setauthtoken,
    errors,
    getReservation,
  } = context;
  const location = useLocation();
  const tablet = document.querySelector(".tablet-top");
  if (location.pathname !== "/signup") {
    tablet && tablet.classList.remove("display-none");
  } else if (location.pathname !== "/signip") {
    tablet && tablet.classList.remove("display-none");
  }
  const dialogdiv = useRef("");
  const dialogLogout = useRef("");
  const reservationref = useRef(0);
  const mobinav = useRef(0);
  const HandleClick = () => {
    window.scrollTo(0, 800);
  };

  const HandleMobileNav = () => {
    if (mobinav.current.classList.contains("display-none")) {
      mobinav.current.classList.remove("animate-reverse");
      mobinav.current.classList.add("display-flex");
      mobinav.current.classList.remove("display-none");
      mobinav.current.classList.add("animate");
      // document.body.classList.add("no-scroll");
    } else {
      mobinav.current.classList.add("animate-reverse");
      setTimeout(() => {
        mobinav.current.classList.add("display-none");
        mobinav.current.classList.remove("display-flex");
        mobinav.current.classList.remove("animate");
        // document.body.classList.remove("no-scroll");
      }, 1000);
    }
  };

  useEffect(() => {
    if (authtoken) {
      fetchdata(authtoken);
      getReservation();
    }
  }, [authtoken]);
  const handleclickLogout = () => {
    if (dialogLogout.current.classList) {
      dialogLogout.current.classList.toggle("full");
    }
  };
  const HandleLogout = async () => {
    setauthtoken("");
    localStorage.clear();
    navigate("/");
    HandleMobileNav();
  };

  const handleReservationMob = () => {
    getReservation();
    HandleMobileNav();
    reservationref.current.classList.add("display-flex");
    document.body.classList.add("no-scroll");
    setTimeout(() => {
      reservationref.current.classList.add("ReservationAnimation");
    }, 100);
  };
  const handleReservationComp = () => {
    getReservation();
    reservationref.current.classList.add("display-flex");
    document.body.classList.add("no-scroll");
    setTimeout(() => {
      reservationref.current.classList.add("ReservationAnimationCOMP");
    }, 100);
  };
  return (
    <>
      <div className="top-div">
        <div className="Container">
          <nav id="top">
            <div className="tablet-top"></div>
            <div ref={mobinav} className="mobi-Nav display-none">
              {authtoken && (
                <div className="Sign_nav even-columns opposite-columns display-flex">
                  <button onClick={handleclickLogout}>
                    <i className="fa-solid fa-circle-user"></i>
                  </button>
                  <p className="ff-cubic fs-300">{userData.name}</p>
                  <button className="button" onClick={handleReservationMob}>
                    Your Reservations
                  </button>
                </div>
              )}
              <i
                onClick={HandleMobileNav}
                id="close-mob-nav"
                className="fa-solid fa-xmark"
              ></i>
              <ul className="nav-ul nav-mob-ul |  list-none ">
                <li onClick={HandleMobileNav}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={HandleMobileNav}>
                  <Link onClick={HandleClick} to="/">
                    Book
                  </Link>
                </li>
                <li onClick={HandleMobileNav}>
                  <Link to="/VehicleModels">Vehical Models</Link>
                </li>
                <li onClick={HandleMobileNav}>
                  <Link to="/Our Team">Our Team</Link>
                </li>
                <li onClick={HandleMobileNav}>
                  <Link to="/Testimonial">Testimonial</Link>
                </li>
                <li onClick={HandleMobileNav}>
                  <Link to="/About">About</Link>
                </li>
              </ul>
              {!authtoken ? (
                <div datatype="button-div" className="even-columns">
                  <Link to="/signin">
                    <button className="button" onClick={HandleMobileNav}>
                      Sign in
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="button" onClick={HandleMobileNav}>
                      Register
                    </button>
                  </Link>
                </div>
              ) : (
                <button className="button" onClick={HandleLogout}>
                  Logout
                </button>
              )}
            </div>
            <div datatype="nav" className="even-columns">
              <Link to="/">
                <img className="logo" alt="logo" src={logo}></img>
              </Link>

              <ul className="nav-ul |  list-none ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link onClick={HandleClick} to="/">
                    Book
                  </Link>
                </li>
                <li>
                  <Link to="/VehicleModels">Vehical Models</Link>
                </li>
                <li>
                  <Link to="/Our Team">Our Team</Link>
                </li>
                <li>
                  <Link to="/Testimonial">Testimonial</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
              </ul>

              {!authtoken && (
                <div datatype="button-div" className="even-columns com">
                  <Link to="/signin">
                    <button className="button">Sign in</button>
                  </Link>
                  <Link to="/signup">
                    <button className="button">Register</button>
                  </Link>
                </div>
              )}
              {authtoken && (
                <div
                  ref={dialogdiv}
                  className="Sign_nav even-columns opposite-columns"
                >
                  <button onClick={handleclickLogout}>
                    <i id="logout_icon" className="fa-solid fa-circle-user"></i>
                  </button>
                  <p className="ff-cubic fs-300">{userData.name}</p>
                  <DialogLogout
                    handleReservationComp={handleReservationComp}
                    ref={dialogLogout}
                  ></DialogLogout>
                </div>
              )}
              <i
                id="nav-toggle-btn"
                onClick={HandleMobileNav}
                className="fa-solid fa-bars"
              ></i>
            </div>
          </nav>
        </div>
        <ReservationTab ref={reservationref}></ReservationTab>
      </div>
    </>
  );
}
