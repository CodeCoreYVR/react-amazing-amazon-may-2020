import React from 'react'
import StarRating from '../StarRating';

function ReviewDetails({ id, rating, body, created_at, reviewer, deleteReview }) {
  const fullName = reviewer ? reviewer.full_name : 'N/A';

  function handleClick() {
    deleteReview(id);
  }

  return(
    <div>
      <h4>{ body }</h4>
      <StarRating max={5} rating={rating}/>
      <small>Created at: { new Date(created_at).toLocaleDateString() } - by { fullName }</small>
      <button onClick={ handleClick }>Delete</button>
    </div>
  )
}

export default ReviewDetails