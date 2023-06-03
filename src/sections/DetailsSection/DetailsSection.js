import "./DetailsSection.css";
import {
  DetailsCard,
  SectionWrapper,
  DetailsTopImage,
} from "../../components/index";
import Details_Data from "../../Data/Details_Data";
import {DetailsImg_Data} from "../../Data/Details_Data";

const DetailsSection = () => {
  const cards = Details_Data.map((card) => {
    return (

        <DetailsCard
          key={card.id}
          image1={card.image1}
          image2={card.image2}
          image3={card.image3}
          title={card.title}
          category={card.category}
          rate={card.rate}
          type={card.type}
          download={card.download}
        />
 
    );
  });
  
  const imgs = DetailsImg_Data.map((img) => {
    return (
      <DetailsTopImage
        key={img.id}
        image4={img.image4}
        image5={img.image5}
      />
    );
  });
  return (
    <>
      <div>
        {imgs}
        <h1>FORTNITE DETAILS</h1>
      </div>
      <SectionWrapper>
        <div className="details-items">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default DetailsSection;
