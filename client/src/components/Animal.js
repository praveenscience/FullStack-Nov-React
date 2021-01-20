import React from "react";
import Card from "./Card";

const Animal = ({
  Image,
  Name,
  LikeHandler,
  Liked,
  Saw,
  SeeHandler,
  ToggleAnimalCat,
  Category
}) => {
  const handleLike = e => {
    e.preventDefault();
    LikeHandler(Name);
  };
  const handleSee = e => {
    e.preventDefault();
    SeeHandler(Name);
  };
  const handleChangeCat = e => {
    console.log(e.target.value, Name);
    ToggleAnimalCat(e.target.value, Name);
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
            <select
              className="form-control"
              value={Category}
              onChange={handleChangeCat}
            >
              <option value="">Uncategorised</option>
              <option value="Herbivorous">Herbivorous</option>
              <option value="Carnivorous">Carnivorous</option>
              <option value="Omnivorous">Omnivorous</option>
            </select>
            <div className="btn-group mt-2 d-flex">
              <button className="btn btn-info btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Animal;
