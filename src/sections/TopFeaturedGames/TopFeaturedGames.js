import "./TopFeaturedGames.css";
import { SectionHeader, TopFeaturedGamesCard } from "../../components/index";

import TopFeaturedGamesData from "../../Data/TopFeaturedGamesData";

const TopFeaturedGames = () => {
  const cards = TopFeaturedGamesData.map((card) => {
    return (
      <TopFeaturedGamesCard
        key={card.id}
        number={card.id}
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
      <div className="section-Wrapper container-TopFeaturedGames">
        <div className="section-header">
          <SectionHeader>Top Featured Games</SectionHeader>
        </div>
        <div className="TopFeaturedGames-Cards">{cards}</div>
      </div>
    </>
  );
};

export default TopFeaturedGames;
