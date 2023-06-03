import "./FeaturedGamesCard.css";

import { FaStar, FaDownload } from "react-icons/fa";

const FeaturedGamesCard = (props) => {
  return (
    <div className="FeaturedGames-item">
      <div className="card-Wrapper">
        <img className="FeaturedGames-item-image" src={props.image} alt="" />
        <div className="FeaturedGames-item-content">
          <h4 className="FeaturedGames-item-title">
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

export default FeaturedGamesCard;
