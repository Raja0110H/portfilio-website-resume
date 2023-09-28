import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ReactImg from "../../../images/reactjs.jpg";
import EJSImg from "../../../images/ejs.jpg";
import HtmlImg from "../../../images/html.jpg";
import NodejsImg from "../../../images/nodejs.jpg";
import MongodbImg from "../../../images/mongodb.jpg";
import AwsImg from "../../../images/aws.jpg";
import GitImg from "../../../images/git.png";
import FlutterImg from "../../../images/flutter.png"
import RubyOnRailsImg from "../../../images/rubyOnRails.png"


import './Profile.css'
import Card from "../../navbar/Card";

export default function Profile() {
  return (
    <div>
      {/* html,css,bootstrap */}
      <Card title={"HTML, CSS, JS, BTS"}  quote={"Everything you can imagine is real."} image={HtmlImg}/>
      <Card title={"React Js"} quote={"The creative adult is the child who survived."} image={ReactImg}/>
      <Card title={"Ruby On Rails"} quote={"Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime "} image={RubyOnRailsImg}/>
      <Card title={"Express Js"}  quote={"Imagination is more important than knowledge. Knowledge is limited.Imagination encircles the world"} image={EJSImg}/>
      <Card title={"Node Js"}  quote={"We cannot solve our problems with the same thinking we used when we created them."} image={NodejsImg}/>
      <Card title={" Mongo Db"}  quote={"If you can't explain it simply, you don't understand it well enough."} image={MongodbImg}/>
      <Card title={"AWS"}  quote={"It's not that I'm so smart, it's just that I stay with problems longer."} image={AwsImg}/>
      <Card title={"Git"} quote={" Logic will get you from A to B. Imagination will take you  everywhere."} image={GitImg}/>
      <Card title={"Flutter"} quote={"Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime "} image={FlutterImg}/>

    
    </div>
  );
}
