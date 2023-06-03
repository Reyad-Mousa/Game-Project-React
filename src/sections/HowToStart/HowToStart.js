import "./HowToStart.css";
import { HowToStartCard } from "../../components/index";
import HowToStartData from "../../Data/HowToStartData";

const HowToStart = () => {
  const cards = HowToStartData.map((card) => {
    return (
      <HowToStartCard
        key={card.id}
        title={card.title}
        image={card.image}
        details={card.details}
      />
    );
  });

  return (
    <>
      <div className="section-Wrapper container-HowToStart">
        <div className="header-HowToStart">
          <h4>How To Start Live Stream</h4>
        </div>
        <div className="HowToStart-Cards">{cards}</div>
      </div>
    </>
  );
};

export default HowToStart;
