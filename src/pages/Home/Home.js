import React from "react";
import MedCat from "../../Components/MedCat";
import "../Home/Home.css";
import Form from "react-bootstrap/Form";

const Home = () => {
  return (
    <div className="home-container  ">
      {/* FOR SOME PARAGRAPHS */}
      <div className="text">
        <h1> Medicines Website</h1>
      </div>
      {/* For LAYOUT */}
      <div className="landing">
        <div className="intro-text">
          <h1>Hello There</h1>
          <p>
            This is our Website for Medicines, You Can buy your Medicines from
            here
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      {/* For LAYOUT */}
      {/* FOR SEARCH */}

      <h1 style={{ fontWeight: "bold" }}>Medicine Categories :-</h1>
      <Form>
        <Form.Group className="frm-group">
          <Form.Control type="text" placeholder="What are you looking for?" />
          <button className="Search">Search</button>
        </Form.Group>
      </Form>
      {/* MEDICINES CATEGORIES */}
      <div className="row">
        <div className="col-xs-6 col-sm-3 med-cat-container">
          <MedCat />
        </div>
        <div className="col-xs-6 col-sm-3 med-cat-container">
          <MedCat />
        </div>
        <div className="col-xs-6 col-sm-3 med-cat-container">
          <MedCat />
        </div>
        <div className="col-xs-6 col-sm-3 med-cat-container">
          <MedCat />
        </div>
      </div>
      {/* CONTACT */}
      <div className="contact">
        <div className="main-heading">
          <h2>Contact Us</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
        <div className="content">
          <form action="">
            <input
              className="main-input"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="main-input"
              type="email"
              name="mail"
              placeholder="Your Email"
            />
            <textarea
              className="main-input"
              name="message"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
          <div className="info">
            <h4>Get In Touch</h4>
            <span className="phone">+00 123.456.789</span>
            <span className="phone">+00 123.456.789</span>
            <h4>Where We Are</h4>
            <address>
              Awesome Address 17
              <br />
              New York, NYC
              <br />
              123-4567-890
              <br />
              USA
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
