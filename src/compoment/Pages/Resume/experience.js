import React from "react";

const timeline = [
  {
    Job: "Creative Director",
    Period: "2015-2018",
    Description:
      "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias",
  },
  {
    Job: "Web Designer",
    Period: "2018-nay",
    Description:
      "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias",
  },
];

function experience() {
  return (
    <div className="col-12">
      <h2 className="title title--h3">
        <img
          className="title-icon"
          src="assets\icons\icon-experience.svg"
          alt=""
        />
        Experience
      </h2>
      <div className="timeline">
        {/* Item */}
        {timeline.map((link, index) => (
          <article key = {index} className="timeline__item">
            <h5 className="title title--h5 timeline__title">
              {link.Job}
            </h5>
            <span className="timeline__period">{link.Period}</span>
            <p className="timeline__description">
              {link.Description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default experience;
