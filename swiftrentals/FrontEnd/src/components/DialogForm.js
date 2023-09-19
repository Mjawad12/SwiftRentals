import React, { useState, useEffect, useContext, useRef } from "react";
import background from "./img/Png/formbackground.png";
import Mercedes from "./img/Png/Cars/Mercedes-Benz C-Class.png";
import AudiA4 from "./img/Png/Cars/Audi A4.png";
import LexusES from "./img/Png/Cars/Lexus ES.png";
import VolvoS60 from "./img/Png/Cars/Volvo S60.png";
import Vw from "./img/Png/Cars/Vw golf 6.png";
import Context from "../context/Context";

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
  } = context;
  const [imag, setimag] = useState();

  const HandleClick = () => {
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
        .catch((error) => {
          console.log(error);
        });
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
      HandleClose();
      props.SetAlert({ msg: Reservation.msg });
      setReservation("");
    }
  }, [Reservation]);

  useEffect(() => {
    if (props.Car === "Mercedes") {
      setimag(Mercedes);
    } else if (props.Car === "AudiA4") {
      setimag(AudiA4);
    } else if (props.Car === "LexusES") {
      setimag(LexusES);
    } else if (props.Car === "VolvoS60") {
      setimag(VolvoS60);
    } else if (props.Car === "Vw") {
      setimag(Vw);
    }
  }, [props.Car]);

  // const images = {
  //   Mercedes: Mercedes,
  //   AudiA4: AudiA4,
  //   LexusES: LexusES,
  //   VolvoS60: VolvoS60,
  // };
  // const selectedimage = images[props.Car];
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
        <img alt="" src={background} className="bd"></img>
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
          <button onClick={HandleClick} className="button Submit">
            Submit
          </button>
        </div>
      </dialog>
    </>
  );
});
export default DialogForm;
