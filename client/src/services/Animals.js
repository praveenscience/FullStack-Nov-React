export const GetAllAnimals = () =>
  fetch("/api/animals.json").then(res => res.json());
