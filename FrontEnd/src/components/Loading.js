import React, { useEffect, useRef } from "react";
import "../App.css";
export default function Loading(props) {
  const { loading, padding } = props;
  const loadingRef = useRef("");

  useEffect(() => {
    if (loading === "true") {
      loadingRef.current.classList.add("showloading");
    } else if (loading === "false") {
      loadingRef.current.classList.remove("showloading");
    }
  }, [loading]);

  return (
    <>
      <div ref={loadingRef} className="loadingMain | even-columns">
        <div
          className="loading-component"
          style={{ padding: `${padding}rem` }}
        ></div>
      </div>
    </>
  );
}
