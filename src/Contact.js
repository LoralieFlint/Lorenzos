import React from "react";
import "./App.css";
import ".../../font-awesome/css/font-awesome.min.css";
import Fade from "react-reveal/Fade";
import Application from "../src/assets/lorenzos-job-application.pdf";

function Contact() {
  return (
    <div className="contactpage">
      <Fade bottom>
        <section className="map">
          <iframe
            className="googlemap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.2498552044663!2d-121.9680742851705!3d38.52800827962936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8084df8df5a9edb1%3A0xb9d61afd256275bb!2sLorenzo%20Market!5e0!3m2!1sen!2sus!4v1615324447543!5m2!1sen!2sus"
            loading="lazy"
            title="lorenzos location on google maps"
          ></iframe>
        </section>
      </Fade>

      <section className="contact">
        <section className="holders">
          <h1 className="contactHeading">We want your feedback</h1>
          <form>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" name="first-name" className="name"></input>
            <label htmlFor="email">Email:</label>
            <input type="text" className="emailInput"></input>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="number" className="phoneNumber"></input>
            <label htmlFor="comments">Comments:</label>
            <input type="text" className="comments"></input>
            <button className="formButton">Submit</button>
          </form>
        </section>
        <section className="holders"></section>
        <section className="address">
          <h4 className="socialMedia">Contact Us</h4>
          <p className="ptitles">
            <b className="titles">Address:</b> 121 E Grant Ave, Winters, CA
            95694{" "}
          </p>
          <p className="ptitles">
            <b className="titles">Hours:</b> 7 AM - 10 PM daily
          </p>
          <p className="ptitles">
            <b className="titles">Phone:</b> (530) 795-3214
          </p>
          <p className="ptitles">
            <b className="titles">Fax:</b> (530) 795-3214
          </p>
          <div className="application">
            <a href={Application} rel="noopener noreferrer" target="_blank">
              Job Application
            </a>
          </div>
          <section className="links">
            <a
              target="_blank_"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@gmail.com&su=subject_here&body=body_here"
            >
              <i
                className="fa fa-envelope-o fa-3x email"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://www.facebook.com/LorenzosMarket/" target="_blank_">
              <i
                className="fa fa-facebook-official fa-3x facebook"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://www.instagram.com/tnc_market530/" target="_blank_">
              <i
                className="fa fa-instagram fa-3x instagram"
                aria-hidden="true"
              ></i>
            </a>
          </section>
        </section>
      </section>
    </div>
  );
}
export default Contact;
