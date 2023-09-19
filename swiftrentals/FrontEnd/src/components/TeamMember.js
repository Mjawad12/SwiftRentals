import React from "react";

export default function TeamMember(props) {
  return (
    <div className="member | even-columns opposite-columns">
      <div className="img_member"></div>
      <p className="secondary-heading fs-350">{props.name}</p>
      <p className="secondary-heading fs-300 fw-900">{props.role}</p>
      <div className="ps">
        <ul className="even-columns">
          <li>
            <a target="_blank" rel="noreferrer" href="https://facebook.com/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
