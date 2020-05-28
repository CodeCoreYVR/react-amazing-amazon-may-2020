import React, { Component } from 'react';
import ProductForm from '../ProductForm';
import { Product } from '../../requests';

class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(params) {
    Product.create(params).then((product) => {
      this.props.history.push(`/products/${product.id}`);
    })
  }

  render() {
    return(
      <main>
        <h1> Product New Page</h1>
        <ProductForm createProduct={ this.createProduct }/>
      </main>
    )
  }
}

export default NewProductPage