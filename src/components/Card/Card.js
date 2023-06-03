import "./Card.css";
import { FaStar, FaDownload } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-Wrapper">
        <img className="most-popular-item-image" src={props.image} alt="" />
        <div className="most-popular-item-content">
          <h4 className="most-popular-item-title">
            {props.title} <br /> <span>{props.category}</span>
          </h4>
          <ul>
            <li>
              <FaStar style={{ color: "var(--color-icon)" }} />
              <span>{props.rate}</span>
            </li>
            <li>
              <FaDownload style={{ color: "var( --color-pink)" }} />
              <span>{props.download}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
