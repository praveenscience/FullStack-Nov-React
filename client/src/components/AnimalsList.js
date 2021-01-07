import React from "react";
import Animal from "./Animal";

const AnimalsList = ({ List }) => {
  return (
    <div className="Animals">
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