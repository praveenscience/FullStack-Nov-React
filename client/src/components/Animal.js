import React from "react";
import { DeleteAnimal } from "../services/Animals";
import Card from "./Card";

const Animal = ({
  AnimalId,
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
  const handleEdit = e => {
    e.preventDefault();
  };
  const handleDelete = e => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete?"))
      DeleteAnimal(AnimalId)
        .then(res => {
          if (res.status === 204) {
            window.alert("Animal Deleted!");
          } else {
            window.alert("Error " + res.status);
          }
        })
        .catch(err => {
          window.alert("Error " + err.response.status);
        });
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
              <button className="btn btn-info btn-sm" onClick={handleEdit}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Animal;
