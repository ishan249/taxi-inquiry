import React from "react";
import "./Homepage.css";
import {
  FaTaxi,
  FaMapMarkedAlt,
  FaCreditCard,
  FaLuggageCart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import homeImage from "../../assets/undraw_order_ride_re_372k.svg";
import Footer from "../Footer/Footer";
function Homepage() {
  const navigate = useNavigate();
  // handle submit function navigating to booking page on click event
  const handleSubmit = () => {
    navigate("/booking");
  };
  return (
    <>
      <div className="main-page">
        <div className="homepage">
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.8 }}
            className="content-div homepage-box"
          >
            <div className="headline-heading">Book Your Next Ride</div>
            <div className="headline-description">
              Get a ride in minutes with the leading taxi-hailing service in the
              city. If you are finding a website where you can book taxi rapidly
              without any hesitation and you don't have to worry about your
              travelling then we have got you figured out, Travel hassle-free.
            </div>
            <button onClick={handleSubmit} className="booking-btn">
              Book Now
            </button>
          </motion.div>
          <div className="image-div homepage-box">
            <img src={homeImage} className="svgImg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.8 }}
          className="feature-heading"
        >
          Safe. Reliable. Less Time Consuming
        </motion.div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "28px",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="feature-box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaTaxi size={50} />
            <p className="feature-tagline">24/7 Taxi Service</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="feature-box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaMapMarkedAlt size={50} />
            <p className="feature-tagline">GPS Tracking System</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="feature-box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaCreditCard size={50} />
            <p className="feature-tagline">Multiple Payment Options</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="feature-box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaLuggageCart size={50} />
            <p className="feature-tagline">Luggage Assistance</p>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Homepage;
