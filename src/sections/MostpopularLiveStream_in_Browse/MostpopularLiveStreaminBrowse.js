import "./MostpopularLiveStreaminBrowse.css";

import {
  SectionHeader,
  MostLiveStreamCard,
  SectionWrapper,
} from "../../components/index";
import MostLiveStream_in_Browse_CardData from "../../Data/MostLiveStream_in_Browse_CardData ";
const MostPopular = () => {
  const cards = MostLiveStream_in_Browse_CardData.map((card) => {
    return (
      <MostLiveStreamCard
        key={card.id}
        image_1={card.image_1}
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
