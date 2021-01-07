import React from "react";
import Card from "./Card";

const Search = () => {
  return (
    <div className="row my-3">
      <div className="col-12">
        <Card className="Search">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text to search..."
          />
        </Card>
      </div>
    </div>
  );
};

export default Search;
