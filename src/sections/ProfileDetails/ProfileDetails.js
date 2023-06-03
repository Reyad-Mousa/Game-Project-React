import "./ProfileDetails.css";
import {
  MostLiveStreamCardinProfile,
  SectionHeader,
} from "../../components/index";
import profileData from "../../../src/Data/profileData";
import ProfileImg from "../../assets/images/profile.jpg";
const ProfileDetails = () => {
  const cards = profileData.map((card) => {
    return (
      <MostLiveStreamCardinProfile
        key={card.id}
        image_1={card.image_1}
        title={card.title}
        few={card.few}
      />
    );
  });

  return (
    <>
      <div className="section-Wrapper ">
        <div className="active-section">
          <img src={ProfileImg} alt="" />
          <div className="main-info header-text">
            <span>Offline</span>
            <h4>Alan Smithee</h4>
            <p>
              You Haven't Gone Live yet. Go Live By Touching The Button Below.
            </p>
            <div className="main-border-button">
              <a href="/">Start Live Stream</a>
            </div>
          </div>
          <div className="col-lg-4 align-self-center">
            <ul className="profileCard">
              <li>
                Games Downloaded <span>3</span>
              </li>
              <li>
                Friends Online <span>16</span>
              </li>
              <li>
                Live Streams <span>None</span>
              </li>
              <li>
                Clips <span>29</span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <SectionHeader>Your Most Popular Clips</SectionHeader>

        <div className="most-popular-items">{cards}</div>
        <div className="col-lg-12 ">
          <div className="main-button">
            <a href="/">Load More Clips</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
