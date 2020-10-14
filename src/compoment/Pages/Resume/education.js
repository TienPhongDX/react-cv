import React from "react";
const timeline = [
  {
    School: "THPT Lê Lợi",
    Period: "2015-2018",
    Description: "Trường cấp 3 thị trấn La Hai, huyện Đồng Xuân, tỉnh Phú Yên.",
  },
  {
    School: "Đại học FPT Đà Nẵng",
    Period: "2018-nay",
    Description: "Trường đại học tại Đà Nẵng",
  },
];
function education() {
  return (
    <div className="col-12">
      <h2 className="title title--h3">
        <img
          className="title-icon"
          src="assets\icons\icon-education.svg"
          alt=""
        />
        Education
      </h2>
      <div className="timeline">
        {timeline.map((link, index) => (
          <article key= {index} className="timeline__item">
            <h5 className="title title--h5 timeline__title"> {link.School}</h5>
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

export default education;
