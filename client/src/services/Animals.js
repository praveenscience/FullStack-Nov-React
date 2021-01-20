import Axios from "axios";

export const GetAllAnimals = () => Axios.get("/api/animals");

export const DeleteAnimal = animal => Axios.delete("/api/animals/" + animal);
