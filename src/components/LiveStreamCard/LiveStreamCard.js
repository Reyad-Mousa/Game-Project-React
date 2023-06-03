import "./LiveStreamCard.css"
import { FaStar, FaDownload } from "react-icons/fa";

const LiveStreamCard = (props) => {
  return (
    <div className="Live-stream-item">
      <div className="card-Wrapper">
        <img className="Live-stream-item-image" src={props.image} alt="" />
        <div className="Live-stream-item-content">
          <h4 className="Live-stream-item-title">
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

export default LiveStreamCard