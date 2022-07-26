import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ReactImg from "../../../images/reactjs.jpg";
import EJSImg from "../../../images/ejs.jpg";
import Html from "../../../images/html.jpg";
import Nodejs from "../../../images/nodejs.jpg";
import Mongodb from "../../../images/mongodb.jpg";
import Aws from "../../../images/aws.jpg";
import Github from "../../../images/github.jpg";

export default function Profile() {
  return (
    <div>
      {/* html,css,bootstrap */}
      <div className="card">
        <div className="card-image">
          <img className="activator" src={Html} alt="HTML,CSS,JS,BTS Logo" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            HTML,CSS,JS,BTS
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            "Everything you can imagine is real."
          </p>
        </div>
      </div>
      {/* ReactJS */}
      <div className="card">
        <div className="card-image">
          <img className="activator" src={ReactImg} alt="React Js Logo" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            React Js
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            "The creative adult is the child who survived."
          </p>
        </div>
      </div>
      {/* EJS */}
      <div className="card">
        <div className="card-image">
          <img className="activator" src={EJSImg} alt="EJs Logo" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Express Js
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            "Imagination is more important than knowledge. Knowledge is limited.
            Imagination encircles the world."
          </p>
        </div>
      </div>
      {/* Nodejs*/}
      <div className="card">
        <div className="card-image">
          <img className="activator" src={Nodejs} alt="NodeJs Logo" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Node Js
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            "We cannot solve our problems with the same thinking we used when we
            created them."
          </p>
        </div>
      </div>
      {/* mongoDb*/}
      <div className="card">
        <div className="card-image">
          <img className="activator" src={Mongodb} alt="MongoDb Logo" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Mongo Db
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            "If you can't explain it simply, you don't understand it well
            enough."
          </p>
        </div>
      </div>
      {/* AWS*/}
      <div className="card">
        <div className="card-image">
          <img className="activator" src={Aws} alt="AWS Logo" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            AWS
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            "It's not that I'm so smart, it's just that I stay with problems
            longer."
          </p>
        </div>
      </div>
      {/* gitHub*/}
      <div className="card">
        <div className="card-image">
          <img className="activator" src={Github} alt="Github Logo" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Git&GitHub
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
           
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            Logic will get you from A to B. Imagination will take you
            everywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
