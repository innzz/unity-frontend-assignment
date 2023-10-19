"use client"
import SearchComponent from '@/components/Search'
import SearchResults from '@/components/Search/SearchResults';
import React, { useState } from 'react'

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  return (
    <div className='container py-10 flex flex-col gap-[26px]'>
      <SearchComponent onSearch={setPosts} onLoading={setLoading} onError={setError} />
      <SearchResults results={posts.hits || []} loading={loading} error={error} />
    </div>
  )
}

export default HomePage