import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Search from "./Search";
import AnimalsLister from "./AnimalsLister";

const AnimalsList = ({ List }) => {
  const [Query, setQuery] = useState("");
  const [Liked, setLiked] = useState([]);
  const [See, setSee] = useState([]);
  const LikeHandler = animal => {
    const newLikes = [...Liked];
    const index = Liked.indexOf(animal);
    if (index > -1) {
      newLikes.splice(index, 1);
    } else {
      newLikes.push(animal);
    }
    setLiked(newLikes);
  };
  const SeeHandler = animal => {
    const newSee = [...See];
    const index = See.indexOf(animal);
    if (index > -1) {
      newSee.splice(index, 1);
    } else {
      newSee.push(animal);
    }
    setSee(newSee);
  };
  return (
    <div className="Animals">
      <div className="row">
        <div className="col-12 text-center pt-3">
          <NavLink
            className="btn btn-outline-primary btn-sm mr-2"
            to="/"
            exact={true}
          >
            Home
          </NavLink>
          {Liked.length > 0 && (
            <>
              <NavLink
                className="btn btn-outline-primary btn-sm mr-2"
                to="/liked"
              >
                Liked Animals
              </NavLink>
              <NavLink
                className="btn btn-outline-primary btn-sm mr-2"
                to="/see"
              >
                Want to See
              </NavLink>
              <NavLink className="btn btn-outline-primary btn-sm" to="/unsee">
                Don't Want to See
              </NavLink>
            </>
          )}
        </div>
      </div>
      <Search Query={Query} setQuery={setQuery} />
      <div className="row my-3">
        <div className="col-12">
          <h3>
            Animals
            <span className="badge badge-pill badge-success ml-2">
              {Liked.length > 0 &&
                `(${Liked.length} liked animal${
                  Liked.length !== 1 ? "s" : ""
                })`}
            </span>
          </h3>
        </div>
        <Switch>
          <Route path="/" exact={true}>
            <div className="col-12">
              <p>Showing all the animals.</p>
            </div>
            <AnimalsLister
              Query={Query}
              List={List}
              LikeHandler={LikeHandler}
              Liked={Liked}
              See={See}
              setSee={setSee}
              SeeHandler={SeeHandler}
            />
          </Route>
          <Route path="/liked">
            <div className="col-12">
              <p>Showing the list of animals that you liked.</p>
            </div>
            <AnimalsLister
              Query={Query}
              List={List.filter(animal => Liked.includes(animal.Name))}
              LikeHandler={LikeHandler}
              Liked={Liked}
              See={See}
              setSee={setSee}
              SeeHandler={SeeHandler}
            />
          </Route>
          <Route path="/see">
            <div className="col-12">
              <p>Showing the list of animals that you want to see.</p>
            </div>
          </Route>
          <Route path="/unsee">
            <div className="col-12">
              <p>Showing the list of animals that you don't want to see.</p>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AnimalsList;
