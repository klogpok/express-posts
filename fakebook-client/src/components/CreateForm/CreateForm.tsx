import React from 'react';

const CreateForm: React.FC = () => {
  return (
    <>
      <h3>Create post</h3>

      <form action="/add" method="POST">
        <div className="input-field">
          <input id="title" name="title" type="text" className="validate" required />
          <label htmlFor="title">Title</label>
          <span className="helper-text" data-error="Type title" />
        </div>
        <div className="input-field ">
          <textarea id="body" name="text" className="materialize-textarea validate" required />
          <label htmlFor="body">Post</label>
          <span className="helper-text" data-error="Type text" />
        </div>
        <button className="btn btn-primary">Add post</button>
      </form>
    </>
  );
};

export default CreateForm;
