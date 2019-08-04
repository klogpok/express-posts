import React, {useState, useEffect} from 'react';
import Post from '../Post/Post';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect( () => {    
    fetch('http://localhost:5000/api/posts/').then((res) => res.json()).then((data) => {
      // console.log(data);
      setPosts(data);
    }) 
  }, []);

  function renderPosts()  {
    return posts.map(post => {
      
      return <Post post={post} />
    })
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
  }

export default Feed;