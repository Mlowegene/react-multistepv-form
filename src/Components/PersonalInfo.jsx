import React from "react";
import "../css/personalInfo.css";

function PersonalInfo() {
  return (
    <div className="body">
      <main className="container">
        <div className="sidebar">
          <div className="stepItems">
            <div className="stepNumber">1</div>
            <div>
              <p className="step">STEP 1</p>
              <h3 className="stepInfo">YOUR INFO</h3>
            </div>
          </div>
          <div className="stepItems">
            <div className="stepNumber">2</div>
            <div>
              <p className="step">STEP 2</p>
              <h3 className="stepInfo">SELECT PLAN</h3>
            </div>
          </div>
          <div className="stepItems">
            <div className="stepNumber">3</div>
            <div>
              <p className="step">STEP 3</p>
              <h3 className="stepInfo">ADD-ONS</h3>
            </div>
          </div>
          <div className="stepItems">
            <div className="stepNumber">4</div>
            <div>
              <p className="step">STEP 4</p>
              <h3 className="stepInfo">SUMMARY</h3>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default PersonalInfo;
