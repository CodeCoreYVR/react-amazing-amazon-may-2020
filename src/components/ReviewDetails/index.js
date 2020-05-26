import React from 'react'

function ReviewDetails({ rating, body, created_at, reviewer }) {
  const fullName = reviewer ? reviewer.full_name : 'N/A'
  return(
    <div>
      <h4>{ rating } : { body }</h4>
      <small>Created at: { new Date(created_at).toLocaleDateString() } - by { fullName }</small>
    </div>
  )
}

export default ReviewDetails