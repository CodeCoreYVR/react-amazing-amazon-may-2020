import React from 'react';
import ReviewDetails from '../ReviewDetails';

function ReviewList({ reviews }) {
  return(
    <ul className="list">
      { reviews.map(review => {
        return(
          <li key={review.id}><ReviewDetails { ...review }/></li>
        )
      })}
    </ul>
  )
}
export default ReviewList;