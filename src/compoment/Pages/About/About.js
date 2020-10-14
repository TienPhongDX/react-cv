import React from "react";
import AboutMe from "./aboutMe";
import MySkill from './skill';
import Client from './client'
function About() {
  return (
    <div className="box box-content">
      <AboutMe/>
      <MySkill/>
      <Client/>
    </div>
  );
}

export default About;
