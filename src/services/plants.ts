import apiFetch from "./apiFetch";

export const getPlants = () => apiFetch("GET", "/plants");

export const getPlantById = ({ id }: { id: number }) => apiFetch("GET", `/plants/${id}`);