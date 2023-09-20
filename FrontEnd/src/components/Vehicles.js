import React, { useEffect, useState } from "react";
import Car from "./cars copy.json";
import Audi from "./img/Png/Cars/Audi A4.png";
import Lexus from "./img/Png/Cars/Lexus ES.png";
import Mercedes from "./img/Png/Cars/Mercedes-Benz C-Class.png";
import Volvo from "./img/Png/Cars/Volvo S60.png";
import Vw from "./img/Png/Cars/Vw golf 6.png";
export default function Vehicles() {
  const [cars, setcars] = useState();
  useEffect(() => {
    setcars(Car.cars);
  }, []);
  const Carname = {
    AudiA4: Audi,
    VolvoS60: Volvo,
    VWgolf: Vw,
    LexusES: Lexus,
    Mercedes: Mercedes,
  };
  return (
    <>
      <div className="Container">
        <div className="VehiclesModel | even-columns opposite-columns padding-block-600">
          <h1 className="primary-heading">Vehicle Models</h1>
          <h2 className="secondary-heading">Cruise through our selection</h2>
          <p className="text">
            Select from a diverse range of exceptional vehicles, perfect for
            your upcoming escapade or professional journey.
          </p>
        </div>
        <div className="Vehicles | even-columns ">
          {cars !== undefined
            ? cars.map((car, key) => {
                return (
                  <div
                    key={key}
                    className="vehicle | even-columns opposite-columns"
                  >
                    <div className="div_upper | even-columns opposite-columns">
                      <h4>{car.name}</h4>
                      <p className="Quote secondary-heading">{car.quote}</p>
                      <div className="img-wrapper">
                        {" "}
                        <img
                          className="image"
                          src={Carname[car.name]}
                          alt=""
                        ></img>
                      </div>
                    </div>

                    <div className="Details | even-columns opposite-columns ">
                      <p>
                        <i className="fa-solid fa-car "></i>
                        {" -" + " "}
                        {car.name}
                      </p>
                      <p>
                        <i className="fa-solid fa-gear "></i>
                        {" -" + " "}
                        {car.transmission}
                      </p>

                      <p>
                        <i className="fa-solid fa-fan "></i> {`AC: ${car.AC}`}
                      </p>
                      <div className="rent-wraaper">
                        <p>
                          <i className="fa-solid fa-hand-holding-dollar "></i>{" "}
                          {`Rent : ${car.rentPerCent}`}
                        </p>
                      </div>
                    </div>
                    <div className="style"></div>
                    <div className="bt">
                      <hr />
                      <button className="button">Book Ride</button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}