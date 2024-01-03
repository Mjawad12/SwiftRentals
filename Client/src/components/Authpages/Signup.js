import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Context from "../../context/Context";
import Loading from "../Loading";
import { useGoogleLogin } from "@react-oauth/google";
export default function Signup() {
  const [err1, seterr1] = useState("");
  const [err2, seterr2] = useState("");
  const [err3, seterr3] = useState("");
  const context = useContext(Context);
  const navigate = useNavigate();
  const name = useRef("unknown");
  const email = useRef("unknown@gmail.com");
  const password = useRef("xxxxxxxxx");
  const {
    signup,
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
  if (location.pathname === "/signup") {
    tablet && tablet.classList.add("display-none");
  }
  useEffect(() => {
    seterr1("");
    seterr2("");
    seterr3("");
    if (errors) {
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].path === "name") {
          seterr1("Enter a valid Name");
        }
        if (errors[i].path === "email") {
          seterr2("Enter a vaild Email");
        }
        if (errors[i].path === "password") {
          seterr3("Enter a vaild Password");
        }
        if (errors[0] === "An account already exsits with this Email") {
          seterr2(errors[0]);
        }
        if (errors[0] === "An account already exsits with this Name") {
          seterr1(errors[0]);
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
        .then(() => {})
        .catch(() => {});
      setotpverifier("NO");
    }
  }, [otpverifier]);

  const handleSignup = () => {
    const namevalue = name.current.value;
    const emailvalue = email.current.value;
    const passwordvalue = password.current.value;
    signup(namevalue, emailvalue, passwordvalue);
    seterr1(false);
    seterr2(false);
    seterr3(false);
  };
  const handleErrorEraser = () => {
    seterrors("");
  };
  const login = useGoogleLogin({
    onSuccess: async (res) => {
      const data = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`,
        { method: "GET" }
      );
      await data.json().then((result) => {
        seterrors("");
        setloading("true");
        signup(
          result.name,
          result.email,
          process.env.REACT_APP_PASSWORD,
          "YES",
          result.picture
        );
      });
    },
  });

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
            <div className="card-text | even-columns">
              <h3 className="secondary-heading">Sign up</h3>
              <p className="secondary-heading">
                <Link to="/signin" onClick={handleErrorEraser}>
                  Sign in with existing account
                </Link>
              </p>
            </div>
            <div className="inputs_div | even-columns opposite-columns">
              <input
                onKeyDown={() => {
                  seterr1(false);
                }}
                type="text"
                ref={name}
                placeholder="Name"
              ></input>
              {err1 && (
                <p className=" text-red width-100">
                  <i className="fa-solid fa-circle-exclamation"> </i> {err1}
                </p>
              )}

              <input
                onKeyDown={() => {
                  seterr2(false);
                }}
                type="email"
                ref={email}
                placeholder="Email address"
              ></input>
              {err2 && (
                <p className=" text-red width-100">
                  <i className="fa-solid fa-circle-exclamation"> </i> {err2}
                </p>
              )}
              <input
                onKeyDown={() => {
                  seterr3(false);
                }}
                type="password"
                ref={password}
                placeholder="Password"
              ></input>
              {err3 && (
                <p className=" text-red width-100">
                  <i className="fa-solid fa-circle-exclamation"> </i> {err3}
                </p>
              )}
            </div>
            <div className="even-columns opposite-columns gap-1rem">
              <p className="text-underline">or sign in with</p>
              <div className="even-columns gap-2rem fs-600">
                <i onClick={login} className="fa-brands fa-google"></i>
              </div>
            </div>
            {loading === "true" && (
              <Loading loading={loading} padding={1}></Loading>
            )}
            <button className="button" onClick={handleSignup}>
              Sign up
            </button>
          </div>
          <div className="img-signin"></div>
        </div>
      </div>
    </>
  );
}
