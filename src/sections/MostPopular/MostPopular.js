import "./MostPopular.css";
import { SectionHeader, Card, SectionWrapper } from "../../components/index";
import MostPopularData from "../../../src/Data/MostPopularData";
const MostPopular = () => {
  const cards = MostPopularData.map((card) => {
    return (
      <Card
        key={card.id}
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
          <SectionHeader>Most Popular</SectionHeader>
        </div>
        <div className="most-popular-items">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
