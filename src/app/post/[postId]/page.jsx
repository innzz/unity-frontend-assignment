import { getPostDetail } from '@/api/post';
import PostDetail from '@/components/Post';
import React from 'react'

 async function Post({params}) {
    const postId = params.postId;
    const post = await getPostDetail(postId);   
    
  return (
    <div className='container'><PostDetail post={post} /></div>
  )
}

export default Post