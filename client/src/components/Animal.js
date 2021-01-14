import React from "react";
import Card from "./Card";

const Animal = ({
  Image,
  Name,
  LikeHandler,
  Liked,
  Saw,
  SeeHandler,
  ToggleAnimalCat
}) => {
  const handleLike = e => {
    e.preventDefault();
    LikeHandler(Name);
  };
  const handleSee = e => {
    e.preventDefault();
    SeeHandler(Name);
  };
  return (
    <div className="Animals-Item py-3 col-4">
      <Card Image={Image} ImgAlign="top" Title={Name}>
        <button
          className={"btn btn-sm btn" + (Liked ? "" : "-outline") + "-primary"}
          onClick={handleLike}
        >
          {Liked ? "Unl" : "L"}
          ike
        </button>
        {Liked && (
          <button
            className={
              "btn btn-sm btn" + (Saw ? "" : "-outline") + "-primary mr-1"
            }
            onClick={handleSee}
          >
            <i className="icon-eye"></i>
          </button>
        )}
        {ToggleAnimalCat && (
          <div className="categorise pt-2">
            <select className="form-control">
              <option value="">Uncategorised</option>
              <option value="Herbivorous">Herbivorous</option>
              <option value="Carnivorous">Carnivorous</option>
              <option value="Omnivorous">Omnivorous</option>
            </select>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Animal;
