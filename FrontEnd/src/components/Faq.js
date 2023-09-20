import React, { useRef, useState } from "react";
import img from "./img/car FAq.png";
export default function Faq() {
  const pref = useRef(0);
  const p2ref = useRef(0);
  const p3ref = useRef(0);
  const A1 = useRef(0);
  const A2 = useRef(0);
  const A3 = useRef(0);
  const [open, setopen] = useState("open");
  const [open1, setopen1] = useState("open");
  const [open2, setopen2] = useState("open");
  const [caret] = useState("down");

  const HandleClick = (e) => {
    if (open === "open") {
      if (e.target.id === "Q1") {
        pref.current.classList.add("coloured");
        A1.current.classList.add("open");
        pref.current.lastChild.classList.add("rotate");
        setopen("close");
      }
    } else if (open === "close") {
      if (e.target.id === "Q1") {
        pref.current.classList.remove("coloured");
        A1.current.classList.remove("open");
        pref.current.lastChild.classList.remove("rotate");
        setopen("open");
      }
    }
    if (open1 === "open") {
      if (e.target.id === "Q2") {
        p2ref.current.classList.add("coloured");
        A2.current.classList.add("open");
        p2ref.current.lastChild.classList.add("rotate");
        setopen1("close");
      }
    } else if (open1 === "close") {
      if (e.target.id === "Q2") {
        p2ref.current.classList.remove("coloured");
        A2.current.classList.remove("open");
        p2ref.current.lastChild.classList.remove("rotate");
        setopen1("open");
      }
    }
    if (open2 === "open") {
      if (e.target.id === "Q3") {
        p3ref.current.classList.add("coloured");
        A3.current.classList.add("open");
        p3ref.current.lastChild.classList.add("rotate");
        setopen2("close");
      }
    } else if (open2 === "close") {
      if (e.target.id === "Q3") {
        p3ref.current.classList.remove("coloured");
        A3.current.classList.remove("open");
        p3ref.current.lastChild.classList.remove("rotate");
        setopen2("open");
      }
    }
  };

  return (
    <section className="Faq | even-columns opposite-columns margin-top-600 margin-bottom-600 text-centre padding-block-600 ">
      <h3 className="primary-heading text-primary-color">FAQ</h3>
      <p className="secondary-heading fs-500">Frequently Asked questions</p>
      <p className="text-p fs-400">
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </p>
      <div className="bg-img"></div>
      <div className="tablet bg-img"></div>
      <div className="Questions | even-columns opposite-columns">
        <div ref={pref} onClick={HandleClick} id="Q1" className="Qusetiondiv">
          <p id="Q1" className="secondary-heading">
            1. What is special about comparing rental car deals?
          </p>{" "}
          <i id="Q1" className={`fa-solid fa-caret-${caret}`}></i>
        </div>

        <div ref={A1} className="Answer">
          <p className="ff-cubic fs-300">
            Comparing rental car deals is important as it helps find the best
            deal that fits your budget and requirements, ensuring you get the
            most value for your money. By comparing various options, you can
            find deals that offer lower prices, additional services, or better
            car models. You can find car rental deals by researching online and
            comparing prices from different rental companies.
          </p>
        </div>
        <div ref={p2ref} onClick={HandleClick} id="Q2" className="Qusetiondiv">
          <p id="Q2" className="secondary-heading">
            2. How do I find the car rental deals?
          </p>{" "}
          <i id="Q2" className={`fa-solid fa-caret-${caret}`}></i>
        </div>

        <div ref={A2} className="Answer">
          <p className="ff-cubic fs-300">
            You can find car rental deals by researching online and comparing
            prices from different rental companies. Websites such as Expedia,
            Kayak, and Travelocity allow you to compare prices and view
            available rental options. It is also recommended to sign up for
            email newsletters and follow rental car companies on social media to
            be informed of any special deals or promotions.
          </p>
        </div>
        <div ref={p3ref} onClick={HandleClick} id="Q3" className="Qusetiondiv">
          <p id="Q3" className="secondary-heading">
            3. How do I find such low rental car prices?
          </p>
          <i id="Q3" className={`fa-solid fa-caret-${caret}`}></i>
        </div>

        <div ref={A3} className="Answer">
          <p className="ff-cubic fs-300">
            Book in advance: Booking your rental car ahead of time can often
            result in lower prices. Compare prices from multiple companies: Use
            websites like Kayak, Expedia, or Travelocity to compare prices from
            multiple rental car companies. Look for discount codes and coupons:
            Search for discount codes and coupons that you can use to lower the
            rental price. Renting from an off-airport location can sometimes
            result in lower prices.
          </p>
        </div>
      </div>
    </section>
  );
}
