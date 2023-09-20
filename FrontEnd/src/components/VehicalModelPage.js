import React from "react";
import VehiclesModel from "./VehiclesModel";
import Save from "./Save";
import Faq from "./Faq";
import Footer from "./Footer";
import Top from "./Top";
import Vehicles from "./Vehicles";
export default function VehicalModelPage() {
  return (
    <>
      <Top page="Vehicle Models"></Top>
      <Vehicles></Vehicles>
      <Save></Save>
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
