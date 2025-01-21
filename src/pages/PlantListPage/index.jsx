import { useState, useEffect } from "react";
import * as plantService from "services/plants";
import NavBar from "shared/NavBar";
import RedirectToSignInIfSignedOut from "shared/RedirectToSignInIfSignedOut";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared/LoadingSpinner";

const PlantListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
      // console.log(data);
    })();
  }, []);

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="bg-emerald-50 min-h-screen py-24">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="text-3xl text-emerald-800 font-playfair mb-6 px-4">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant) => (
                  <PlantItem key={plant.name} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
