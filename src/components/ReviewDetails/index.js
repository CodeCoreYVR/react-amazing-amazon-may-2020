import React from 'react'
import StarRating from '../StarRating';

function ReviewDetails({ rating, body, created_at, reviewer }) {
  const fullName = reviewer ? reviewer.full_name : 'N/A'
  return(
    <div>
      <h4>{ body }</h4>
      <StarRating max={5} rating={rating}/>
      <small>Created at: { new Date(created_at).toLocaleDateString() } - by { fullName }</small>
    </div>
  )
}

export default ReviewDetails