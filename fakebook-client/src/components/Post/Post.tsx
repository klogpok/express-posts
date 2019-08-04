import React from 'react';

interface IProps {
    post: {id: string,
    title: string,
    text: string}
}

const Post: React.FC<IProps> = (props) => {
    const {id, title, text} = props.post;
    return (
        
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{text}</p>
            </div>
            <div className="card-action">
              {/* <a href="#">This is a link</a>
              <a href="#">This is a link</a> */}
            </div>
          </div>
        </div>
      
    );
  }

export default Post;