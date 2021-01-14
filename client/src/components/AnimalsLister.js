import React from "react";
import { Link } from "react-router-dom";
import Animal from "./Animal";

const AnimalsLister = ({
  List,
  Query,
  LikeHandler,
  Liked,
  See,
  SeeHandler,
  ToggleAnimalCat,
  Categories,
  Categorised
}) => {
  const findAnimalCat = animal => {
    if (Categorised.includes(animal)) {
      if (Categories.Herbivorous.includes(animal)) {
        return "Herbivorous";
      } else if (Categories.Carnivorous.includes(animal)) {
        return "Carnivorous";
      } else if (Categories.Omnivorous.includes(animal)) {
        return "Omnivorous";
      }
    }
    return "";
  };
  const AnimalsFilter = animal =>
    Query.length === 0
      ? true
      : animal.Name.toLowerCase().indexOf(Query.toLowerCase()) > -1;
  return [...List].length > 0 ? (
    [...List]
      .filter(AnimalsFilter)
      .map(animal => (
        <Animal
          key={animal.Name}
          Image={animal.Image}
          Name={animal.Name}
          LikeHandler={LikeHandler}
          Liked={Liked.includes(animal.Name)}
          SeeHandler={SeeHandler}
          Saw={See.includes(animal.Name)}
          ToggleAnimalCat={ToggleAnimalCat}
          Category={ToggleAnimalCat ? findAnimalCat(animal.Name) : null}
        />
      ))
  ) : (
    <div className="col-12">
      <div className="alert alert-danger">
        <p className="m-0 text-center">
          Nothing found! Head back to <Link to="/">Home</Link>.
        </p>
      </div>
    </div>
  );
};

export default AnimalsLister;
