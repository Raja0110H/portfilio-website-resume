import React from "react";
import { useRef, useState } from "react";
import "./contact.css";
import Navbar from "../../navbar/Navbar";

function Contact() {
  const [input, setInput] = useState("");

  function validation(event) {
    setInput(event.target.value);
    console.log(input);
  }

  return (
    <div>
      <div className="main__container">
        <div className="sub__container__one">
          <h1>Hi There !!!!</h1>
          <p>Thank you for the opportunity</p>
          <p>I look forward to working with you and your team.</p>
        </div>

        <div className="sub__container__two">
          <h3>Contact me</h3>
          <form action="/requestPage">
            <label htmlFor="name">Name*</label>
            <input
              required
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              onChange={validation}
            />
            <label htmlFor="company">Company*</label>
            <input
              required
              type="text"
              placeholder="Company"
              id="company"
              name="company"
              onChange={validation}
            />
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              placeholder="email"
              id="email"
              name="email"
              onChange={validation}
            />
            <button className="contact__btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
