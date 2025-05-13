import apiFetch from "./apiFetch";
import { Plant } from "../types";

export const getCart = () => 
    apiFetch("GET", "/cart")

export const addPlantToCart = ({ id, quantity, pot_color }: Plant) =>
    apiFetch("POST", `/cart/plants/${id}`, {
        quantity,
        pot_color: pot_color,
    });

export const deletePlantFromCart = ({id}: {id: number}) =>
    apiFetch("DELETE", `/cart/${id}`)