import React from "react";
import { useRef } from "react";
import Typed from "typed.js";
import img from "./Front page img/front 2 car.png";
import { Link } from "react-router-dom";
export default function Intro() {
  const b1 = useRef(0);
  const b2 = useRef(1);
  const el = useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Cherish</i>", "<i>Happiness</i>", "<i>Freedom</i>"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const HandleClick = () => {
    window.scrollTo(0, 800);
  };
  const HandleMouseOver = (e) => {
    if (b1 !== undefined) {
      if (e.target.firstElementChild === b1.current) {
        b1.current.classList.add("hover");
      }
    }
    if (b2 !== undefined) {
      if (e.target.firstElementChild === b2.current) {
        b2.current.classList.add("hover");
      }
    }
  };
  const HandleMouseLeave = (e) => {
    if (b1 !== undefined) {
      if (e.target.firstElementChild === b1.current) {
        b1.current.classList.remove("hover");
      }
    }
    if (b2 !== undefined) {
      if (e.target.firstElementChild === b2.current) {
        b2.current.classList.remove("hover");
      }
    }
  };
  return (
    <>
      <section className="main even-columns ">
        <div className="mainWrapper |   even-columns even-columns-mob">
          <div className="Hero | even-columns opposite-columns">
            <p className="text">Plan your Trip Now!</p>
            <h1 className="primary-heading">
              Your Ultimate Car Rental{" "}
              <span className="text-primary-color">Solution</span>
            </h1>

            <p className="main-block | secondary-heading">
              Join us on a ride where every mile
              <br /> is a moment to{" "}
              <span className="text-primary-color " ref={el}></span>
            </p>

            <div datatype="button-main-div" className="even-columns">
              <button
                className="button btn-main"
                onClick={HandleClick}
                onMouseOver={HandleMouseOver}
                onMouseLeave={HandleMouseLeave}
              >
                Book Now <i ref={b1} className="fa-solid fa-square-check"></i>
              </button>

              <Link to="/signin">
                <button
                  className="button btn-main btn-main-black"
                  onMouseOver={HandleMouseOver}
                  onMouseLeave={HandleMouseLeave}
                >
                  Sign in
                  <i ref={b2} className="fa-solid fa-arrow-right fa-beat"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="background">
            <img src={img} alt="img"></img>
          </div>
        </div>
      </section>
    </>
  );
}
