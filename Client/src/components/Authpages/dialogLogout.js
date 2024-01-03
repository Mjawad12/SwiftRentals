import React, { useContext } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";

const DialogLogout = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { userData, setauthtoken } = context;
  const HandleLogout = () => {
    setauthtoken("");
    localStorage.clear();
    navigate("/");
    ref.current.classList && ref.current.classList.add("display-block");
  };

  return (
    <>
      <div
        ref={ref}
        id="dialogLogout"
        className="dialogLogout | even-columns opposite-columns iner "
      >
        <div className="dialog-text | even-columns opposite-columns iner">
          <h3 className="iner">{userData.name}</h3>
          <p className="iner">Email : {userData.email}</p>
        </div>
        <div className="even-columns opposite-columns gap-1rem iner">
          <button className="button" onClick={props.handleReservationComp}>
            Your Reservations
          </button>
          <button className="button" onClick={HandleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
});

export default DialogLogout;
