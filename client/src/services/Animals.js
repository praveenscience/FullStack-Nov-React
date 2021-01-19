export const GetAllAnimals = () => fetch("/api/animals").then(res => res.json());
