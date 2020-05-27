import React, { Component } from 'react';
import productsData from '../../data/products';
import ProductDetails  from '../ProductDetails';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    }
  }

  render() {
    return(
      <main className='page'>
        { this.state.products.map((product) => {
          return(
            <ProductDetails key={product.id} {...product} />
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