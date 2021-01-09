import React, { useState } from "react";
import Search from "./Search";
import AnimalsLister from "./AnimalsLister";

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
        <div className="col-12">
          <h3>
            Animals
            <span className="badge badge-pill badge-success ml-2">
              {Liked.length > 0 &&
                `(${Liked.length} liked animal${
                  Liked.length !== 1 ? "s" : ""
                })`}
            </span>
          </h3>
        </div>
        <AnimalsLister
          Query={Query}
          List={List}
          LikeHandler={LikeHandler}
          Liked={Liked}
        />
      </div>
    </div>
  );
};

export default AnimalsList;
