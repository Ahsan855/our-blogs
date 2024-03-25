"use client";
import React, { useState } from "react";
import Pagination from "../share/Pagination";
import SearchResult from "./SearchResult";

export default function SearchByCategory() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const handleSearch = async () => {
    // For demonstration, logging the input query
    console.log("Search Query:", query);

    // You can perform actual search logic here
    // const data = await searchByCategory(query);
    // setResults(data);
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
    <div className="mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Search By Category</h1>

        <div className="gap-x-5 flex items-center">
          <input
            type="text"
            placeholder="Search by category..."
            onChange={(e) => setQuery(e.target.value)}
            className="w-full   px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            className="bg-primary text-white px-4 py-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="mt-6">
          {results.length > 0 ? renderResults() : <p>No results found.</p>}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(results.length / resultsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
