import React from "react";
import "./list.css";

export default function List(props) {
  return (
    <div>
      <div className="list">
        <ul>
          <a href="">
            <li style={{ borderTop: "8px solid #64cdfd" }}>
              {props.bootstrap}
              {props.react}
              {props.rest}
              <i class="fas fa-angle-right" style={{ fontSize: "25px" }}></i>
            </li>
          </a>

          <a href="">
            <li>
              {props.json}
              {props.mongodb}
              {props.jquery}
              <i class="fas fa-angle-right" style={{ fontSize: "25px" }}></i>
            </li>
          </a>

          <a href="">
            <li>
              {props.html}
              {props.ajax}
              {props.googleSignIn}
              <i class="fas fa-angle-right" style={{ fontSize: "25px" }}></i>
            </li>
          </a>

          <a href="">
            <li>
              {props.css}
              {props.express}
              {props.redux}
              <i class="fas fa-angle-right" style={{ fontSize: "25px" }}></i>
            </li>
          </a>

          <a href="/">
            <li>
              {props.javascript}
              {props.node}
              {props.problemsolving}
              <i class="fas fa-angle-right" style={{ fontSize: "25px" }}></i>
            </li>
          </a>
          <a href="">
            <li
              style={{
                borderBottomRightRadius: "2px",
                borderBottomLeftRadius: "2px",
              }}
            >
              {props.aws}
              {props.git}
              {props.mongoose}
              <i class="fas fa-angle-right" style={{ fontSize: "25px" }}></i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
