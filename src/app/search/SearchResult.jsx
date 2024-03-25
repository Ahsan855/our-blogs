// components/SearchResult.js
import React from "react";

const SearchResult = ({ result }) => {
  return (
    <div className="border p-4 mb-4">
      <h2>{result.title}</h2>
      <p>{result.description}</p>
    </div>
  );
};

export default SearchResult;
