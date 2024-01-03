import React from "react";
import Top from "./Top";
import carPic from "./img/ryan-spencer-c-NEiPIxpYI-unsplash-min.webp";
import carpic2 from "./img/Bookformpic.webp";
import carpic3 from "./img/joey-banks-YApiWyp0lqo-unsplash-min.webp";
import carpic4 from "./img/hyundai-motor-group-P45K3ewrATs-unsplash-min.webp";
import Faq from "./Faq";
import Footer from "./Footer";
export default function About() {
  return (
    <>
      <Top page="About"></Top>
      <div className="Container">
        <div className="AboutUs | even-columns opposite-columns padding-block-900">
          <h1 className="primary-heading text-centre">About us</h1>
          <div className="sec-about | even-columns ">
            <div className="sec-text | even-columns opposite-columns">
              <h2 className="secondary-heading">Introduction</h2>
              <p>
                Welcome to SwiftRentals, where your perfect getaway begins. We
                are your trusted partner in finding exceptional rental
                properties that match your unique preferences and desires. Our
                mission is to redefine your travel experience by offering a
                seamless and personalized way to discover your dream
                accommodations.
              </p>
            </div>
            <img alt="" src={carPic} className="Aboutpic"></img>
          </div>

          <div className="sec-about | even-columns ">
            <img alt="" className="Wcsimg" src={carpic2}></img>
            <div className="sec-text | even-columns opposite-columns">
              <h2 className="secondary-heading">
                Why Choose <span>SwiftRentals</span>?
              </h2>

              <h4 className="fs-350">
                <i className="fa-solid fa-circle-check"></i> Verified Properties
              </h4>
              <p>
                Your comfort and security matter to us. We meticulously curate
                our listings, partnering with property owners who share our
                commitment to quality and reliability.
              </p>
            </div>
          </div>

          <div className="sec-about | even-columns ">
            <div className="sec-text | even-columns opposite-columns">
              <h2 className="secondary-heading">
                <i className="fa-solid fa-map"></i> Exploration Made Easy
              </h2>
              <p>
                Discover new destinations with ease. Our user-friendly website
                allows you to explore listings, filter options, and book your
                next adventure effortlessly.
              </p>
            </div>
            <img alt="" className="Wcsimg" src={carpic3}></img>
          </div>

          <div className="sec-about | even-columns ">
            <img alt="" className="Wcsimg" src={carpic4}></img>
            <div className="sec-text | even-columns opposite-columns">
              <h2 className="secondary-heading">
                <i className="fa-solid fa-car"></i> Tailored to You
              </h2>
              <p>
                We understand that every traveler is unique. That's why we
                provide an extensive range of rental options, from cozy retreats
                to luxurious estates. With SwiftRentals, your preferences take
                center stage.
              </p>
            </div>
          </div>
          <h2>
            <i className="fa-solid fa-star"></i> Unparalleled Service
          </h2>
          <p className="text text-centre">
            Our dedicated team is here to ensure that your rental experience is
            smooth from start to finish. Need assistance? We're just a click
            away, ready to help you with any questions or concerns.
          </p>
        </div>
      </div>
      <hr className="Aboutus" />

      <div className="position-relative overflow-hidden">
        <div className="Container overflow-hidden">
          <Faq></Faq>
        </div>
      </div>
      <div className="Container-footer">
        <Footer></Footer>
      </div>
    </>
  );
}
