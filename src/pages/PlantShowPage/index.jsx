import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as plantService from "services/plants";
import NavBar from "shared/NavBar";
import PlantInfoPage from "./PlantInfoPage";

const PlantShowPage = () => {
  const [plant, setPlant] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-emerald-50 min-h-screen flex justify-center font-lato">
        {isLoading ? (
            <div className="flex justify-center py-32 items-start">
                <i className="animate-spin fa-solid fa-spinner text-4xl text-emerald-700"></i>
            </div>
        ) : (
          <PlantInfoPage plant={plant} />
        )}
      </div>
    </>
  );
};

export default PlantShowPage;
