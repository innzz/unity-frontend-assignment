import Link from 'next/link';
import React from 'react';

const SearchResultCard = ({ result, index }) => {
  return (
    <Link href={`/post/${result.objectID}`} className={`bg-white shadow-lg p-6 mb-4 rounded-md cursor-pointer animate__animated animate__fadeIn animate__delay-${index}s transform hover:scale-105 transition-transform`}>
      <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
      <div className="flex justify-between items-center">
        <span className="text-gray-600"><strong>author: </strong>{result.author}</span>
        <span className="text-gray-600"><strong>created at: </strong>{new Date(result.created_at).toLocaleString()}</span>
      </div>
    </Link>
  );
};

export default SearchResultCard;
