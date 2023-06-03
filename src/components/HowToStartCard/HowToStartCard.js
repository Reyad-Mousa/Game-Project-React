import "./HowToStartCard.css";

const HowToStartCard = (props) => {
  return (
    <div className="HowToStart-item">
      <div className="card-Wrapper">
        <ul className="HowToStart-item-content">
          <li>
          <img className="Live-stream-item-image" src={props.image} alt="" />
          </li>
          <li>
          <h4>{props.title}</h4>
          </li>
          <li>
            <p>{props.details}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowToStartCard;
