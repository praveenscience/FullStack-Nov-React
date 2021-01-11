import React from "react";
import Card from "./Card";

const Animal = ({ Image, Name, LikeHandler, Liked, Saw, SeeHandler }) => {
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
      </Card>
    </div>
  );
};

export default Animal;
