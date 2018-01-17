import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Product from './components/product';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [
          {
            id: 1,
            name: 'iPhone 5s',
            price: 400,
            image: 'images/iphone5s.jpg',
            status: true
          },
          {
            id: 2,
            name: 'iPhone 6s',
            price: 500,
            image: 'images/iphone5s.jpg',
            status: false
          },
          {
            id: 3,
            name: 'iPhone 7',
            price: 600,
            image: 'images/iphone5s.jpg',
            status: true
          },
          {
            id: 4,
            name: 'iPhone 8',
            price: 700,
            image: 'images/iphone5s.jpg',
            status: true
          }
        ],
        isActive: true,
        color: 'green',
        fontSize: 12
      }     
    }

    onSetColor = (params) => {
      this.setState({
        color: params
      });
      console.log(params);
    }

    onChangeSize =(value) => {
      this.setState({
        fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
      });
    }

    onSettingDefault = (value) => {
      if(true) {
        this.setState({
          color: 'green',
          fontSize: 12
        });
      }
    }

    onSetState = () => {
      this.setState({
        isActive : !this.state.isActive
      });
    }

    onAddProduct = () => {
      console.log(this.refs.name.value);
    }

    onClick(){
      console.log('This a icon block');
    }
  render() {

    // products
    var products = [
      {
        id: 0,
        name: 'Galaxy Note 8',
        price: 700,
        image: 'images/ssnote8.jpg',
        status: true
      },
      {
        id: 1,
        name: 'iPhone 5s Gray',
        price: 400,
        image: 'images/iphone5s.jpg',
        status: true
      },
      {
        id: 2,
        name: 'iPhone 6s Rose Gold',
        price: 500,
        image: 'images/iphone6s.jpg',
        status: false
      },
      {
        id: 3,
        name: 'iPhone 7 Mate Black',
        price: 600,
        image: 'images/iphone7.jpg',
        status: true
      },
      {
        id: 4,
        name: 'iPhone 8 White',
        price: 700,
        image: 'images/iphone8.jpg',
        status: true
      }
      
    ];

    // product item
    let elementsProduct = products.map((product, index) => {
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
          <td><span className="label label-success">{product.price}$</span></td>
        </tr>
      
      return result;
    });

    return (
        <div className="render-wrapper">
          <div className="container">
            <Header />
            <div className="row padding-top-50 change_color_font ">
              <ColorPicker color={this.state.color} onReceiveColor ={this.onSetColor} />
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font_setting">
                <SizeSetting 
                  fontSize={this.state.fontSize} 
                  onChangeSize={this.onChangeSize} 
                />
                <Reset onSettingDefault={this.onSettingDefault} />
              </div>
              <Result color={this.state.color} fontSize ={this.state.fontSize} />
            </div>
            

            
            <div className="row">
              <div className="padding-top-50 table-section">
                
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
              <div className="padding-top-50 product-section">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 padding-top-50 product-item">
                  {elementsProduct}
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
