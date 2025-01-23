import apiFetch from "./apiFetch";

export const getPlants = () => apiFetch("GET", "/plants");

export const getPlantById = ({ id }) => apiFetch("GET", `/plants/${id}`);

export const addPlantToCart = ({ id, quantity, potColor }) =>
  apiFetch("POST", `/cart/plants/${id}`, {
    pot_color: potColor,
    quantity
  });
