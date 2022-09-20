import React from "react";
import "./application.css";

function Application() {
  return (
    <>
      <div className="speContainer" >
        <div className="speHead">
          <div className="speHeading">Applications</div>
        </div>
        <div className="appContent">
          <div className="appPara">
            Ikkat applications are enormous. It can be use for making
          </div>
          <div className="applisting">
            <ul className="appListing-title">
              <li className="appListing-content">Kurtis</li>
              <li className="appListing-content">Shorts</li>
              <li className="appListing-content">Men's Kurta</li>
              <li className="appListing-content">Bags</li>
              <li className="appListing-content">Dress Material</li>
              <li className="appListing-content">Over Jacket</li>
              <li className="appListing-content">Kids Wear</li>
              <li className="appListing-content">Kaftan</li>
              <li className="appListing-content">Shirts</li>
              <li className="appListing-content">Home Furnishing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;
