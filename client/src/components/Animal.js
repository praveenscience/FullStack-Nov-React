import React from "react";
import Card from "./Card";

const Animal = ({ Image, Name, LikeHandler, Liked, SeeHandler }) => {
  const handleLike = e => {
    e.preventDefault();
    LikeHandler(Name);
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
      </Card>
    </div>
  );
};

export default Animal;
