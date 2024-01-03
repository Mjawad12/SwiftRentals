import React from "react";

export default function Top(props) {
  return (
    <div className="Top | even-columns">
      <h3 className="primary-heading text-primary-color">Home/{props.page}</h3>
    </div>
  );
}
