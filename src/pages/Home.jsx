import React from "react";
import CardList from "../components/cards/CardList";
import StepProgressBar from "../components/StepProgressBar"
import NavBar from "../NavBar"

const Home = () => {
    return (
      <div>
        <div className="page" style={{ textAlign: "center" }}>
        <div className="nav-container">
          <header className="auth_header_area">
            <NavBar/>
          </header>
        </div>
        <div className="container-auth">
          
        <div className="progress-bar">
          <StepProgressBar/>
        </div>
        
        <p className="page-title">Sign Up</p>
        <p style={{ fontSize: 20, padding: 30, paddingBottom: 60, paddingTop: 60}}>
            Create your portfolio today. <br /> Portfolio Posse has easy and fast sign up <br />using your account with any of these apps.
        </p>
        <CardList />
        </div>
        </div>
        <div className="background-gradient"></div>
        </div>
    );
};

export default Home;