import React, { Component } from 'react';

 
 
class DropDown extends Component {
 

  render() {
    return (<div className="form-group">
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <select className="form-control" name={this.props.name}>
           {this.props.options()}
            </select>
      </div>
    );
  }
}
 
export default DropDown;