import React from "react";
import Card from "./Card";

const Search = ({ Query, setQuery }) => {
  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <div className="row my-3">
      <div className="col-12">
        <Card className="Search">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text to search..."
            value={Query}
            onChange={handleChange}
          />
        </Card>
      </div>
    </div>
  );
};

export default Search;
