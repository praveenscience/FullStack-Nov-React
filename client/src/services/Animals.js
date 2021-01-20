import Axios from "axios";

export const GetAllAnimals = () => Axios.get("/api/animals");

export const DeleteAnimal = AnimalId =>
  Axios.delete("/api/animals/" + AnimalId);
