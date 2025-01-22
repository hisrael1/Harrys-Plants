import { useState } from "react";
import PlantHeading from "./PlantHeading";
import BenefitBox from "./BenefitBox";
import PotColorOptions from "./PotColorOptions";

const getRandomIdx = (array) => {
  return Math.floor(Math.random() * array.length)
}

const PlantInfoPage = (props) => {
  const { plant } = props;
  const [currentImgIdx, setCurrentImgIdx] = useState(() => {
    return getRandomIdx(plant.images)
  });

  return (
    <div className="flex bg-emerald-50 text-slate-500 justify-center max-w-6xl">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mb-8">
          <div className="block mb-8 md:hidden">
            <PlantHeading plant={plant} />
          </div>
          <img
            src={plant.images?.[currentImgIdx].src}
            className="rounded-xl w-[720px] object-cover"
          />
          <div className="flex">
            <BenefitBox
              icon="fa-regular fa-square-check"
              title="Guaranteed Healthy"
              description="Guaranteed to arrive healthy or your money back"
            />
            <div className="border border-slate-300 mt-4"></div>
            <BenefitBox
              icon="fa-solid fa-truck-fast"
              title="Free Shipping"
              description="Get free ground shipping on orders of $50 or more"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 px-8">
          <div className="hidden md:block">
            <PlantHeading plant={plant} />
          </div>
          <div className="text-slate-600 leading-relaxed">
            {plant.description}
          </div>
          <PotColorOptions plant={plant} currentImgIdx={currentImgIdx} 
            setCurrentImgIdx={setCurrentImgIdx}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantInfoPage;
