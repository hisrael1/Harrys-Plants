import type { Plant } from "./types";

interface PlantHeadingProps {
  plant: Plant;
}

const PlantHeading = (props: PlantHeadingProps) => {
  const { plant } = props;
  return (
    <>
        <div className="flex justify-between items-center text-emerald-700 mb-2">
        <div className="font-playfair text-4xl">{plant.name}</div>
        <div className="font-lato text-4xl">${plant.price}</div>
        </div>
        <div className="mb-4 italic text-lg text-slate-500">{plant.botanical_name}</div>
    </>
  );
};

export default PlantHeading;
