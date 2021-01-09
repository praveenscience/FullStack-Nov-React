import React from "react";
import { Link } from "react-router-dom";
import Animal from "./Animal";

const AnimalsLister = ({ List, Query, LikeHandler, Liked }) => {
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
