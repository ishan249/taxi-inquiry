import React from "react";

function Footer() {
  return (
    <footer
      style={{
        color: "white",
        backgroundColor: "#0a2351",
        marginTop: "20px",
        padding: "20px",
        fontFamily: "Poppins",
      }}
      className="footer"
    >
      <div className="container flex justify-around flex-wrap">
        <div>
          <div>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              risus ac eros mollis efficitur quis eget odio. Nunc tempus
              ultrices quam eu mattis.
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              Address: 123 Main St, Anytown USA
              <br />
              Phone: 555-555-5555
              <br />
              Email: info@taxi.com
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p>
                &copy; {new Date().getFullYear()} Taxi Service. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
