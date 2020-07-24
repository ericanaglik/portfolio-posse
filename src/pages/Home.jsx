import React from "react";
// import Terminal from "../components/displays/Terminal";
import CardList from "../components/cards/CardList";
import StepProgressBar from "../components/StepProgressBar"

const Home = () => {
    return (
      <div>
      
        <div className="page" style={{ textAlign: "center" }}>
        <div className="container-auth">
        <div className="progress-bar">
          <StepProgressBar/>
          </div>
            <p className="page-title">Sign Up</p>
            <p style={{ fontSize: 20, padding: 30, paddingBottom: 60, paddingTop: 60}}>
                Create your portfolio today. Portolio Posse has easy and fast sign up using your account with any of these apps.
            </p>
            {/* <Terminal
                userData={"passport.authenticate('facebook')"}
                selected="All"
            /> */}
            <CardList />
            </div>
        </div>
        <div className="background-gradient"></div>
        </div>
    );
};

export default Home;