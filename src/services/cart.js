import apiFetch from "./apiFetch";

export const getCart = () => 
    apiFetch("GET", "/cart")

export const addPlantToCart = ({ id, quantity, potColor }) =>
    apiFetch("POST", `/cart/plants/${id}`, {
        quantity,
        pot_color: potColor,
    });

export const deletePlantFromCart = ({id}) =>
    apiFetch("DELETE", `/cart/${id}`)