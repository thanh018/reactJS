import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Product from './components/product';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';


class App extends Component {
    


    onClick(){
      console.log('This a icon block');
    }

    constructor(props) {
      super(props);
      this.state = {
        products: [
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
        ],
        isActive: true,
        color: 'green',
        fontSize: 15
      }
      
    }

    onSetState = () => {
      // if(this.state.isActive === true) {
      //   this.setState({
      //     isActive : false
      //   });
      // } else {
      //   this.setState({
      //     isActive : true
      //   });
      // }

      this.setState({
        isActive : !this.state.isActive
      });
    }

    onAddProduct = () => {
      console.log(this.refs.name.value);
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
    
    let tables = this.state.products.map((product, index) => {
      let result = '';
      result =
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td><span className="label label-success">{product.price}</span></td>
        </tr>
      
      return result;
    });

    return (
        <div>
          <Header />
          <div className="container">
            
            <div className="row">
              <ColorPicker color={this.state.color} />

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
                <SizeSetting />
                <Reset />
              </div>

              <Result />
            </div>
            

            
            <div className="row">
              <div className="row">
                
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tables}
                  </tbody>
                </table>
                
                <button type="button" className="btn btn-warning" onClick={this.onSetState}>
                  Active : {this.state.isActive === true ? 'true': 'false'}
                </button>
                
                
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="panel panel-danger">
                      <div className="panel-heading">
                        <h3 className="panel-title">Add Product</h3>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                          <label>Name Product</label>
                          <input type="text" className="form-control" ref="name"/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Save</button>
                      </div>
                  </div>
                </div>
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
          </div>
        </div>
    );
  }
}

export default App;
