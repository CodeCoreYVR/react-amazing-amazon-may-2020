import React from 'react';

function ProductDetails({ title, description, price, created_at, seller }) {
  let sellerName = seller ? seller.full_name : '';
  return(
    <div>
      <h2>{ title } | { price }</h2>
      <p>{ description }</p>

      <small>Sold by: { sellerName }</small>
      <br></br>
      <small>Posted at: {new Date(created_at).toLocaleString()}</small>
    </div>
  )
}

export default ProductDetails
