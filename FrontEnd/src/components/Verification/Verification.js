import React from "react";
import { useContext, useRef } from "react";
import Context from "../../context/Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

export default function Verification() {
  const [err1, seterr1] = useState("");
  const navigate = useNavigate();
  const context = useContext(Context);
  const { otp, verifyOtp, clientEmail, setotpverifier, loading, setloading } =
    context;
  const enteredOTP = useRef("");
  const handleOTP = async () => {
    setloading("true");
    setTimeout(async () => {
      if (enteredOTP.current.value == otp) {
        await verifyOtp(clientEmail)
          .then(() => {
            navigate("/");
            setotpverifier("NO");
          })
          .catch((error) => {
            seterr1(error.message);
          });
      } else {
        seterr1("Wrong otp");
      }
      setloading("false");
    }, 700);
  };

  return (
    <>
      <div className="Container overflow-hidden">
        <div className="Main | even-columns padding-block-900">
          <div className="card | even-columns opposite-columns">
            <h2 className="primary-heading">
              Swift{" "}
              <i className="fa-solid fa-car-side | text-primary-color"></i>{" "}
              Rentals
            </h2>
            <p className="text-centre fs-300 ff-cubic">
              Enter the OTP sent to your email.
            </p>
            <div className="inputs_div | even-columns opposite-columns">
              <input
                type="text"
                placeholder="Enter OTP"
                ref={enteredOTP}
              ></input>

              {err1 && (
                <p className=" text-red width-100">
                  <i className="fa-solid fa-circle-exclamation"> </i> {err1}
                </p>
              )}
            </div>
            {loading === "true" && (
              <Loading loading={loading} padding={1}></Loading>
            )}
            <button className="button" onClick={handleOTP}>
              Enter OTP
            </button>
          </div>
          <div className="img-signin"></div>
        </div>
      </div>
    </>
  );
}
