import Navbar from "../../navbar/Navbar";
import React from "react";

export default function Educations() {
  return (
    <div>
     
      <div class="card">
        <div class="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <table class="striped">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Date</th>
                <th>Institution</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Computer Science</td>
                <td>Jan 2018</td>
                <td>Southern Virginia University</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
