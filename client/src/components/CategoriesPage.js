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
  ToggleAnimalCat,
  Categorised,
  findAnimalCat
}) => {
  const ToggleExpCol = cat => {};
  return (
    <div className="col-12">
      <div className="CategoriesPage">
        <Card
          Header={
            <>
              Uncategorised
              <button
                className="btn btn-sm btn-primary float-right"
                onClick={e => {
                  e.preventDefault();
                  ToggleExpCol("Uncategorised");
                }}
              >
                <i className="icon-arrow-down"></i>
              </button>
            </>
          }
          className="my-3"
        >
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
              findAnimalCat={findAnimalCat}
            />
          </div>
        </Card>
        <Card
          Header={
            <>
              Herbivorous
              <button
                className="btn btn-sm btn-primary float-right"
                onClick={e => {
                  e.preventDefault();
                  ToggleExpCol("Herbivorous");
                }}
              >
                <i className="icon-arrow-down"></i>
              </button>
            </>
          }
          className="my-3"
        >
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
              findAnimalCat={findAnimalCat}
            />
          </div>
        </Card>
        <Card
          Header={
            <>
              Carnivorous
              <button
                className="btn btn-sm btn-primary float-right"
                onClick={e => {
                  e.preventDefault();
                  ToggleExpCol("Carnivorous");
                }}
              >
                <i className="icon-arrow-down"></i>
              </button>
            </>
          }
          className="my-3"
        >
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
              findAnimalCat={findAnimalCat}
            />
          </div>
        </Card>
        <Card
          Header={
            <>
              Omnivorous
              <button
                className="btn btn-sm btn-primary float-right"
                onClick={e => {
                  e.preventDefault();
                  ToggleExpCol("Omnivorous");
                }}
              >
                <i className="icon-arrow-down"></i>
              </button>
            </>
          }
          className="my-3"
        >
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
              Categories={Categories}
              Categorised={Categorised}
              findAnimalCat={findAnimalCat}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CategoriesPage;
