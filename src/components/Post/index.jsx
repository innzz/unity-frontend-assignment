import React from 'react';
import AllComments from '../Comment/AllComments';

const PostDetail = ({ post }) => {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Points: {post.points}</span>
        <span className="text-gray-600">Author: {post.author}</span>
      </div>

      <hr className="my-8 border-t-2 border-gray-300" />
        <AllComments comments={post.children && post.children.length > 0 ? post.children : []} />
    </div>
  );
};

export default PostDetail;





