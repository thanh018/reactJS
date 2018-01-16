import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Product from './components/product';


class App extends Component {
    onClick(){
      console.log('This a icon block');
    }
  render() {
    var products = [
      {
        id: 1,
        name: 'iphone 7 plus back',
        price: 1500000,
        image: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/iphone-7-plus-1.jpg',
        status: true
      },
      {
        id: 2,
        name: 'iphone 8 plus gold',
        price: 1500000,
        image: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/iphone-7-plus-1.jpg',
        status: false
      },
      {
        id: 3,
        name: 'iphone 10 back',
        price: 1500000,
        image: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/iphone-7-plus-1.jpg',
        status: true
      },
      {
        id: 4,
        name: 'iphone 6 back',
        price: 1500000,
        image: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/iphone-7-plus-1.jpg',
        status: true
      }
    ];

    let elements = products.map((product, index) => {
      let result = '';
      if(product.status) {
        result = <Product
                    key={product.id}
                    price={product.price}
                    image={product.image}
                  >
                    {product.name}
                  </Product>
      }
      return result;
    });

    return (
        <div>
          <Header />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <button type="button" className="btn btn-warning" onClick={ this.onClick}>
                  Click me
                </button>

            </div>
          </div>
        </div>
    );
  }
}

export default App;
