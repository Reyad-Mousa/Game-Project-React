import "./Details_Card.css";
import {
  FaStar,
  FaDownload,
  FaServer,
  FaGamepad,
  FaPlay,
} from "react-icons/fa";

const DetailsTopImage = (props) => {
  return (
    <div className="top-img">
      <img className="Details-image one" src={props.image4} alt="" />
      <div className="youtubeInfo">
        <img className="Details-image tow" src={props.image5} alt="" />
        <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="blank">
          <FaPlay />
        </a>
      </div>
    </div>
  );
};
const Details_Card = (props) => {
  return (
    <div className="Details-item">
      <div className="details">
        <div className="left">
          <div className="Details-Wrapper">
            <h4 className="Details-title">
              {props.title} <br />
              <span>{props.category}</span>
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
        <div className="right">
          <div className="Details-Wrapper">
            <ul className="info">
              <li>
                <FaStar style={{ color: "var(--color-icon)" }} />
                <span>{props.rate}</span>
              </li>
              <li>
                <FaDownload style={{ color: "var( --color-pink)" }} />
                <span>{props.download}</span>
              </li>
              <li>
                <FaServer style={{ color: "var(--color-icon)" }} />
                <span>{props.rate}</span>
              </li>
              <li>
                <FaGamepad style={{ color: "var( --color-pink)" }} />
                <span>{props.download}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="images-item">
        <div className="details-image">
          <img className="imgcard" src={props.image1} alt="" />
        </div>
        <div className="details-image">
          <img className="imgcard" src={props.image2} alt="" />
        </div>
        <div className="details-image">
          <img className="imgcard" src={props.image3} alt="" />
        </div>
      </div>
      <p>
        Cyborg Gaming is free HTML CSS website template provided by TemplateMo.
        This is Bootstrap v5.2.0 layout. You can make a small contribution via
        PayPal to info [at] templatemo.com and thank you for supporting. If you
        want to get the PSD source files, please contact us. Lorem ipsum dolor
        sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum
        hored tempor.
      </p>
    </div>
  );
};

export default Details_Card;
export { DetailsTopImage };
