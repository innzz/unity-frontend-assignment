import React from 'react';

const Comment = ({ comment }) => {
  return ( 
    <div className="bg-white shadow-md p-4 mb-4 rounded-md">
      <div className="flex justify-between mb-2">
        <span className="font-bold">{comment.author}</span>
        <span className="text-gray-600">{comment.points} Points</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: comment.text }} />
    </div>
  );
};

export default Comment;