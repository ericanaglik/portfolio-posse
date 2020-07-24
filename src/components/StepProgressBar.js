import React from "react";
import "../style/step.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import {ReactComponent as SignUpIcon} from '../svg/User.svg'
import {ReactComponent as TemplateIcon} from '../svg/Favorite App.svg'
import {ReactComponent as InformationIcon} from '../svg/Note Pencil.svg'

class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar percent={0}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <SignUpIcon/>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <TemplateIcon/>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <InformationIcon/>
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default StepProgressBar;