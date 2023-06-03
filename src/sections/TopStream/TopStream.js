import "./TopStream.css";
import {
  SectionHeader,
  TopStreamCard,
} from "../../components/index";
import TopStreamsData from "../../Data/TopStreamData";
const TopStream = () => {
  const cards = TopStreamsData.map((card) => {
    return (
      <TopStreamCard
        key={card.id}
        number={card.id}
        image={card.image}
        title={card.title}
      />
    );
  });

  return (
    <>
      <div className="section-Wrapper container-TopStream">
        <div className="section-header">
          <SectionHeader>Top Stream</SectionHeader>
        </div>
        <div className="Top-Stream-Cards">{cards}</div>
      </div>
    </>
  );
};

export default TopStream;
