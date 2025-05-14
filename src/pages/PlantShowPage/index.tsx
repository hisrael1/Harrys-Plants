import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as plantService from "services/plants";
// @ts-ignore
import NavBar from "shared/NavBar";
import PlantInfoPage from "./PlantInfoPage";
// @ts-ignore
import LoadingSpinner from "shared/LoadingSpinner";
import { Plant } from "./types";

const PlantShowPage = () => {
  const [plant, setPlant] = useState<Plant>({
    id: 0,
    name: '',
    botanical_name: '',
    description: '',
    care_instructions: '',
    price: 0,
    images: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById({ id: Number(plantId) });
      const data = await response.json();
      setIsLoading(false);
      if (response.status == 200) {
        setPlant(data);
        console.log('plant data', data);
      } else {
        console.log("error");
      }
    })();
  }, [plantId]);

  return (
    <>
      <NavBar />
      <div className="bg-emerald-50 min-h-screen flex justify-center font-lato py-24 px-8">
        {isLoading ? (
            <LoadingSpinner />
        ) : (
          <PlantInfoPage plant={plant} />
        )}
      </div>
    </>
  );
};

export default PlantShowPage;
