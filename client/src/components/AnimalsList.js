import React from "react";

const AnimalsList = ({ List }) => {
  return (
    <div className="Animals">
      <pre className="border rounded bg-light p-1 my-3">
        {JSON.stringify(List, null, 2)}
      </pre>
    </div>
  );
};

export default AnimalsList;
