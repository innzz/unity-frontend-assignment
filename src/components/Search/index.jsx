"use client"
import { getPostBySearch } from '@/api/post';
import React, { useEffect, useState } from 'react';

const SearchComponent = ({ onSearch, onError, onLoading }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onLoading(true);
    if (query.trim() !== '') {
      const timer = setTimeout(async () => {
        try {
        const data = await getPostBySearch(query);
          onSearch(data);
        } catch (error) {
          onError(error)
        } finally {
            onLoading(false);
        }
      }, 3000); // 3-second timeout

      return () => clearTimeout(timer); // Clear timeout on component unmount or when query changes
    }  else {
        onSearch([])
        onLoading(false);
        onError(null);
      }
  }, [query, onSearch, onError, onLoading]);

  const handleInputChange = (e) => {
    if (e.target.value.length < 150) {
        setQuery(e.target.value);
    }
  };

  return (
    <div className="flex items-center border rounded-lg overflow-hidden">
    <input 
      className="py-2 px-4 bg-white text-gray-700 focus:outline-none w-full text-[22px]" 
      type="text" 
      placeholder="Search..." 
      value={query}
      onChange={handleInputChange}
    />
  </div>
  );
};

export default SearchComponent;





