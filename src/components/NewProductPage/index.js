import React, { Component } from 'react';
import ProductForm from '../ProductForm';
import { Product } from '../../requests';

class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: '',
        description: '',
        price: '',
      }
    }
    this.createProduct = this.createProduct.bind(this);
    this.updateProductParams = this.updateProductParams.bind(this);
  }

  updateProductParams(params) {
    this.setState(state => {
      return {
        formData: { 
          ...state.formData,
          ...params, 
        }
      }
    })
  }

  createProduct() {
    const { formData } = this.state;
    Product.create(formData).then((product) => {
      this.props.history.push(`/products/${product.id}`);
    })
  }

  render() {
    const { title, description, price } = this.state.formData;
    return(
      <main>
        <h1> Product New Page</h1>
        <ProductForm 
          createProduct={ this.createProduct }
          updateProductParams={ this.updateProductParams }
          title={title}
          description={description}
          price={price}
        />
      </main>
    )
  }
}

export default NewProductPage
