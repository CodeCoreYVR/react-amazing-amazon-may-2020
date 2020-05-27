import React, { Component } from 'react';
import productsData from '../../data/products';
import ProductDetails  from '../ProductDetails';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    }
    this.deleteProduct = this.deleteProduct.bind(this);
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

  render() {
    return(
      <main className='page'>
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