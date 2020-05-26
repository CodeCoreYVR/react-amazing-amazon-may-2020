import React from 'react';
import Star from '../Star';

function StarRating({ max, rating }) {
  const stars = []
  for(let i = 0; i < max; i++) {
    if (i < rating) {
      stars.push(
        <Star style={{color: 'yellow', width: '25px'}}/>
      )
    } else {
      stars.push(
        <Star style={{width: '25px', color: 'lightgrey'}}/>
      )
    }
  }
  return(
    <div>
      { stars }
    </div>
  )
}

export default StarRating
