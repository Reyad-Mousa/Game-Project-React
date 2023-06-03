import "./MostLiveStreamCard.css";
import { FaCheckCircle } from "react-icons/fa";

const MostLiveStreamCard = (props) => {
  return (
    <div className="MostLiveStreamCard">
      <div className="MostLiveStreamCard-Wrapper">
        <img
          className="MostLiveStreamCard-item-image"
          src={props.image}
          alt=""
        />
        <div className="MostLiveStreamCard-mine">
          <ul>
            <li>
              <img src={props.image_1} alt="" />
              <div className="content">
                <h6>
                  <FaCheckCircle></FaCheckCircle>
                  {props.title}
                </h6>
                <span> {props.category}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MostLiveStreamCard;
