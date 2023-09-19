import React from "react";

export default function Footer() {
  return (
    <div className="footer | even-columns bg-neutral-400 padding-block-900 ">
      <div className="carRental | even-columns opposite-columns child">
        <h5>Car Rental</h5>
        <p className="text ff-cubic text-white">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <p className="phone">
          <i className="fa-solid fa-phone"></i>
          {"  "}
          <a href="tel:+4733378901">XXX-XXX-XXX</a>
        </p>
        <p className="mail">
          <i className="fa-solid fa-envelope"></i>
          {"  "}
          <a href="mailto:swiftrentalsofficial@gmail.com">
            swiftrentalsofficial@gmail.com
          </a>
        </p>
      </div>
      <div className="Company | even-columns opposite-columns">
        <h5>Company</h5>
        <ul>
          <li>New York</li>
          <li>Careers</li>
          <li>Mobile</li>
          <li>Blog</li>
          <li>How we Work</li>
        </ul>
      </div>
      <div className="WorkingHours | even-columns opposite-columns">
        <h5>WORKING HOURS</h5>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="Subscription | even-columns opposite-columns">
        <h5>SUBSCRIPTION</h5>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input type="email" placeholder="Enter Email Address"></input>
        <button className="button">Submit</button>
      </div>
    </div>
  );
}
