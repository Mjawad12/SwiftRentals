import React, { useState, useRef } from "react";
import DialogForm from "./DialogForm";
import Google from "./Googlemap";
import { useLoadScript } from "@react-google-maps/api";
import Alert from "./Alert";
export default function BookCar() {
  useLoadScript({
    googleMapsApiKey: "AIzaSyCWTbUZ8dyiLLVmakphdjifaLvaVCnh0tw",
  });
  const dialogref = useRef(0);
  const carref = useRef("");
  const Pdate = useRef("");
  const Ddate = useRef("");
  const [showAlert, setshowAlert] = useState({ msg: "" });
  const [show1, setshow1] = useState(0);
  const [show2, setshow2] = useState(0);
  const [carName, setcarName] = useState("");
  const [pickdate, setpickdate] = useState("");
  const [dropofdate, setdropofdate] = useState("");

  const handleClick = (e) => {
    if (e.target.id === "Pick-upLocation") {
      setshow1(show1 + 1);
    } else if (e.target.id === "Drop-ofLocation") {
      setshow2(show2 + 1);
    } else if (e.target.id === "button") {
      if (Pdate.current.value === "") {
        setshowAlert({ msg: "Please Enter Pick up date" });
      } else if (Ddate.current.value === "") {
        setshowAlert({ msg: "Please Enter Drop of  date" });
      } else {
        dialogref.current.style.display = "flex";
        dialogref.current.showModal();
        HandleChange(e);
      }

      if (pickdate === "") {
        const date = new Date();
        const todaydate =
          parseInt(date.getMonth() + 1) +
          "/" +
          date.getDate() +
          "/" +
          date.getFullYear();
        setpickdate(todaydate);
      }
      if (dropofdate === "") {
        setdropofdate("Not entered");
      }
      if (carName === "") {
        setcarName("Mercedes");
      }
    }
  };
  const HandleChange = (e) => {
    if (e.target !== "") {
      if (e.target.id === "cars") {
        setcarName(carref.current.value);
      } else if (e.target.id === "pickup") {
        setpickdate(Pdate.current.value);
      } else if (e.target.id === "dropof") {
        setdropofdate(Ddate.current.value);
      }
    }
  };

  return (
    <>
      <div id="Book" className="even-columns opposite-columns ">
        <h2 className="secondary-heading text-primary-color">Book a Car</h2>
        <Alert show={showAlert} setshow={setshowAlert}></Alert>
        <div className="form | grid-even ">
          <div className="inputs">
            <label htmlFor="cars">
              <i className="fa-solid fa-car-side"></i> Choose a car:
            </label>
            <select ref={carref} onChange={HandleChange} id="cars" name="cars">
              <option value="Mercedes">Mercedes-Benz C-Class</option>
              <option value="AudiA4">Audi A4</option>
              <option value="LexusES">Lexus ES</option>
              <option value="VolvoS60">Volvo S60</option>
              <option value="Vw">Vw golf 6</option>
            </select>
          </div>
          <div className="inputs">
            <label htmlFor="Pick-upLocation">
              <i className="fa-solid fa-location-dot"></i> Choose Pick-up
              Location:
            </label>
            <select
              id="Pick-upLocation"
              name="Pick-upLocation"
              onClick={handleClick}
            ></select>
            {show1 % 2 !== 0 ? <Google /> : null}
          </div>
          <div className="inputs">
            <label htmlFor="Drop-ofLocation">
              <i className="fa-solid fa-location-dot"></i> Choose Drop-of
              Location:
            </label>
            <select
              id="Drop-ofLocation"
              name="Drop-ofLocation"
              onClick={handleClick}
            ></select>
            {show2 % 2 !== 0 ? <Google /> : null}
          </div>
          <div className="inputs">
            <label htmlFor="pickup">
              <i className="fa-solid fa-calendar-days"></i> Chose Pick-up Date:
            </label>
            <input
              ref={Pdate}
              onChange={HandleChange}
              type="date"
              id="pickup"
              name="pickup"
            ></input>
          </div>
          <div className="inputs">
            <label htmlFor="dropof">
              <i className="fa-solid fa-calendar-days"></i> Chose Drop-of Date:
            </label>
            <input
              ref={Ddate}
              onChange={HandleChange}
              type="date"
              id="dropof"
              name="dropof"
            ></input>
          </div>
          <button id="button" className="button" onClick={handleClick}>
            Submit
          </button>
          <DialogForm
            Car={carName}
            Pickup={pickdate}
            Dropof={dropofdate}
            SetAlert={setshowAlert}
            ref={dialogref}
          />
        </div>
      </div>
      <hr className="bhr" />
    </>
  );
}
