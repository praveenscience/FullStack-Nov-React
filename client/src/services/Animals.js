import Axios from "axios";

export const GetAllAnimals = () => Axios.get("/api/animals");
