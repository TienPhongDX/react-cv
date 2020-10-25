import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import BGImg from "./compoment/BGImg";
import Header from "./compoment/Header";
import Menu from "./compoment/Menu";

import About from "./compoment/Pages/About/About";
import Resume from "./compoment/Pages/Resume/Resume";
import Blog from "./compoment/Pages/Blog/Blog";
import Contact from "./compoment/Pages/Contact/Contact";
function Main() {
  return (
    <Router basename="/about" >
      <main className="main">
        <BGImg />
        <div className="container gutter-top">
          <Header />
          <div className="row sticky-parent">
            <Menu />
            <div className="col-12 col-md-12 col-lg-10">
              {/* Content */}
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/works" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/" render={() => <Redirect to="/about" />} />
                <Route component={() => 404} />
              </Switch>
              <footer className="footer">
                © Nguyen Tien Phong with 
                <span role="img" aria-label="">
                   🐥
                </span>
              </footer>
            </div>
          </div>
        </div>
        <div className="back-to-top" />
      </main>
    </Router>
  );
}

export default Main;
