import React from "react";
import "./Navigation.css";
import { Helmet } from "react-helmet";

function Navigation() {
  return (
    <div className="Navigation">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Akshar"
          rel="stylesheet"
        />
      </Helmet>
      <div className="NavigationInner">
        <div className="Logo">MIN'DS A MESS BY ANNE</div>
        <div className="Menu">
          <a className="TheBooks">THE BOOKS</a>
          <a className="About">ABOUT</a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
