import React from "react";
import Navbar from "../../navbar/Navbar";

export default function Experiences() {
  return (
    <div>
  
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2019</strong> - Nov
                <strong>2021</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>WEB DEVELOPER</strong>
                </h6>
                <strong>Periodic</strong>
                <p>
                  <ul>
                    <li>Built 30+ custom interfaces using the Periodic API</li>
                    <li>
                      Collaborated with 2 different development teams on 4 new
                      project designs and feature improvements
                    </li>
                    <li>
                      Diagnosed and fixed report functionality issues by
                      troubleshooting
                    </li>
                    <li>
                      Suggested 20+ improvements to product design and
                      functionality as informed by user-experience reporting
                    </li>
                    <li>
                      Collaborated with 4 client service teams to understand and
                      solve bottlenecks and proposed feature expansions
                    </li>
                  </ul>
                </p>
              </blockquote>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
