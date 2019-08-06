import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  post: { id: string; title: string; text: string };
  deletePost: Function;
}

const Post: React.FC<IProps> = props => {
  const { id, title, text } = props.post;

  const handleClick = e => {
    e.preventDefault();
    props.deletePost(id);
  };

  return (
    <div className="col s12 m6">
      <div className="card grey lighten-5">
        <div className="card-content black-text">
          <span className="card-title">{title}</span>
          <p>{text}</p>
        </div>
        <div className="card-action">
          <Link to={`edit/${id}`}>Edit post</Link>
          <a href="/" className="red-text" onClick={handleClick}>
            Delete post
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
