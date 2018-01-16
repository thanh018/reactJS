import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Product from './components/product';


class App extends Component {
  showInfoProduct(product) {
    if(product.status) {
      return(
        <div>
            <h1>{product.id}</h1>
            <h1>{product.price + 4000000}</h1>
            <h1>{product.status ? 'active': 'deactive'}</h1>
        </div>
      );
    }
  }
  render() {
    var a = 5;
    var product = {
      id: 1,
      name: 'iphone 6 plus',
      price: 5000000,
      status: true
    }
    return (
        <div>
          <Header />

          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Product />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">              
              <Product />
            </div>
          </div>

          { this.showInfoProduct(product) }

        </div>
    );
  }
}

export default App;
