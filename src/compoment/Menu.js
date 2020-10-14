import React from "react";
import { Link } from "react-router-dom";
const menuLink = [
  {
    title: "About",
    path: "/about",
    icon: "icon-user",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: "icon-file-text",
  },
  {
    title: "Works",
    path: "/works",
    icon: "icon-codesandbox",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: "icon-book-open",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "icon-book",
  },
];
function Menu() {
  return (
    <aside className="col-12 col-md-12 col-lg-2">
      <div className="sidebar box sticky-column">
        <ul className="nav">
          {menuLink.map((link, index) => (
            <li key={index} className="nav__item">
              <Link to={link.path} >
                <i className={link.icon} />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Menu;
