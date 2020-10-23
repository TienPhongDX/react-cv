import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const progress = [
  {
    Skill: "Web design",
    percent: 88,
    symbol: "🛫",
  },
  {
    Skill: "Photographer",
    percent: 77,
    symbol: "📷",
  },
  {
    Skill: "Photoshop",
    percent: 88,
    symbol: "🎨",
  },
  {
    Skill: "Premiere Pro",
    percent: 88,
    symbol: "🎬",
  },
];

function skillBar() {
  return (
    <div className="col-12">
      <h2 className="title title--h3">My Skills</h2>
      <div className="box box__border">
        {/* Progress */}
        {progress.map((link, index) => (
          <div key = {index}>
            <div  className="progress-text">
              <span>{link.Skill}</span>
            </div>
            <Progress
              percent={link.percent}
              status="active"
              theme={{
                active: {
                  symbol: `${link.symbol}`,
                  color: "#3086FF",
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default skillBar;
