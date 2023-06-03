import { FaEye } from "react-icons/fa";
import "./MostLiveStreamCardinProfile.css";
const MostLiveStreamCard = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-Wrapper">
        <img className="most-popular-item-image" src={props.image_1} alt="" />
        <div className="most-popular-item-content">
          <h4 className="most-popular-item-title">
            {props.title} <br />
          </h4>
          <ul>
            <li>
              <FaEye style={{ color: "var(--color-pink)" }} />
              <span>{props.few}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MostLiveStreamCard;
