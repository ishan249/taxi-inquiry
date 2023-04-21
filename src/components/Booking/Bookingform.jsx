import React from "react";
import "./Bookingform.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Bookingform() {
  const navigate = useNavigate();
  // creating react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

// Validating date as user can only do booking of present day

  const validateDate = (value) => {
    const selectedDate = new Date(value);
    console.log(selectedDate);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
      return "Please select a valid date";
    }

    if (selectedDate.getDate() !== today.getDate()) {
      return "You can only book for the current day";
    }
    return true;
  };

  // After filling form handling onSubmit event and sending user's data to confirmation page using state
  const onSubmit = (data) => {
    navigate("/bookingconfirmed", { state: { prop:data } });
  };
  return (
    <div className="form-main-div">
      <div className="form-heading">Booking</div>
      <div className="form-div">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-subdiv">
            <div style={{ marginRight: "30px" }} className="input-div">
              <label htmlFor="pickup">Pickup Location:</label>
              <br />
              <input
                type="text"
                id="pickup"
                className="input-field"
                {...register("pickup", { required: true })}
                placeholder="3rd street, Penslyvania"
              />
              <br />
              {errors.pickup && <span>This field is required</span>}
            </div>

            <div className="input-div">
              <label htmlFor="drop">Drop Location:</label>
              <br />

              <input
                type="text"
                id="drop"
                {...register("drop", { required: true })}
                placeholder="24, scranton"
                className="input-field"
              />
              <br />

              {errors.drop && <span>This field is required</span>}
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="date">Date:</label>
            <br />

            <input
              type="date"
              id="date"
              {...register("date", { validate: validateDate })}
              className="input-field"
            />

            {errors.date?.type === "validate" && (
              <span>{errors.date.message}</span>
            )}
          </div>

          <div className="input-div">
            <label htmlFor="time">Time:</label>
            <br />

            <input
              type="time"
              id="time"
              {...register("time", { required: true })}
              className="input-field"
            />
            {errors.time && <span>This field is required</span>}
          </div>

          <div className="input-div">
            <label htmlFor="requirements">Additional Requirements:</label>
            <br />

            <textarea
              className="input-field"
              id="requirements"
              {...register("requirements")}
            />
          </div>

          <button type="submit" className="book-btn">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bookingform;
