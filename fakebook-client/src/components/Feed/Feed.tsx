import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

interface IPost {
  id: string;
  title: string;
  text: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  function renderPosts() {
    return posts.map((post: any) => <Post post={post} key={post.id} />);

    // console.log(data);
    // posts.forEach(post => console.log(post))
  }

  renderPosts();

  return (
    <div>
      <h1>Feed</h1>
      <div>{renderPosts()}</div>
    </div>
  );
};

export default Feed;
