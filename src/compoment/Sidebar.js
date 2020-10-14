import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="btnSlideNav slideOpen" />
      <div className="btnSlideNav slideClose" />
      <div className="slideNav">
        <ul className="list-unstyled">
          <li className="slideNav__item rtl-mode">
            <h4 className="title title--5">More pages</h4>{" "}
            <a href="rtl\about.html">RTL</a>
          </li>
          <li className="slideNav__item">
            <a href="one-page.html">One page</a>
          </li>
          <li className="slideNav__item">
            <a href="background-2.html">Background triangles</a>
          </li>
          <li className="slideNav__item">
            <a href="works_v2.html">Works v2</a>
          </li>
        </ul>
        <a href="dark\about.html" className="btn btn--dark">
          Dark Template
        </a>
      </div>
      <div className="overlay-slideNav" />
    </div>
  );
}

export default Sidebar;
