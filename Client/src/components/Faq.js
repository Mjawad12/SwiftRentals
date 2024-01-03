import React from "react";
export default function Faq() {
  const HandleClick = (e) => {
    e.preventDefault();
    e.target.childNodes[0].classList.toggle("coloured");
    e.target.childNodes[0].lastChild.classList.toggle("rotate");
    e.target.childNodes[1].style.setProperty(
      "--height",
      e.target.childNodes[1].scrollHeight + "px"
    );
    e.target.childNodes[1].classList.toggle("open");
  };

  return (
    <section className="Faq | even-columns opposite-columns margin-top-600 margin-bottom-600 text-centre padding-block-600 ">
      <h3 className="primary-heading text-primary-color">FAQ</h3>
      <p className="secondary-heading fs-500">Frequently Asked questions</p>
      <p className="text-p fs-400">
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </p>
      <div className="bg-img"></div>
      <div className="tablet bg-img"></div>
      <div className="Questions | even-columns opposite-columns">
        <div className="Question" onClick={HandleClick}>
          <div className="Qusetiondiv">
            <p className="secondary-heading">
              1. What is special about comparing rental car deals?
            </p>{" "}
            <i className={`fa-solid fa-caret-down`}></i>
          </div>
          <div className="Answer">
            <p className="ff-cubic fs-300">
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>{" "}
        </div>
        <div className="Question" onClick={HandleClick}>
          <div className="Qusetiondiv">
            <p className="secondary-heading">
              2. How do I find the car rental deals?
            </p>{" "}
            <i className={`fa-solid fa-caret-down`}></i>
          </div>
          <div className="Answer">
            <p className="ff-cubic fs-300">
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </p>
          </div>
        </div>
        <div className="Question" onClick={HandleClick}>
          <div className="Qusetiondiv">
            <p className="secondary-heading">
              3. How do I find such low rental car prices?
            </p>
            <i className={`fa-solid fa-caret-down`}></i>
          </div>
          <div className="Answer">
            <p className="ff-cubic fs-300">
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
