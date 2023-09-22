import { useState } from "react";
import Context from "./Context";
import React from "react";
const url = "https://better-blue-adder.cyclic.cloud/api/";

export default function MainState(props) {
  const [authtoken, setauthtoken] = useState(localStorage.getItem("authtoken"));
  const [errors, seterrors] = useState("");
  const [userData, setuserData] = useState("");
  const [otpverifier, setotpverifier] = useState("NO");
  const [otp, setotp] = useState();
  const [clientEmail, setclientEmail] = useState("");
  const [Reservation, setReservation] = useState("");
  const [Reservation_data, setReservation_data] = useState("");
  const [loading, setloading] = useState("");

  //                sign up function

  const signup = async (name, email, password) => {
    localStorage.clear();
    setloading("true");
    const response = await fetch(`${url}createuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, verification: "NO" }),
    });

    const parsed_Response = await response.json();
    setloading("false");
    if (parsed_Response.otp !== undefined) {
      setotpverifier("YES");
      setclientEmail(email);
      setotp(parsed_Response.otp);
    } else if (parsed_Response.authtoken === undefined) {
      await seterrors(parsed_Response);
    } else {
      await seterrors(undefined);
      await setauthtoken(parsed_Response.authtoken);
      localStorage.setItem("authtoken", parsed_Response.authtoken);
    }
  };

  //                          Sign in function

  const signin = async (email, password) => {
    localStorage.clear();
    setloading("true");
    const response = await fetch(`${url}signin`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const parsed_Response = await response.json();
    setloading("false");

    if (parsed_Response.otp !== undefined) {
      setotpverifier("YES");
      setotp(parsed_Response.otp);
      setclientEmail(email);
    } else if (parsed_Response.authtoken === undefined) {
      await seterrors(parsed_Response);
    } else {
      await seterrors(undefined);
      await setauthtoken(parsed_Response.authtoken);
      localStorage.setItem("authtoken", parsed_Response.authtoken);
    }
  };

  //                            get user data

  const fetchdata = async (authtoken) => {
    const response = await fetch(`${url}test`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authtoken: authtoken,
      },
    });
    const parsed_Response = await response.json();

    setclientEmail(parsed_Response.email);
    parsed_Response && setuserData(parsed_Response);
  };

  //                      Verify OTP
  const verifyOtp = async (email) => {
    setloading("true");
    const response = await fetch(`${url}verifyOTP`, {
      method: "Post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
    const parsed_Response = await response.json();
    setloading("false");
    if (parsed_Response.authtoken !== undefined) {
      await seterrors(undefined);
      await setauthtoken(parsed_Response.authtoken);
      localStorage.setItem("authtoken", parsed_Response.authtoken);
    }
  };
  //                           create reservation

  const createReservation = async (
    email,
    carname,
    Pickupdate,
    Dropofdate,
    PickupLocation,
    DropofLocation,
    firstname,
    lastname,
    phonenumber,
    address
  ) => {
    setReservation("");
    seterrors("");
    setloading("true");
    const response = await fetch(`${url}reserv/createReservation`, {
      method: "Post",
      headers: {
        authtoken: localStorage.getItem("authtoken"),
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        carname: carname,
        pickupdate: Pickupdate,
        dropofdate: Dropofdate,
        pickupLocation: PickupLocation,
        dropofLocation: DropofLocation,
        firstname: firstname,
        lastname: lastname,
        address: address,
        phonenumber: phonenumber,
      }),
    });

    const parsed_Response = await response.json();
    setloading("false");
    if (parsed_Response.error !== undefined) {
      seterrors(parsed_Response.error);
    } else {
      setReservation(parsed_Response);
    }
  };
  //        GET Reservations

  const getReservation = async () => {
    setReservation_data("");
    setloading("true");
    const response = await fetch(`${url}reserv/getReservations`, {
      method: "Get",
      headers: {
        authtoken: localStorage.getItem("authtoken"),
        "Content-type": "application/json",
      },
    });
    const parsed_Response = await response.json();
    setloading("false");
    setReservation_data(parsed_Response.Reservation);
  };

  //  cancel Reservation
  const cancelReservation = async (Reservation_id) => {
    await fetch(`${url}reserv/cancelReservation`, {
      method: "Delete",
      headers: {
        authtoken: localStorage.getItem("authtoken"),
        "Content-type": "application/json",
      },
      body: JSON.stringify({ Reservation_id }),
    });
  };

  return (
    <Context.Provider
      value={{
        signup,
        errors,
        authtoken,
        setauthtoken,
        seterrors,
        signin,
        fetchdata,
        userData,
        otpverifier,
        setotpverifier,
        verifyOtp,
        otp,
        clientEmail,
        createReservation,
        setReservation,
        Reservation,
        Reservation_data,
        getReservation,
        cancelReservation,
        loading,
        setloading,
      }}
    >
      {props.elements}
    </Context.Provider>
  );
}
