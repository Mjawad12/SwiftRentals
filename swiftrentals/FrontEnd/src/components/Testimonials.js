import React from "react";
import { useRef, useState } from "react";

export default function Testimonials() {
  const [displayed, setdisplayed] = useState(0);
  const Firstref = useRef(0);
  const Secondref = useRef(0);
  const Thirdref = useRef(0);
  const Fourthref = useRef(0);

  const sliderNextHandler = (elem_add, elem_remove) => {
    if (elem_add.current.classList.contains("hide_right")) {
      elem_add.current.classList.remove("hide_right");
    }
    elem_add.current.classList.add("show");

    if (elem_remove.current.classList.contains("show_left")) {
      elem_remove.current.classList.remove("show_left");
    }
    elem_remove.current.classList.add("hide");
  };
  const sliderPreviousHandler = (elem_add, elem_remove) => {
    elem_add.current.classList.add("show_left");
    elem_remove.current.classList.add("hide_right");
    elem_add.current.classList.remove("show");
    elem_add.current.classList.remove("hide");
    if (elem_remove.current.classList.contains("show_left")) {
      elem_remove.current.classList.remove("show_left");
    }
    if (elem_add.current.classList.contains("hide_right")) {
      elem_add.current.classList.remove("hide_right");
    }
    elem_add.current.classList.remove("display-none");
    elem_remove.current.classList.remove("show");
    elem_remove.current.classList.remove("hide");
  };

  const HandleClick = (e) => {
    if (e.target.id === "Next") {
      if (displayed === 0) {
        sliderNextHandler(Secondref, Firstref);
        setTimeout(() => {
          Firstref.current.classList.add("display-none");
        }, 1000);
        return setdisplayed(1);
      } else if (displayed === 1) {
        sliderNextHandler(Thirdref, Secondref);
        setTimeout(() => {
          Secondref.current.classList.add("display-none");
        }, 1000);
        return setdisplayed(2);
      } else if (displayed === 2) {
        sliderNextHandler(Fourthref, Thirdref);
        setTimeout(() => {
          Thirdref.current.classList.add("display-none");
        }, 1000);
        return setdisplayed(3);
      }
    } else if (e.target.id === "Previous") {
      if (displayed === 3) {
        sliderPreviousHandler(Thirdref, Fourthref);
        setTimeout(() => {
          Fourthref.current.classList.add("display-none");
        }, 1000);
        return setdisplayed(2);
      } else if (displayed === 2) {
        sliderPreviousHandler(Secondref, Thirdref);
        setTimeout(() => {
          Thirdref.current.classList.add("display-none");
        }, 1000);
        return setdisplayed(1);
      } else if (displayed === 1) {
        sliderPreviousHandler(Firstref, Secondref);
        setTimeout(() => {
          Secondref.current.classList.add("display-none");
        }, 1000);
        return setdisplayed(0);
      }
    }
  };

  return (
    <div className="Testimonials | even-columns opposite-columns margin-top-600">
      <div className="TestimonialsText | even-columns opposite-columns">
        <p className="primary-heading ">Reviews By Clients</p>
        <h3 className="secondary-heading text-primary-color">
          Client's Testimonials
        </h3>
        <p className="text fs-400">
          Explore the incredible difference we've brought to our clients by
          delving into their heartfelt testimonials. Our clients have first-hand
          experience with our services and the remarkable outcomes we've
          achieved together. They're enthusiastic about sharing their uplifting
          stories with you.
        </p>
      </div>
      <div className="ReviewDiv | even-columns">
        <i
          className="fa-solid fa-left-long | arrows"
          id="Previous"
          onClick={HandleClick}
        ></i>
        <div className="Reviews  | even-columns">
          <div className="Review first" ref={Firstref}>
            <div className="img"></div>
            <p className="Pr">
              <span>
                "I had the most amazing experience with Swift Rentals! From
                start to finish, their service was top-notch. The website was
                incredibly user-friendly, making it a breeze to find the perfect
                rental for my needs." - Emily S
              </span>
            </p>
            <div className="ReviewPerson">
              <h4>Rating</h4>
              <p>5.0</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="Review second " ref={Secondref}>
            <div className="img"></div>
            <p className="Pr">
              <span>
                "Swift Rentals has truly raised the bar for rental services. I
                was pleasantly surprised by the quality and variety of rentals
                they offered on their website. Browsing through the listings was
                a pleasure, thanks to the clear photos and comprehensive
                descriptions." - Mark R.
              </span>
            </p>
            <div className="ReviewPerson">
              <h4>Rating</h4>
              <p>5.0</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <div className="Review third " ref={Thirdref}>
            <div className="img"></div>
            <p className="Pr">
              <span>
                "I had an incredible experience with Swift Rentals. Their
                website was user-friendly, the rental choices were diverse, and
                the booking process was hassle-free. The property exceeded
                expectations, making my vacation truly memorable. Highly
                recommend!" -Sarah
              </span>
            </p>
            <div className="ReviewPerson">
              <h4>Rating</h4>
              <p>5.0</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="Review fourth " ref={Fourthref}>
            <div className="img"></div>
            <p className="Pr">
              <span>
                "Kudos to Swift Rentals! Their website's simplicity and diverse
                options impressed me. The booking process was seamless, and the
                property I stayed in was fantastic. Thanks for making my trip
                unforgettable!" - Alex
              </span>
            </p>
            <div className="ReviewPerson">
              <h4>Rating</h4>
              <p>5.0</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        <i
          className="fa-solid fa-right-long | arrows"
          id="Next"
          onClick={HandleClick}
        ></i>
      </div>
    </div>
  );
}
