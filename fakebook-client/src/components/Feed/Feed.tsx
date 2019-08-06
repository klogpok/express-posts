import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import Post from '../Post/Post';

interface IPost {
  id: string;
  title: string;
  text: string;
}

const Feed: React.FC<RouteComponentProps> = ({ match, history }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  function renderPosts() {
    return posts.map((post: any) => (
      <Post post={post} key={post.id} deletePost={deletePostHandler} />
    ));
  }

  async function deletePostHandler(id) {
    console.log(history);
    await fetch(`/api/posts/${id}/delete`);
    history.push('/');
  }

  return (
    <div>
      <h1>Feed</h1>
      <div>{renderPosts()}</div>
    </div>
  );
};

export default withRouter(Feed);
