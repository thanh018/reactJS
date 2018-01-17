import React, { Component } from 'react';

class Result extends Component {
    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        };
    }

    setStyleColor() {
        return {
            color: this.props.color
        };
    }

    setfontSize() {
        return {
            fontSize: this.props.fontSize
        };
    }
    render() {
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 result-section padding-top-50">
                
                <div className="panel panel-default" style={ this.setStyle() }>
                      <div className="panel-heading">
                            <h3 className="panel-title">
                                <p>Color: <span style={ this.setStyleColor()}> {this.props.color} </span> - Fontsize: <span style={ this.setStyleColor()}> {this.props.fontSize} </span></p>
                            </h3>
                            
                      </div>
                      <div className="panel-body">
                      <div id="content" style={ this.setStyle() }>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            | when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            | It has survived not only five centuries, but also the leap into electronic typesetting, 
                            | remaining essentially unchanged. 
                            | It was popularised in the 19120s with the release of Letraset sheets containing 
                            | Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                            | PageMaker including versions of Lorem Ipsum
                            </div>
                      </div>
                </div>
                
            </div>
        );
    }
}
    

export default Result;
