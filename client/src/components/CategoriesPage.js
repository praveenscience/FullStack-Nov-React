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
  SeeHandler,
  ToggleAnimalCat
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
              List={List.filter(animal => !Categorised.includes(animal.Name))}
              LikeHandler={LikeHandler}
              Liked={Liked}
              See={See}
              SeeHandler={SeeHandler}
              ToggleAnimalCat={ToggleAnimalCat}
              Categories={Categories}
              Categorised={Categorised}
            />
          </div>
        </Card>
        <Card Header="Herbivorous" className="my-3">
          <div className="row">
            <AnimalsLister
              Query={Query}
              List={List.filter(animal =>
                Categories.Herbivorous.includes(animal.Name)
              )}
              LikeHandler={LikeHandler}
              Liked={Liked}
              See={See}
              SeeHandler={SeeHandler}
              ToggleAnimalCat={ToggleAnimalCat}
              Categories={Categories}
              Categorised={Categorised}
            />
          </div>
        </Card>
        <Card Header="Carnivorous" className="my-3">
          <div className="row">
            <AnimalsLister
              Query={Query}
              List={List.filter(animal =>
                Categories.Carnivorous.includes(animal.Name)
              )}
              LikeHandler={LikeHandler}
              Liked={Liked}
              See={See}
              SeeHandler={SeeHandler}
              ToggleAnimalCat={ToggleAnimalCat}
              Categories={Categories}
              Categorised={Categorised}
            />
          </div>
        </Card>
        <Card Header="Omnivorous" className="my-3">
          <div className="row">
            <AnimalsLister
              Query={Query}
              List={List.filter(animal =>
                Categories.Omnivorous.includes(animal.Name)
              )}
              LikeHandler={LikeHandler}
              Liked={Liked}
              See={See}
              SeeHandler={SeeHandler}
              ToggleAnimalCat={ToggleAnimalCat}
              Categorised={Categorised}
              Categorised={Categorised}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CategoriesPage;
