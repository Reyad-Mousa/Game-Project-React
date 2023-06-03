import "./TopStreamCard.css";
import Buttons from "../Buttons/Buttons";
import { FaCheckCircle } from "react-icons/fa";
const TopStreamCard = (props) => {
  return (
    <div className="top-stream-card">
      <ul>
        <li>
          <h4>{props.number}</h4>
          <img src={props.image} alt="" />
          <h6>
            <FaCheckCircle></FaCheckCircle>
            {props.title}
          </h6>
          <div className="btn-topstream">
            <Buttons />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TopStreamCard;
