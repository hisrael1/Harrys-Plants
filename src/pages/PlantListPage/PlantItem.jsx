import { useState } from "react";
import { Link } from 'react-router-dom'
import { POT_COLORS, getRandomIdx } from "shared/util";

const PlantItem = (props) => {
  const { plant } = props;
  const [currentPlantIdx, setCurrentPlantIdx] = useState(() => getRandomIdx(plant.images));

  return (
    <Link to={`/plants/${plant.id}`}>
        <div className="mx-5 my-8">
        <img
            className="rounded-md w-[300px] h-[320px]"
            src={plant.images[currentPlantIdx].src}
        />
        <div className="py-1 flex justify-between text-emerald-700 text-xl">
            <div className="font-playfair">{plant.name}</div>
            <div>${plant.price}</div>
        </div>
        <div className="py-1 flex justify-between items-center">
            <div className="text-slate-500">
            {plant.images[currentPlantIdx].pot_color}
            </div>
            <div className="flex">
            {plant.images.map((plantImage, idx) => (
                <div
                onMouseEnter={() => setCurrentPlantIdx(idx)}
                key={idx}
                className={`cursor-pointer mx-[3px] h-5 w-5 rounded-full border border-slate-300 
                    ${POT_COLORS[plantImage.pot_color]}
                    ${currentPlantIdx == idx && 'outline outline-slate-400 outline-offset-2'}
                `}
                ></div>
            ))}
            </div>
        </div>
        </div>
    </Link>
  );
};

export default PlantItem;
