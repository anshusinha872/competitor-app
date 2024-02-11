import React from "react";
import "./Feature.css";
export const Feature = () => {
  return (
    <div className="featureContainer">
      <div className="leftcontainer">
        <div className="textHeader">Build the strategy view of your dreams</div>
        <div className="subtext">
          Using the Dotwork cloud platform, design a solution that is specific
          to your company's needs. Say goodbye to rigid, opinionated software.
        </div>
        <div>
          <button className="btn">Get Started</button>
        </div>
        <div className="tabcontainer">
          <div className="tab">Product Leaders</div>
          <div className="tab">Operations</div>
          <div className="tab">Portfolio Managers</div>
          <div className="tab">Executives</div>
        </div>
        <div>
          <div className="flex flex-row items-center my-2">
            <div className="iconcontainer">
              <img
                src="https://assets-global.website-files.com/648783040f8d83b99886afc9/64879b9644d34933407afbfc_image%20(145).png"
                alt="Description of the image"
                className="iconimg"
              />
            </div>
            <div className="mx-2 text">
              Does planning & decision-making feel disorganized and chaotic?
            </div>
          </div>
          <div className="flex flex-row items-center my-2">
            <div className="iconcontainer">
              <img
                src="https://assets-global.website-files.com/648783040f8d83b99886afc9/64879b9644d34933407afbfc_image%20(145).png"
                alt="Description of the image"
                className="iconimg"
              />
            </div>
            <div className="mx-2 text">
              Is the big picture disconnected & scattered across multiple tools?
            </div>
          </div>
          <div className="flex flex-row items-center my-2">
            <div className="iconcontainer">
              <img
                src="https://assets-global.website-files.com/648783040f8d83b99886afc9/64879b9644d34933407afbfc_image%20(145).png"
                alt="Description of the image"
                className="iconimg"
              />
            </div>
            <div className="mx-2 text">
              Is your calendar slammed with status meetings?
            </div>
          </div>
          <div className="flex flex-row items-center my-2">
            <div className="iconcontainer">
              <img
                src="https://assets-global.website-files.com/648783040f8d83b99886afc9/64879b9644d34933407afbfc_image%20(145).png"
                alt="Description of the image"
                className="iconimg"
              />
            </div>
            <div className="mx-2 text">
              Is your strategy scattered across docs, sheets, and decks?
            </div>
          </div>
        </div>
      </div>
      <div className="rightcontainer">
        {/* <img
          src="https://cdn.dribbble.com/users/21459/screenshots/2843021/dixa_marketing_bg_blue-dribbble.png?resize=800x600&vertical=center"
          alt="Description of the image"
          className="image"
        /> */}
      </div>
    </div>
  );
};
