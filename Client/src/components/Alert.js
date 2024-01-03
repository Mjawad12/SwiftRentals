import React, { useEffect, useRef } from "react";
export default function Alert(props) {
  const Disable = useRef(0);
  useEffect(() => {
    if (props.show.msg !== "") {
      Disable.current.style.display = "flex";
    }
  }, [props.show]);

  const HandleClick = () => {
    props.setshow({ msg: "" });
    Disable.current.style.display = "none";
  };
  return (
    <div className="alert" ref={Disable}>
      <i className="fa-solid fa-bell"></i>

      <p>{props.show.msg}</p>

      <i
        onClick={HandleClick}
        id="close-dailog-nav"
        className="fa-solid fa-xmark cross fs-600"
      ></i>
    </div>
  );
}
