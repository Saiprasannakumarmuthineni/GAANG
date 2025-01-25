import React from 'react';
import { Post } from '../../types/Post';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>Author: {post.author}</small>
      <br />
      <small>Posted on: {new Date(post.createdAt).toLocaleDateString()}</small>
    </div>
  );
};

export default PostCard;
