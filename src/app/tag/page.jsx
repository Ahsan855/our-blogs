"use client";
import React, { useState } from "react";
import SearchResult from "../search/SearchResult";
import Pagination from "../share/Pagination";

const SearchByTagPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const handleSearch = async () => {
    // Implement your search logic here, e.g., fetching data from an API
    // const data = await fetchData(query);
    // setResults(data);
    // For demonstration purposes, setting dummy data
    const dummyData = [...Array(50).keys()].map((i) => ({
      id: i,
      title: `Result ${i + 1}`,
    }));
    setResults(dummyData);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return results
      .slice(startIndex, endIndex)
      .map((result) => <SearchResult key={result.id} result={result} />);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-24">
      <h1 className="text-3xl font-bold mb-4">Search by Tags</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter Tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        {results.length > 0 ? renderResults() : <p>No results found.</p>}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(results.length / resultsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SearchByTagPage;
