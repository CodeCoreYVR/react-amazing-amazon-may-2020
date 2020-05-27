import React, { Component } from 'react';
import productsData from '../../data/products';
import ProductDetails  from '../ProductDetails';
import ProductForm from '../ProductForm';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    }
    this.deleteProduct = this.deleteProduct.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  deleteProduct(id) {
    this.setState((state) => {
      return {
        products: state.products.filter((product) => {
          return product.id !== id;
        })
      }
    })
  }

  createProduct(params) {
    console.log('createProduct invoked')
    this.setState((state) => {
      return {
        products: [
          { ...params },
          ...state.products
        ]
      }
    })
  }

  render() {
    return(
      <main className='page'>
        <ProductForm createProduct={ this.createProduct }/>
        { this.state.products.map((product) => {
          return(
            <ProductDetails key={product.id} {...product} deleteProduct={this.deleteProduct}/>
            // <ProductDetails
            //   id={product.id}
            //   price={product.price}
            //   seller={product.seller}
            // />
          )
        })}
      </main>
    )
  }
}

export default ProductIndexPage