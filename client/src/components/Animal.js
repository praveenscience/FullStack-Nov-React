import React from "react";
import Card from "./Card";

const Animal = ({ Image, Name }) => {
  return (
    <div className="Animal py-3 col-4">
      <Card Image={Image} ImgAlign="top" Title={Name}>
        <button className="btn btn-sm btn-outline-primary">Like</button>
      </Card>
    </div>
  );
};

export default Animal;
