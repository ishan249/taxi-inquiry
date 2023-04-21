import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Bookingform from "./components/Booking/Bookingform";
import BookingConfirm from "./components/Booking/BookingConfirm";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/booking" element={<Bookingform />} />
          <Route path="/bookingconfirmed" element={<BookingConfirm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
