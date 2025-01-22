import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as plantService from "services/plants";
import NavBar from "shared/NavBar";
import PlantInfoPage from "./PlantInfoPage";
import LoadingSpinner from "shared/LoadingSpinner";

const PlantShowPage = () => {
  const [plant, setPlant] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById({ id: plantId });
      const data = await response.json();
      setIsLoading(false);
      if (response.status == 200) {
        setPlant(data);
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
