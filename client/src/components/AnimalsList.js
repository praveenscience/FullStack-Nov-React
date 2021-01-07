import React, { useState } from "react";
import Animal from "./Animal";
import Search from "./Search";

const AnimalsList = ({ List }) => {
  const [Query, setQuery] = useState("");
  return (
    <div className="Animals">
      <Search Query={Query} setQuery={setQuery} />
      <div className="row my-3">
        <div className="col-12">
          <pre className="border rounded my-3 bg-light p-3">{Query}</pre>
        </div>
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
