import "../Styles/App.css";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import VehiclesModel from "../components/VehiclesModel";
import Save from "../components/Save";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="Container ">
        <Hero></Hero>
        <BookCar></BookCar>
        <VehiclesModel></VehiclesModel>
      </div>
      <Save></Save>
      <div className="position-relative overflow-hidden">
        <div className="Container overflow-hidden">
          <Testimonials></Testimonials>
          <Faq></Faq>
        </div>
      </div>
      <div className="Container-footer">
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
