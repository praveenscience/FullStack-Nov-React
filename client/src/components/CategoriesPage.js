import React from "react";
import AnimalsLister from "./AnimalsLister";
import Card from "./Card";

const CategoriesPage = ({
  Categories,
  Query,
  List,
  LikeHandler,
  Liked,
  See,
  SeeHandler
}) => {
  const Categorised = [
    ...Categories.Herbivorous,
    ...Categories.Carnivorous,
    ...Categories.Omnivorous
  ];
  return (
    <div className="col-12">
      <div className="CategoriesPage">
        <Card Header="Uncategorised" className="my-3">
          <div className="row">
            <AnimalsLister
              Query={Query}
              List={List}
              LikeHandler={LikeHandler}
              Liked={Liked}
              See={See}
              SeeHandler={SeeHandler}
            />
          </div>
        </Card>
        <Card Header="Herbivorous" className="my-3">
          Hi
        </Card>
        <Card Header="Carnivorous" className="my-3">
          Hi
        </Card>
        <Card Header="Omnivorous" className="my-3">
          Hi
        </Card>
      </div>
    </div>
  );
};

export default CategoriesPage;
