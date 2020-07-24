import React from "react";
import "../style/step.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StepProgressBar extends React.Component {
  render() {
    return (
      <div>
        <div className="bar-container">
      <ProgressBar percent={0}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <FontAwesomeIcon icon={faUser} />
              
            </div>
            
          )}
          
        </Step>
        
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <FontAwesomeIcon icon={faPaintBrush} />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <FontAwesomeIcon icon={faEdit} />
            </div>
          )}
        </Step>
      </ProgressBar>
      </div>
      <div className="progress-text">
        <h3>Sign Up</h3>
        <h3>Choose A Template</h3>
        <h3>Add Information</h3>
      </div>
      </div>
    );
  }
}

export default StepProgressBar;