import React from 'react'
import productData from '../../data/product'
import ProductDetails from '../ProductDetails';
import ReviewList from '../ReviewList';

function ProductShowPage() {
  const { id, title, description, created_at, seller, reviews } = productData
  return (
    <main className='page'>
      <ProductDetails 
        id={id}
        title={title}
        description={description}
        created_at={created_at}
        seller={seller}
      />
      <ReviewList reviews={reviews} />
    </main>
  )
}

export default ProductShowPage