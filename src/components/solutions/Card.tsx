import { Cards } from "../../assets";
import "./Card.css"; // Import the CSS file

const Card = () => {
  return (
    <div className="mt-8 mx-3">
      <div className="card-SubContainer">
        {Cards?.map((item) => {
          return (
            <div className="card-container">
              <div key={item?.card}>
                {/* Image */}
                <img src={item?.card} className="card-image" alt="Card" />

                {/* Text Overlay */}
              </div>
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
