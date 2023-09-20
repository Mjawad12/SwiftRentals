import React from "react";
import Top from "./Top";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Footer from "./Footer";

export default function TestimonialPage() {
  return (
    <>
      <Top page="Testimonials"></Top>
      <div className="Container">
        <Testimonials></Testimonials>
      </div>
      <div className="position-relative overflow-hidden">
        <div className="Container overflow-hidden">
          <Faq></Faq>
        </div>
      </div>
      <div className="Container-footer">
        <Footer></Footer>
      </div>
    </>
  );
}
