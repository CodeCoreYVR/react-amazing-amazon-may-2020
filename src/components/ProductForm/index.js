import React from 'react';

export default function ProductForm({ createProduct }) {

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    createProduct({
      id: 2352352,
      title: formData.get('title'),
      description: formData.get('description'),
      price: formData.get('price')
    })
  }

  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title'/>
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <textarea type='text' name='description'/>
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <input type='number' name='price'/>
      </div>
      <div>
        <input type='submit' value='Create Product'/>
      </div>
    </form>
  )
}