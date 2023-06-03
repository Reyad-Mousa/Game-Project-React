import "./MostpopularLiveStream.css";

import { SectionHeader, MostLiveStreamCard, SectionWrapper } from "../../components/index";
import MostLiveStreamData from "../../../src/Data/MostLiveStreamCardData";
const MostPopular = () => {
  const cards = MostLiveStreamData.map((card) => {
    return (
      <MostLiveStreamCard
        key={card.id}
        image_1 ={card.image_1}
        image={card.image}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <div className="section-header">
          <SectionHeader>MostLiveStream</SectionHeader>
        </div>
        <div className="MostLiveStream-items">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
