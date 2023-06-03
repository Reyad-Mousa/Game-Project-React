import "./GamingLibrary.css";
import {
  SectionHeader,
  SectionWrapper,
  GamingLibraryCard,
} from "../../components/index";
import GamingLibraryData from "../../Data/GamingLibraryData";

const GamingLibrary = () => {
  const cards = GamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        data_added={card.data_added}
        hours_played={card.hours_played}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <div className="section-header">
          <SectionHeader>Gaming Library</SectionHeader>
        </div>
        <div className="gaming-library-cards">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default GamingLibrary;
