import React from "react";
import { useContext, useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Context from "../../context/Context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading";
export default function Singin() {
  const [err2, seterr2] = useState("");
  const [err3, seterr3] = useState("");
  const context = useContext(Context);
  const navigate = useNavigate();
  const email = useRef("unknown@gmail.com");
  const password = useRef("xxxxxxxxx");
  const form = useRef("");
  const {
    signin,
    errors,
    seterrors,
    otp,
    otpverifier,
    setotpverifier,
    loading,
    setloading,
  } = context;
  const location = useLocation();
  const tablet = document.querySelector(".tablet-top");
  if (location.pathname === "/signin") {
    tablet && tablet.classList.add("display-none");
  } else {
    tablet && tablet.classList.remove("display-none");
  }

  useEffect(() => {
    seterr2("");
    seterr3("");
    if (errors) {
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].path === "email") {
          seterr2("Enter a vaild Email");
        }
        if (errors[i].path === "password") {
          seterr3("Enter a vaild Password");
        }
        if (errors[0] === "Enter a valid Email") {
          seterr2("Enter a vaild Email");
        }
        if (errors[0] === "Enter a valid password") {
          seterr3("Enter a vaild Password");
        }
      }
    }
    if (errors === undefined) {
      navigate("/");
      seterrors("");
    }
  }, [errors]);

  useEffect(() => {
    if (otpverifier === "YES") {
      navigate("/verifyotp");
      const templateParams = {
        to_name: email.current.value,
        user_email: email.current.value,
        message: `Your otp code is ${otp}`,
        from_name: "SwiftREntals",
      };
      emailjs
        .send(
          "service_op5mypk",
          "template_pslst65",
          templateParams,
          "fsNlf011wAWaX2zIF"
        )
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
      setotpverifier("NO");
    }
  }, [otpverifier]);

  const handleSignin = async () => {
    const emailvalue = email.current.value;
    const passwordvalue = password.current.value;
    signin(emailvalue, passwordvalue);
    if (otpverifier === "YES") {
    }
    seterr2("");
    seterr3("");
  };
  const handleErrorEraser = () => {
    seterrors("");
  };
  return (
    <div className="Container overflow-hidden">
      <div className="Main | even-columns padding-block-900">
        <div className="card | even-columns opposite-columns">
          <h2 className="primary-heading">
            Swift <i className="fa-solid fa-car-side | text-primary-color"></i>{" "}
            Rentals
          </h2>
          <div className="card-text | even-columns">
            <h3 className="secondary-heading">Sign in</h3>
            <p className="secondary-heading">
              <Link to="/signup" onClick={handleErrorEraser}>
                Create a new account
              </Link>
            </p>
          </div>
          <div className="inputs_div | even-columns opposite-columns">
            <input ref={email} type="email" placeholder="Email address"></input>
            {err2 && (
              <p className="text-red width-100">
                <i className="fa-solid fa-circle-exclamation"> </i> {err2}
              </p>
            )}
            <input
              ref={password}
              type="password"
              placeholder="Password"
            ></input>
            {err3 && (
              <p className=" text-red width-100">
                <i className="fa-solid fa-circle-exclamation"> </i> {err3}
              </p>
            )}

            <p>
              Forgot password?{" "}
              <Link className="text-primary-color" to="">
                Click Here
              </Link>{" "}
            </p>
          </div>
          <div className="even-columns opposite-columns gap-1rem">
            <p className="text-underline">or sign in with</p>
            <div className="even-columns gap-2rem fs-600">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-google"></i>
            </div>
          </div>
          {loading === "true" && (
            <Loading loading={loading} padding={1}></Loading>
          )}
          <button className="button" onClick={handleSignin}>
            Sign in
          </button>
        </div>
        <div className="img-signin"></div>
      </div>
    </div>
  );
}
