import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

// import { RouteComponentProps } from 'react-router-dom';

const EditForm = ({ match, history }) => {
  const { id } = match.params;
  const url = `/api/posts/${id}`;

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPost(data);
      });
  }, [url]);

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const editHandler = e => {
    e.preventDefault();

    // const j = JSON.stringify(post);

    // const x = `"sds": "sdsd"`;

    // console.log(j);

    // fetch('/api/posts/edit/', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: { j },
    // });

    history.push(`/feed`);
  };

  return (
    <>
      <h3>Edit post</h3>
      {post && (
        <form action="/add" method="POST" onSubmit={editHandler}>
          <div className="input-field">
            <input
              id="title"
              name="title"
              type="text"
              className="validate"
              required
              value={post.title}
              onChange={handleChange}
            />
            {/* <label htmlFor="title">Title</label> */}
            <span className="helper-text" data-error="Type title" />
          </div>
          <div className="input-field ">
            <textarea
              id="text"
              name="text"
              className="materialize-textarea validate"
              value={post.text}
              onChange={handleChange}
              required
            />

            {/* <label htmlFor="body">Post</label> */}
            <span className="helper-text" data-error="Type text" />
          </div>
          <button className="btn btn-primary">Edit post</button>
        </form>
      )}
    </>
  );
};

export default withRouter(EditForm);
