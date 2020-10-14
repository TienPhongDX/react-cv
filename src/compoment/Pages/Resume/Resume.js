import React from "react";
import Education from "./education";
import Experience from "./experience";
import SkillBar from "./skillBar";

function Resume() {
  return (
    <div className="box box-content">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">Resume</h1>
      </div>
      {/* Experience */}
      <div className="row">
        <Education />
        <Experience />
      </div>
      {/* Skills */}
      <div className="row">
        <SkillBar />
      </div>
    </div>
  );
}

export default Resume;
