import "./Browse.css";
import {
  FeaturedGames,
  TopFeaturedGames,
  HowToStart, MostpopularLiveStreaminBrowse
} from "../../sections/index";
const Browse = () => {
  return (
    <>
      <div className="container-browse">
        <FeaturedGames />
        <TopFeaturedGames />
        <HowToStart />
        <MostpopularLiveStreaminBrowse />
      </div>
    </>
  );
};

export default Browse;
