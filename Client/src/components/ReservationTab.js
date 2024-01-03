import React, { useContext } from "react";
import Audi from "./img/Png/Cars/audi-a4.webp";
import Lexus from "./img/Png/Cars/lexus-es.webp";
import Mercedes from "./img/Png/Cars/mercedes-benz-c-class.webp";
import Volvo from "./img/Png/Cars/volvo-s60.webp";
import Vw from "./img/Png/Cars/vw-golf.webp";
import Context from "../context/Context";
import Loading from "./Loading";
const ReservationTab = React.forwardRef(({}, ref) => {
  const context = useContext(Context);
  const { Reservation_data, cancelReservation, loading } = context;
  const cars = {
    Audi: Audi,
    Lexus: Lexus,
    Volvo: Volvo,
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
          <h2 className="primary-heading">
            {Reservation_data.length > 0 ? "Reservations" : "No Reservations"}
          </h2>
        </div>
        {loading === "true" && (
          <Loading loading={loading} padding={3}></Loading>
        )}

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
