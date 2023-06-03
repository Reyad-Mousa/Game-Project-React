import "./TopFeaturedGamesCard.css";
import { FaCheckCircle, FaStar, FaDownload } from "react-icons/fa";
const TopFeaturedGamesCard = (props) => {
  return (
    <div className="TopFeaturedGamesCard-mine">
        <ul>
          <li>
            <img src={props.image} alt="" className="image"/>

            <h4>
              <FaCheckCircle></FaCheckCircle>
              {props.title}
            </h4>
            <h6>{props.category}</h6>
            <span>
              <FaStar style={{ color: "var(--color-icon)" }} />
              {props.rate}
            </span>
            <span>
              <FaDownload style={{ color: "var( --color-pink)" }} />
              {props.download}
            </span>
            <div className="button">
              <FaDownload style={{ color: "var( --color-pink)" }} />
            </div>
          </li>
        </ul>
    </div>
  );
};

export default TopFeaturedGamesCard;
