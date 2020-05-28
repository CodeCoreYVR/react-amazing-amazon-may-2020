import React, { Component } from 'react';
import productsData from '../../data/products';
import ProductDetails  from '../ProductDetails';
import ProductForm from '../ProductForm';
import { Link } from 'react-router-dom';

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
          { ...params,
            id: state.products[0] + 1,
            created_at: new Date().toString()
          },
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
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductDetails {...product} deleteProduct={this.deleteProduct}/>
            </Link>
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