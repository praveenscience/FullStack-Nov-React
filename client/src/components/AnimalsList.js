import React from "react";
import Animal from "./Animal";
import Search from "./Search";

const AnimalsList = ({ List }) => {
  return (
    <div className="Animals">
      <Search />
      <div className="row my-3">
        {[...List].length > 0
          ? [...List].map(animal => (
              <Animal
                key={animal.Name}
                Image={animal.Image}
                Name={animal.Name}
              />
            ))
          : "Nothing Found"}
      </div>
    </div>
  );
};

export default AnimalsList;
