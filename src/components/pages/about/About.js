import React from "react";

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            Full Stack Web Developer with a passion for developing scalable web
            applications. I am looking to join forces with your company to
            continue to grow my skill set while contributing to the positive
            outcome of making people "richer, smarter, and happier."
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Location: Hampton,Va</strong>
              </p>
              <p>
                <strong>Email:</strong> rajahamilton0110@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 786 916 4933
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>

              <div></div>
              <a
                href="https://www.linkedin.com/in/raja-hamilton-3b749a214"
                style={{ color: "blue" }}
              >
                <p>LinkedIn URL HERE</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
