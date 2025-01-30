import { useState, useEffect } from "react";
import * as plantService from "services/plants";
import NavBar from "shared/NavBar";
import RedirectToSignInIfSignedOut from "shared/RedirectToSignInIfSignedOut";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared/LoadingSpinner";
import { motion } from 'framer-motion'

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
                {plants.map((plant, idx) => (
                  <motion.div 
                    key={plant.name}
                    initial={{ opacity: 0, translateY: "20px"}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx % 3) * 0.2, duration: 0.4 }}
                  >
                    <PlantItem plant={plant} />
                  </motion.div>
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
