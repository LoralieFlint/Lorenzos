import React from "react";
import "./App.css";
import Nav from "./Nav";
import ".../../font-awesome/css/font-awesome.min.css";

function Contact() {
  return (
    <section className="">
      <Nav />
      <section className="holders">
        <h1 className="contactHeading">We want your feedback</h1>
        <form>
          <label for="first name">
            <b>First Name:</b>
            <input type="text" name="first name" className="name"></input>
          </label>
          <label>
            <b>Email:</b>
            <input type="text" className="emailInput"></input>
          </label>
          <label>
            <b>Phone Number:</b>
            <input type="number" className="phoneNumber"></input>
          </label>
          <label>
            <b>Comments:</b>
            <input type="text" className="comments"></input>
          </label>
          <label>
            <button className="formButton">Submit</button>
          </label>
        </form>
      </section>
      <section className="holders">
        <h3 className="socialMedia">Social Media</h3>
        <section className="">
          <a target="_blank_" href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@gmail.com&su=subject_here&body=body_here">
            <i class="fa fa-envelope-o fa-3x email" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/LorenzosMarket/" target="_blank_">
            <i
              class="fa fa-facebook-official fa-3x facebook"
              aria-hidden="true"
            ></i>
          </a>
          <a href="https://www.instagram.com/tnc_market530/" target="_blank_">
            <i class="fa fa-instagram fa-3x instagram" aria-hidden="true"></i>
          </a>
        </section>
      </section>
      <section className="holders">
        <h4 className="socialMedia">Contact Us</h4>
        <p className="ptitles">
          <b className="titles">Address:</b> 121 E Grant Ave, Winters, CA 95694{" "}
        </p>
        <p className="ptitles">
          <b className="titles">Hours:</b> 7 AM - 10 PM daily
        </p>
        <p className="ptitles">
          <b className="titles">Phone:</b> (530) 795-3214
        </p>
      </section>
    </section>
  );
}
export default Contact;
