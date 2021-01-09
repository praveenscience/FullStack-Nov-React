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
      {Liked.length > 0 && (
        <div className="row">
          <div className="col-12 text-center pt-3">
            <button className="btn btn-outline-primary btn-sm mr-2">
              Home
            </button>
            <button className="btn btn-outline-primary btn-sm mr-2">
              Liked Animals
            </button>
            <button className="btn btn-outline-primary btn-sm mr-2">
              Want to See
            </button>
            <button className="btn btn-outline-primary btn-sm">
              Don't Want to See
            </button>
          </div>
        </div>
      )}
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
