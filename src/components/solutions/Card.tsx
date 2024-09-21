import React from "react";
import { Cards } from "../../assets";
import "./Card.css"; // Import the CSS file

const Card = () => {
  return (
    <div className="mt-8 mx-3">
      <div className="card-SubContainer">
        {Cards.map((item) => {
          return (
            <div key={item?.card} className="card-container">
              {/* Image */}
              <img src={item?.card} className="card-image" alt="Card" />

              {/* Text Overlay */}
              <div className="card-overlay">
                <div className="card-content">
                  <p className="card-title">{item?.title}</p>
                  <span className="card-desc">{item?.desc}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
