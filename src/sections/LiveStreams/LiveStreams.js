import "./LiveStreams.css";
import {  LiveStreamCard } from "../../components/index";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import LiveStreamsData from "../../Data/LiveStreamData";
const LiveStreams = () => {
  const cards = LiveStreamsData.map((card) => {
    return (
      <LiveStreamCard
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
      <div className="section-Wrapper container-liveStream">
        <div className="header-liveStram">
          <h4>Live Stream</h4>
          <div className="btn-liveStream">
            <FaChevronLeft style={{ color: "var(--color-icon)" }} />
            <FaChevronRight style={{ color: "var(--color-icon)" }} />
          </div>
        </div>
        <div className="Live-Stream-Cards">{cards}</div>
      </div>
    </>
  );
};

export default LiveStreams;
