import React, { useContext } from "react";
import Audi from "./img/Png/Cars/audi-a4.webp";
import Lexus from "./img/Png/Cars/lexus-es.webp";
import Mercedes from "./img/Png/Cars/mercedes-benz-c-class.webp";
import Volvo from "./img/Png/Cars/volvo-s60.webp";
import Vw from "./img/Png/Cars/vw-golf.webp";
import cardata from "./cars.json";
import { useState } from "react";
import Loading from "./Loading";
import Context from "../context/Context";
export default function VehiclesModel() {
  const context = useContext(Context);
  const { loading, setloading } = context;
  const [car] = useState(cardata);
  const [carname, setcarname] = useState("AudiA4");
  const [carimg, setcarimg] = useState(Audi);
  const HandleClick = (e) => {
    setloading("true");
    if (e.target.textContent === "Audi S1 Line") {
      setcarimg(Audi);
      setcarname("AudiA4");
    } else if (e.target.textContent === "Lexus ES") {
      setcarimg(Lexus);
      setcarname("LexusES");
    } else if (e.target.textContent === "Mercedes-Benz C-Class") {
      setcarimg(Mercedes);
      setcarname("Mercedes");
    } else if (e.target.textContent === "Volvo S60") {
      setcarimg(Volvo);
      setcarname("VolvoS60");
    } else if (e.target.textContent === "Vw Golf 6") {
      setcarimg(Vw);
      setcarname("VWgolf");
    }
    setTimeout(() => {
      setloading("false");
    }, 1000);
  };
  const HandleClick2 = () => {
    window.scrollTo(0, 800);
  };
  return (
    <div className="VehiclesModel | even-columns opposite-columns padding-block-900">
      <div className="heroText | even-columns opposite-columns">
        <h1 className="primary-heading text-primary-color">Vehicle Models</h1>
        <h2 className="secondary-heading">Cruise through our selection</h2>
        <p>
          Select from a diverse range of exceptional vehicles, perfect for your
          upcoming escapade or professional journey.
        </p>
      </div>
      <div className="displays | even-columns ">
        <div className="models | even-columns opposite-columns">
          <button className="button" onClick={HandleClick}>
            Audi S1 Line
          </button>
          <button className="button" onClick={HandleClick}>
            Vw Golf 6
          </button>
          <button className="button" onClick={HandleClick}>
            Volvo S60
          </button>
          <button className="button" onClick={HandleClick}>
            Lexus ES
          </button>
          <button className="button" onClick={HandleClick}>
            Mercedes-Benz C-Class
          </button>
        </div>
        <div className="imgDiv">
          {loading === "true" ? (
            <Loading loading={loading} padding={3}></Loading>
          ) : (
            <img src={carimg} alt=""></img>
          )}
        </div>
        <div className="tb | even-columns opposite-columns">
          <div className="grid-table">
            <div className="p-of-grid bg-primary-color">
              <p>{`${car[carname].rentPerCent} /Rent per Cent`}</p>
            </div>
            <span>Mark</span>
            <span className="NoBorder">{car[carname].mark}</span>
            <span>Model</span>
            <span className="NoBorder">{car[carname].Model}</span>
            <span>Year</span>
            <span className="NoBorder">{car[carname].year}</span>
            <span>Doors</span>
            <span className="NoBorder">{car[carname].numberOfDoors}</span>
            <span>AC</span>
            <span className="NoBorder">{car[carname].AC}</span>
            <span>Transmission</span>
            <span className="NoBorder">{car[carname].transmission}</span>
            <span className="NoBorderB">Fuel</span>
            <span className="NoBorderB">{car[carname].fuel}</span>
          </div>
          <button onClick={HandleClick2} className="Reserveb button">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}
