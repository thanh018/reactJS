import React, { Component } from 'react';

class Product extends Component {
    render() {
      return (  
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <img src="https://tintuc.shopdunk.com/wp-content/uploads/2017/07/iphone-6-plus-lock-my-ngua-den-tren-thi-truong-hien-nay-min.png" alt="iphone 6 plus"/>
            <div className="caption">
              <h3>iPhone 6 Plus</h3>
              <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                <a className="btn btn-primary">Add to Cart</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Product;