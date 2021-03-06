import React, { useState } from "react";
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
  findAnimalCat,
  reloadAnimals
}) => {
  const [EditMode, setEditMode] = useState(false);
  const [Expanded, setExpanded] = useState({
    Uncategorised: true,
    Herbivorous: true,
    Carnivorous: true,
    Omnivorous: true
  });
  const ToggleExpCol = cat => {
    setExpanded({ ...Expanded, [cat]: !Expanded[cat] });
  };
  return (
    <div className="col-12">
      <button
        className={
          "btn btn-sm btn" +
          (EditMode ? "" : "-outline") +
          "-primary float-right"
        }
        onClick={e => {
          e.preventDefault();
          setEditMode(!EditMode);
        }}
      >
        {EditMode && "Close "}
        Edit
      </button>
      <p>Set Edit mode if you want to edit.</p>
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
                <i
                  className={
                    "icon-arrow-" + (Expanded.Uncategorised ? "down" : "up")
                  }
                ></i>
              </button>
            </>
          }
          className="my-3"
        >
          {Expanded.Uncategorised && (
            <div className="row">
              <AnimalsLister
                Query={Query}
                List={List.filter(animal => !Categorised.includes(animal.Name))}
                LikeHandler={LikeHandler}
                Liked={Liked}
                See={See}
                SeeHandler={SeeHandler}
                ToggleAnimalCat={EditMode ? ToggleAnimalCat : null}
                Categories={Categories}
                Categorised={Categorised}
                findAnimalCat={findAnimalCat}
                reloadAnimals={reloadAnimals}
              />
            </div>
          )}
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
                <i
                  className={
                    "icon-arrow-" + (Expanded.Herbivorous ? "down" : "up")
                  }
                ></i>
              </button>
            </>
          }
          className="my-3"
        >
          {Expanded.Herbivorous && (
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
                ToggleAnimalCat={EditMode ? ToggleAnimalCat : null}
                Categories={Categories}
                Categorised={Categorised}
                findAnimalCat={findAnimalCat}
              />
            </div>
          )}
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
                <i
                  className={
                    "icon-arrow-" + (Expanded.Carnivorous ? "down" : "up")
                  }
                ></i>
              </button>
            </>
          }
          className="my-3"
        >
          {Expanded.Carnivorous && (
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
                ToggleAnimalCat={EditMode ? ToggleAnimalCat : null}
                Categories={Categories}
                Categorised={Categorised}
                findAnimalCat={findAnimalCat}
              />
            </div>
          )}
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
                <i
                  className={
                    "icon-arrow-" + (Expanded.Omnivorous ? "down" : "up")
                  }
                ></i>
              </button>
            </>
          }
          className="my-3"
        >
          {Expanded.Omnivorous && (
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
                ToggleAnimalCat={EditMode ? ToggleAnimalCat : null}
                Categories={Categories}
                Categorised={Categorised}
                findAnimalCat={findAnimalCat}
              />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CategoriesPage;
