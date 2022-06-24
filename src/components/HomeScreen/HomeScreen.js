import React from "react";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import RowDash from "../RowSystem/RowDash";
import "./homescreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <RowDash />
    </div>
  );
};

export default HomeScreen;
