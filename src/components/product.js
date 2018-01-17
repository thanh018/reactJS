import React, { Component } from 'react';

class Product extends Component {

    // constructor(props) {
    //   super(props);
    //   this.onAddToCart = this.onAddToCart.bind(this);
    // }
    
    onAddToCart = () => {
      alert(this.props.children + ' - ' + this.props.price + '$');
    }
    render() {
      return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="thumbnail">
            <img src={this.props.image} alt={this.props.name}/>
            <div className="caption">
              <h3>
                {this.props.children}
              </h3>
              <h3>
                  {this.props.price}$
              </h3>
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