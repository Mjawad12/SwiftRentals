import React, { useState, useEffect, useContext, useRef } from "react";
import background from "./img/Png/formbackground-min.png";
import Audi from "./img/Png/Cars/audi-a4.webp";
import Lexus from "./img/Png/Cars/lexus-es.webp";
import Mercedes from "./img/Png/Cars/mercedes-benz-c-class.webp";
import Volvo from "./img/Png/Cars/volvo-s60.webp";
import Vw from "./img/Png/Cars/vw-golf.webp";
import Context from "../context/Context";
import Loading from "./Loading";
import emailjs from "@emailjs/browser";

const DialogForm = React.forwardRef((props, ref) => {
  const context = useContext(Context);
  const Firstname = useRef("");
  const Lastname = useRef("");
  const Phonenumber = useRef("");
  const Address = useRef("");
  const [err1, seterr1] = useState("");
  const [err2, seterr2] = useState("");
  const [err3, seterr3] = useState("");
  const [err4, seterr4] = useState("");

  const {
    createReservation,
    errors,
    clientEmail,
    setReservation,
    Reservation,
    loading,
  } = context;
  const [imag, setimag] = useState();

  const HandleClick = () => {
    window.scrollTo(0, 600);
    if (localStorage.getItem("authtoken") !== null) {
      createReservation(
        clientEmail,
        props.Car,
        props.Pickup,
        props.Dropof,
        "New York",
        "Ohio",
        Firstname.current.value,
        Lastname.current.value,
        Phonenumber.current.value,
        Address.current.value
      )
        .then(() => {})
        .catch(() => {});
    } else {
      props.SetAlert({ msg: "Please Create an account to make a Reservation" });
      HandleClose();
    }
  };

  useEffect(() => {
    seterr1("");
    seterr2("");
    seterr3("");
    seterr4("");
    if (errors) {
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].path === "firstname") {
          seterr1(errors[i].msg);
        } else if (errors[i].path === "lastname") {
          seterr2(errors[i].msg);
        } else if (errors[i].path === "phonenumber") {
          seterr3(errors[i].msg);
        } else if (errors === "Already made reservation of this car") {
          seterr4(errors);
        }
      }
    }
  }, [errors]);

  useEffect(() => {
    if (Reservation.msg !== undefined) {
      const templateParams = {
        to_name: clientEmail,
        user_email: clientEmail,
        message: `SwiftRentals
        I hope this message finds you well. I wanted to express my sincere gratitude for your interest in SwiftRentals and for considering us for your car rental needs.
        To clarify, SwiftRentals is primarily a platform designed for showcasing my portfolio as a web developer and designer. It is not a real car rental service. Your reservation request, while not applicable in this context, is genuinely appreciated as it allows me to demonstrate the user experience and functionality of the website.
        Your interest means a lot to me, and I'm here to answer any questions you might have about the website, its features, or any other inquiries related to my portfolio .Please feel free to reach out with any queries, and I'll be more than happy to assist you.
        Best regards,
        swiftrentalsofficial@gmail.com`,
        from_name: "SwiftREntals",
      };
      emailjs
        .send(
          "service_op5mypk",
          "template_iqtbi5w",
          templateParams,
          "fsNlf011wAWaX2zIF"
        )
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("hello");
      HandleClose();
      props.SetAlert({ msg: Reservation.msg });
      setReservation("");
    } // eslint-disable-next-line
  }, [Reservation]);

  useEffect(() => {
    const images = {
      Mercedes: Mercedes,
      Audi: Audi,
      Lexus: Lexus,
      Volvo: Volvo,
      Vw: Vw,
    };
    setimag(images[props.Car]);
  }, [props.Car]);

  const HandleClose = () => {
    ref.current.close();
    ref.current.style.display = "none";
    Firstname.current.value = "";
    Lastname.current.value = "";
    Phonenumber.current.value = "";
    Address.current.value = "";
    seterr1("");
    seterr2("");
    seterr3("");
    seterr4("");
  };
  return (
    <>
      <dialog ref={ref} className="even-columns">
        <div className="header">
          <h3 className="secondary-heading text-white">
            Compelete Reservation
          </h3>
          <i
            onClick={HandleClose}
            id="close-dailog-nav"
            className="fa-solid fa-xmark cross fs-600"
          ></i>
        </div>
        <div className="tips | even-columns padding-block-600 text">
          <p>
            <i className="fa-duotone fa-info"></i>Upon completing this
            reservation enquiry, you will receive:
          </p>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div className="details | padding-block-600 even-columns">
          <div className="child">
            <h3>Locatiion & Date :</h3>
            <div className="mLD">
              <h4>Pick-Up Date & Time</h4>
              <p>
                {props.Pickup} <input type="time"></input>
              </p>
              <hr />
            </div>
            <div className="mLD">
              <h4>Drop-Off Date & Time</h4>
              <p>
                {props.Dropof}
                <input type="time"></input>
              </p>

              <hr />
            </div>
            <div className="mLD">
              <h4>Pick-Up Location</h4>
              <p>Not Entered</p>
              <hr />
            </div>
            <div className="mLD">
              <h4>Drop-Off Location</h4>
              <p>Not Entered</p>
              <hr />
            </div>
          </div>
          <div className="child | even-columns opposite-columns">
            <h3>{props.Car}</h3>
            <img alt="" src={imag}></img>
          </div>
        </div>
        <img
          alt=""
          src={
            "https://ik.imagekit.io/jlyn85pm1/SWiftRentals/formbackground-min.png?updatedAt=1695364935188" ||
            background
          }
          className="bd"
        ></img>
        <hr className="main" />
        <div className="bottom | even-columns opposite-columns padding-block-600">
          <h3>Personal Information</h3>
          <div className="information ">
            <div className="Id">
              <label htmlFor="firstname">First Name:</label>
              <input
                ref={Firstname}
                type="text"
                id="firstname"
                placeholder="Enter Your First Name"
              ></input>
              {err1 && (
                <p className="text-red ff-cubic fs-300">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {err1}
                </p>
              )}
            </div>
            <div className="Id">
              <label htmlFor="lastname">Last Name:</label>
              <input
                ref={Lastname}
                type="text"
                id="lastname"
                placeholder="Enter Your Last Name"
              ></input>
              {err2 && (
                <p className="text-red ff-cubic fs-300">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {err2}
                </p>
              )}
            </div>
            <div className="Id">
              <label htmlFor="phonenumber">Phone Number:</label>
              <input
                ref={Phonenumber}
                type="tel"
                id="phonenumber"
                placeholder="Enter Your Phone Number"
              ></input>
              {err3 && (
                <p className="text-red ff-cubic fs-300">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {err3}
                </p>
              )}
            </div>

            <div className="Id">
              <label htmlFor="address">Address:</label>
              <input
                ref={Address}
                type="text"
                id="address"
                placeholder="Enter Your Phone Address"
              ></input>
            </div>
            <div className="Id">
              <label htmlFor="age">Age:</label>
              <input type="text" id="age" placeholder="Enter Your Age"></input>
            </div>
            <div className="Id">
              <label htmlFor="city2">City:</label>
              <input
                type="text"
                id="city2"
                placeholder="Enter Your City"
              ></input>
            </div>
            <div className="Id">
              <label htmlFor="zipcode">Zip code:</label>
              <input
                type="text"
                id="city1"
                placeholder="Enter Your City Zip code"
              ></input>
            </div>
          </div>
          {err4 && (
            <p className="text-red ff-cubic fs-300">
              <i className="fa-solid fa-circle-exclamation"></i>
              {err4}
            </p>
          )}
          {loading === "true" && (
            <Loading loading={loading} padding={1}></Loading>
          )}
          <button onClick={HandleClick} className="button Submit">
            Submit
          </button>
        </div>
      </dialog>
    </>
  );
});
export default DialogForm;
