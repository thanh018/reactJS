import React, { Component } from 'react';

class Product extends Component {

    // constructor(props) {
    //   super(props);
    //   this.onAddToCart = this.onAddToCart.bind(this);
    // }
    
    onAddToCart = () => {
      alert(this.props.children + ' - ' + this.props.price);
    }
    render() {
      return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.image} alt={this.props.name}/>
            <div className="caption">
              <h3>
                {this.props.children}
              </h3>
              <h2>
                  {this.props.price}
              </h2>
              <p>
                {this.props.description}
              </p>
              <p>
                <a className="btn btn-primary" onClick={ this.onAddToCart}>Add to Cart</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Product;