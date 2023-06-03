import "./Top.css";
import Buttons from "../../components/Buttons/Buttons";
const Top = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6>Welcome To Cyborg</h6>
        <h4 className="hero-title">
          <em>Browse </em>
          With Scholar Teachers, Everything Is Easier
        </h4>
        <Buttons />
      </div>
    </div>
  );
};

export default Top;
