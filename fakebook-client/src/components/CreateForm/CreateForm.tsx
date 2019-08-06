import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

const CreateForm: React.FC<RouteComponentProps> = ({ history }) => {
  const [post, setPost] = useState({});

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const createHandler = async e => {
    e.preventDefault();

    await fetch('/api/posts/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(post),
    });

    history.push(`/feed`);
  };

  return (
    <>
      <h3>Create post</h3>

      <form action="/add" method="POST" onSubmit={createHandler}>
        <div className="input-field">
          <input
            id="title"
            name="title"
            type="text"
            className="validate"
            required
            onChange={handleChange}
          />
          <label htmlFor="title">Title</label>
          <span className="helper-text" data-error="Type title" />
        </div>
        <div className="input-field ">
          <textarea
            id="body"
            name="text"
            className="materialize-textarea validate"
            required
            onChange={handleChange}
          />
          <label htmlFor="body">Post</label>
          <span className="helper-text" data-error="Type text" />
        </div>
        <button className="btn btn-primary">Add post</button>
      </form>
    </>
  );
};

export default withRouter(CreateForm);
