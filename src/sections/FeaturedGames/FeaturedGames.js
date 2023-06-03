import "./FeaturedGames.css"

import {  FeaturedGamesCard } from "../../components/index";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import FeaturedGamesData from "../../Data/FeaturedGamesData";
const FeaturedGames = () => {
  const cards = FeaturedGamesData.map((card) => {
    return (
      <FeaturedGamesCard
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
      <div className="section-Wrapper container-FeaturedGames">
        <div className="header-FeaturedGames">
          <h4>Featured Games</h4>
          <div className="btn-FeaturedGames">
            <FaChevronLeft style={{ color: "var(--color-icon)" }} />
            <FaChevronRight style={{ color: "var(--color-icon)" }} />
          </div>
        </div>
        <div className="FeaturedGames-Cards">{cards}</div>
      </div>
    </>
  );
};

export default FeaturedGames;
