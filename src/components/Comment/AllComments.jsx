"use client";
import React, { useState } from "react";
import Comment from ".";

function AllComments({ comments }) {
  const [showAllComments, setShowAllComments] = useState(false);

  const toggleComments = () => {
    setShowAllComments(!showAllComments);
  };

  const displayedComments = showAllComments
    ? comments
    : comments.slice(0, 3);
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Comments</h2>
      <ul>
        {displayedComments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))
         }
      </ul>
      {comments.length > 3 && (
        <button 
          onClick={toggleComments} 
          className="text-blue-500 font-bold underline mt-4"
        >
          {showAllComments ? 'Show Less' : 'View More'}
        </button>
      )}
    </div>
  );
}

export default AllComments;
