import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Search from "./Search";
import AnimalsLister from "./AnimalsLister";

const AnimalsList = ({ List }) => {
  const [Query, setQuery] = useState("");
  const [Liked, setLiked] = useState([]);
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
  return (
    <div className="Animals">
      {Liked.length > 0 && (
        <div className="row">
          <div className="col-12 text-center pt-3">
            <Link className="btn btn-outline-primary btn-sm mr-2" to="/">
              Home
            </Link>
            <Link className="btn btn-outline-primary btn-sm mr-2" to="/liked">
              Liked Animals
            </Link>
            <Link className="btn btn-outline-primary btn-sm mr-2" to="/see">
              Want to See
            </Link>
            <Link className="btn btn-outline-primary btn-sm" to="/unsee">
              Don't Want to See
            </Link>
          </div>
        </div>
      )}
      <Search Query={Query} setQuery={setQuery} />
      <div className="row my-3">
        <div className="col-12">
          <Switch>
            <Route path="/" exact={true}>
              <p>Home</p>
            </Route>
            <Route path="/liked">
              <p>Liked Animals</p>
            </Route>
            <Route path="/see">
              <p>Want to See</p>
            </Route>
            <Route path="/unsee">
              <p>Don't Want to See</p>
            </Route>
          </Switch>
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
        <AnimalsLister
          Query={Query}
          List={List}
          LikeHandler={LikeHandler}
          Liked={Liked}
        />
      </div>
    </div>
  );
};

export default AnimalsList;
