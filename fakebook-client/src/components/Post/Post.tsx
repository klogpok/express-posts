import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  post: { id: string; title: string; text: string };
}

const Post: React.FC<IProps> = ({ post }) => {
  const { id, title, text } = post;
  return (
    <div className="col s12 m6">
      <div className="card grey lighten-5">
        <div className="card-content black-text">
          <span className="card-title">{title}</span>
          <p>{text}</p>
        </div>
        <div className="card-action">
          <Link to={`edit/${id}`}>Edit post</Link>
          <Link to="/delete" className="red-text">
            Delete post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
