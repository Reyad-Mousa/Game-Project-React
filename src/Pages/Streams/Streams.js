import "./Streams.css";
import { LiveStreams, TopStream , MostpopularLiveStream } from "../../sections/index";

const Streams = () => {
  return (
    <>
      <div className="container-stream">
        <LiveStreams />
        <TopStream />
        <MostpopularLiveStream/>
      </div>
    </>
  );
};

export default Streams;
