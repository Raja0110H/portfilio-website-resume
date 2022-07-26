import React from "react";
import Programmer from "./../images/programmer.jpg";

export default function RequestPage() {
  return (
    <div style={{ fontSize: 30, textAlign: "center" }}>
      <p>You're Request was received. </p>
      <p>We will reach out to you within the next 24 hours.</p>

      <div>
        <img src={Programmer} alt="" style={{ height: "450px" }} />
      </div>
    </div>
  );
}
