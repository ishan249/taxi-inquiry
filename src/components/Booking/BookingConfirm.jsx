import React from "react";
import "./Bookingform.css";

import { useLocation, Link } from "react-router-dom";
function BookingConfirm() {
  // using uselocation hook to catch the data came from submitting booking form in state named prop
  const location = useLocation();
  const userdata = location.state.prop;

  // rendering user's data into confirmation page
  return (
    <div className="confirmation-div">
      <div className="confirm-heading">
        Booking confirmed
        <lord-icon
          src="https://cdn.lordicon.com/xxdqfhbi.json"
          trigger="loop"
          delay="100"
          style={{ height: "60px", width: "60px" }}
        ></lord-icon>{" "}
      </div>
      <div className="confirm-description">
        Hello user, your booking is confirmed with the following information
      </div>
      <div className="user-data">
        <li>
          <span className="info-heading">Pickup location : </span>{" "}
          {userdata.pickup}
        </li>
        <li>
          <span className="info-heading">Drop location : </span> {userdata.drop}
        </li>
        <li>
          <span className="info-heading">Time : </span> {userdata.time}
        </li>
        <li>
          <span className="info-heading">Date : </span> {userdata.date}
        </li>
        {userdata.requirements !== "" ? (
          <li>
            <span className="info-heading">Instructions : </span>{" "}
            {userdata.requirements}
          </li>
        ) : null}
        <Link to="/">
          <button className="home-btn">Go To Home Page</button>
        </Link>
      </div>
    </div>
  );
}

export default BookingConfirm;
