import React, { useContext, useRef } from "react";
import AudiA4 from "./img/Png/Cars/Audi A4.png";
import LexusES from "./img/Png/Cars/Lexus ES.png";
import VolvoS60 from "./img/Png/Cars/Volvo S60.png";
import Mercedes from "./img/Png/Cars/Mercedes-Benz C-Class.png";
import Vw from "./img/Png/Cars/Vw golf 6.png";
import Context from "../context/Context";

const ReservationTab = React.forwardRef((props, ref) => {
  const context = useContext(Context);
  const { Reservation_data, cancelReservation } = context;
  const cars = {
    AudiA4: AudiA4,
    LexusES: LexusES,
    VolvoS60: VolvoS60,
    Mercedes: Mercedes,
    Vw: Vw,
  };
  const handleCloseReserv = () => {
    if (ref.current.classList.contains("ReservationAnimation")) {
      ref.current.classList.remove("ReservationAnimation");
    } else {
      ref.current.classList.remove("ReservationAnimationCOMP");
    }
    setTimeout(() => {
      ref.current.classList.remove("display-flex");
      document.body.classList.remove("no-scroll");
    }, 1000);
  };

  const HandleCancle = (id) => {
    cancelReservation(id);
    let a = document.getElementById(id);
    a && a.classList.add("CancelAnimation");
    setTimeout(() => {
      a && a.classList.add("display-none");
    }, 1000);
  };

  return (
    <>
      <div
        ref={ref}
        className="ReservationTab  | even-columns opposite-columns"
      >
        <div className="Top-bar-reservation | even-columns">
          <i
            className="fa-solid fa-xmark | cross-btn-reservation "
            onClick={handleCloseReserv}
          ></i>
          <h2 className="primary-heading">Reservations</h2>
        </div>

        {Reservation_data &&
          Reservation_data.map((resrv, id, key) => {
            const dd = resrv.Dropofdate.slice(0, 10);
            const dp = resrv.Pickupdate.slice(0, 10);
            return (
              <div
                id={resrv._id}
                className="Reservation  | even-columns opposite-columns"
              >
                <div key={id} className="Reserv-wrapper | even-columns">
                  <div className="ReservationText | even-columns opposite-columns">
                    <h1 className="secondary-heading fs-800 text-color-primary">
                      {resrv.carname}
                    </h1>
                    <p className="fs-300">
                      <span>Pick-up Date</span> : {dd}
                    </p>
                    <p className="fs-300">
                      <span>Drop-of Date</span> : {dp}
                    </p>
                  </div>
                  <img
                    src={cars[resrv.carname]}
                    className="Reservation-image"
                  ></img>
                </div>
                <button
                  key={key}
                  className="button"
                  onClick={() => {
                    HandleCancle(resrv._id);
                  }}
                >
                  Cancel Reservation
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
});

export default ReservationTab;
