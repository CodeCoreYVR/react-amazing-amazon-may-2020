import React from 'react';

function ProductForm({ createProduct }) {
  const handleSubmit = event => {
    event.preventDefault()
    const { currentTarget } = event
    const formData = new FormData(currentTarget)
    createProduct({
      title: formData.get('title'),
      price: formData.get('price'),
      seller: {
        full_name: formData.get('full_name')
      }
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" />
      </div>
      <div>
        <label htmlFor="full_name">Full Name</label>
        <input type="text" name="full_name" />
      </div>
      <div>
        <input type="submit" value="Create" />
      </div>
    </form>
  )
}

export default ProductForm
