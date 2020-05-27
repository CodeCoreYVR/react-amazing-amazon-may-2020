import React from 'react';

function ProductDetails({ id, title, description, price, created_at, seller, deleteProduct }) {
  let sellerName = seller ? seller.full_name : '';

  function handleDelete() {
    deleteProduct(id);
  }

  return(
    <div>
      <h2>{ title } | { price } <button onClick={ handleDelete }>Delete</button></h2>
      <p>{ description }</p>

      <small>Sold by: { sellerName }</small>
      <br></br>
      <small>Posted at: {new Date(created_at).toLocaleString()}</small>
    </div>
  )
}

export default ProductDetails
