
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     </>
    );
  }
}

export default ContentRating;
 this.state = {
      likes: 0,
      dislikes: 0
    };
        <div className='content-rating'>
        <p>
        ---Add text here---
        </p>
        <div className='rating-buttons'>
        <button className="like-button">
            Like ({this.state.likes})
          </button>
          <button className="dislike-button">
            Dislike ({this.state.dislikes})
          </button>
        </div>
    </div>
