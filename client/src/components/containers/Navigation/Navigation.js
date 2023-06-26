import React from "react";
import "./Navigation.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("Click!");
    navigate("/");
  };
  return (
    <div className="Navigation">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Akshar"
          rel="stylesheet"
        />
      </Helmet>
      <div className="NavigationInner">
        <div className="Logo" onClick={onClick}>
          MIN'DS A MESS BY ANNE
        </div>
        <div className="Menu">
          <a className="TheBooks">THE BOOKS</a>
          <a className="About">ABOUT</a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
