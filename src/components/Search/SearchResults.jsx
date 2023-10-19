"use client"
import React from 'react';
import SearchResultCard from './SearchResultCard';

const SearchResults = ({ loading, error, results }) => {
  if (loading) {
    return <div className="animate-pulse text-[26px]">Loading...</div>;
  }

  if (error) {
    return <div className="text-[26px]">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="animate__animated animate__fadeIn text-2xl mb-4">Search Results</h2>
      <div className="flex flex-wrap gap-[15px] h-[80vh] overflow-y-auto">
      {results.map((result,index) => (
        <SearchResultCard key={result.id} result={result} index={index} />
      ))}
    </div>
    </div>
  );
};

export default SearchResults;
