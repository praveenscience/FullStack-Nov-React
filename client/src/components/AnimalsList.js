import React, { useState } from "react";
import Animal from "./Animal";
import Search from "./Search";

const AnimalsList = ({ List }) => {
  const [Query, setQuery] = useState("");
  const [Liked, setLiked] = useState([]);
  const LikeHandler = animal => {
    const newLikes = [...Liked];
    const index = Liked.indexOf(animal);
    if (index > -1) {
      newLikes.splice(index, 1);
    } else {
      newLikes.push(animal);
    }
    setLiked(newLikes);
  };
  const AnimalsFilter = animal =>
    Query.length === 0
      ? true
      : animal.Name.toLowerCase().indexOf(Query.toLowerCase()) > -1;
  return (
    <div className="Animals">
      <Search Query={Query} setQuery={setQuery} />
      <div className="row my-3">
        {[...List].length > 0
          ? [...List]
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
          : "Nothing Found"}
      </div>
    </div>
  );
};

export default AnimalsList;
