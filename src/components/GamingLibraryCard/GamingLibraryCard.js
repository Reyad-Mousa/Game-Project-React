import "./GamingLibraryCard.css";
import Buttons from "../Buttons/Buttons";
const GamingLibraryCard = (props) => {
  return (
    <div className="gaming-library-card">
      <ul>
        <li>
          <img src={props.image} alt="" />
        </li>
        <li>
          <h4>{props.title}</h4>
          <span>{props.category}</span>
        </li>
        <li>
          <h4>Data Added</h4>
          <span>{props.data_added}</span>
        </li>
        <li>
          <h4>Hours Added</h4>
          <span>{props.hours_played}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span>{props.download}</span>
        </li>
       <Buttons />
      </ul>
    </div>
  );
};

export default GamingLibraryCard;
