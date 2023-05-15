import React from "react";
import "./home.css";
import MainBackImg from "./img/ajays.png";
import Topnav from "./Topnav";

export const Home = () => {
  return (
    <div className="home-main">
      {/* <Topnazv></Topnazv> */}
      <div className="container">
        <div className="about">
          <h1 className="htag">Hey! Ajay Sharma......</h1>
          <h3 className="phtag">An "About Me" page is one of the most important parts of your portfolio, website, or blog. This page is where prospective employers, potential clients, website users, and other professional and personal connections go to learn about who you are and what you do.1 It's an ideal resource for promoting your professional brand.</h3>
          <h2 className="hthak" >Thank you.......</h2>
        </div>
      </div>
      <div className="container1">
        <img src={MainBackImg} className="pic-my"></img>
      </div>
      {/* <img src="{MainBackImg}></img> */}
    </div>
  ); 
};
export default Home;
