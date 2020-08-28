import React, { useState } from 'react';
import ProductForm from '../ProductForm';
import { Product } from '../../requests';

function NewProductPage(props) {
  const [productParams, setProductParams] = useState({
    title: '',
    description: '',
    price: '',
  });

  function updateProductParams(params) {
    setProductParams(state => {
      return {
        ...state,
        ...params,
      }
    })
  }

  function createProduct() {
    Product.create(productParams).then((product) => {
      props.history.push(`/products/${product.id}`);
    })
  }

  const { title, description, price } = productParams;
  return(
    <main>
      <h1> Product New Page</h1>
      <ProductForm 
        createProduct={ createProduct }
        updateProductParams={ updateProductParams }
        title={title}
        description={description}
        price={price}
      />
    </main>
  )
}

export default NewProductPage
